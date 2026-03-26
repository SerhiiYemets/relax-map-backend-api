const swaggerCustomCss = `
/* GLOBAL */
body {
  background: #f5f7fa;
}

.swagger-ui {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1f2937;
}

/* WRAPPER SPACING */
.swagger-ui .wrapper {
  padding: 30px 40px;
}

/* HEADER */
.swagger-ui .topbar {
  background: linear-gradient(90deg, #1f2937, #111827);
  padding: 14px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.swagger-ui .topbar-wrapper img {
  display: none;
}

.swagger-ui .topbar-wrapper span {
  display: none;
}

.swagger-ui .topbar-wrapper::after {
  content: "Relax Map API";
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* TITLE */
.swagger-ui .info {
  margin-bottom: 25px;
}

.swagger-ui .info .title {
  font-size: 36px;
  font-weight: 800;
  color: #111827;
  margin-bottom: 10px;
}

.swagger-ui .info p {
  color: #6b7280;
  font-size: 14px;
}

/* SERVER BLOCK */
.swagger-ui .scheme-container {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 14px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.04);
}

/* AUTHORIZE BUTTON */
.swagger-ui .btn.authorize {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  padding: 6px 14px;
  box-shadow: 0 4px 12px rgba(34,197,94,0.4);
  transition: all 0.2s ease;
}

.swagger-ui .btn.authorize:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(34,197,94,0.5);
}

/* TAG TITLES */
.swagger-ui .opblock-tag {
  font-size: 22px;
  font-weight: 700;
  color: #111827;
  margin-top: 30px;
  margin-bottom: 10px;
}

/* ENDPOINT CARD */
.swagger-ui .opblock {
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  background: white;
  margin-bottom: 14px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.05);
  transition: all 0.2s ease;
}

.swagger-ui .opblock:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.08);
}

/* SUMMARY */
.swagger-ui .opblock-summary {
  padding: 14px 18px;
  align-items: center;
}

/* METHOD BADGE */
.swagger-ui .opblock-summary-method {
  color: white;
  border-radius: 8px;
  font-weight: 700;
  padding: 6px 12px;
  min-width: 80px;
  text-align: center;
}

/* METHOD COLORS */
.swagger-ui .opblock-get .opblock-summary-method {
  background: #3b82f6;
}

.swagger-ui .opblock-post .opblock-summary-method {
  background: #10b981;
}

.swagger-ui .opblock-put .opblock-summary-method {
  background: #f59e0b;
}

.swagger-ui .opblock-delete .opblock-summary-method {
  background: #ef4444;
}

/* PATH */
.swagger-ui .opblock-summary-path {
  font-weight: 600;
  color: #111827;
}

.swagger-ui .opblock-summary-description {
  color: #6b7280;
}

/* EXPANDED HEADER */
.swagger-ui .opblock-section-header {
  background: #f9fafb;
}

/* INPUTS */
.swagger-ui input,
.swagger-ui textarea,
.swagger-ui select {
  border-radius: 8px;
  border: 1px solid #d1d5db;
  padding: 8px 10px;
  transition: all 0.2s ease;
}

.swagger-ui input:focus,
.swagger-ui textarea:focus,
.swagger-ui select:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
  outline: none;
}

/* EXECUTE BUTTON */
.swagger-ui .btn.execute {
  background: #6366f1;
  border-radius: 8px;
  border: none;
  color: white;
  font-weight: 600;
}

.swagger-ui .btn.execute:hover {
  background: #4f46e5;
}

/* MODELS */
.swagger-ui section.models {
  margin-top: 30px;
  background: white;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  padding: 18px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.04);
}

.swagger-ui .model-box {
  background: #f9fafb;
  border-radius: 10px;
  padding: 12px;
}

.swagger-ui .prop-name {
  font-weight: 600;
  color: #111827;
}

.swagger-ui .prop-type {
  color: #6366f1;
}

/* CODE BLOCK */
.swagger-ui pre {
  background: #111827 !important;
  color: #e5e7eb !important;
  border-radius: 10px;
  padding: 14px;
  border: 1px solid #374151;
}

/* SCROLLBAR (nice touch) */
::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
`;

export default swaggerCustomCss;
