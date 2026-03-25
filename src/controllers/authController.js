import {
  registerUser,
  loginUser,
  logoutUser,
  refreshSession,
} from '../services/authService.js';

export const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      message: 'User registered',
      user,
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { accessToken, refreshToken, sessionId, user } =
      await loginUser(req.body);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
    });

    res.cookie('sessionId', sessionId, {
      httpOnly: true,
    });

    res.json({ user });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res, next) => {
  try {
    const { sessionId } = req.cookies;

    await logoutUser(sessionId);

    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.clearCookie('sessionId');

    res.json({ message: 'Logged out' });
  } catch (err) {
    next(err);
  }
};

export const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;

    const tokens = await refreshSession(refreshToken);

    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
    });

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
    });

    res.json({ message: 'Session refreshed' });
  } catch (err) {
    next(err);
  }
};
