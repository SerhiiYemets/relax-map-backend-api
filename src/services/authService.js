import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';
import Session from '../models/session.js';

const ACCESS_TOKEN_TTL = '15m';
const REFRESH_TOKEN_TTL = '7d';

export const registerUser = async ({ email, password, name }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashedPassword,
    name,
  });

  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  const session = await Session.create({
    userId: user._id,
  });

  const accessToken = jwt.sign(
    { userId: user._id, sessionId: session._id },
    process.env.JWT_SECRET,
    { expiresIn: ACCESS_TOKEN_TTL }
  );

  const refreshToken = jwt.sign(
    { sessionId: session._id },
    process.env.JWT_SECRET,
    { expiresIn: REFRESH_TOKEN_TTL }
  );

  return {
    accessToken,
    refreshToken,
    sessionId: session._id,
    user,
  };
};

export const logoutUser = async (sessionId) => {
  await Session.findByIdAndDelete(sessionId);
};

export const refreshSession = async (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

    const session = await Session.findById(decoded.sessionId);

    if (!session) {
      throw new Error('Session not found');
    }

    const accessToken = jwt.sign(
      { userId: session.userId, sessionId: session._id },
      process.env.JWT_SECRET,
      { expiresIn: ACCESS_TOKEN_TTL }
    );

    const newRefreshToken = jwt.sign(
      { sessionId: session._id },
      process.env.JWT_SECRET,
      { expiresIn: REFRESH_TOKEN_TTL }
    );

    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  } catch {
    throw new Error('Invalid refresh token');
  }
};
