const swaggerCustomCss = `
  body {
    background: #f5f7fa;
  }

  .swagger-ui {
    font-family: Inter, sans-serif;
    color: #1f2937;
  }

  /* HEADER */
  .swagger-ui .topbar {
    background: #1f2937;
    padding: 12px 0;
  }

  .swagger-ui .topbar-wrapper img {
    display: none;
  }

  .swagger-ui .topbar-wrapper::after {
    content: "Relax Map API";
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }

  /* TITLE */
  .swagger-ui .info .title {
    font-size: 34px;
    font-weight: 800;
    color: #374151;
  }

  .swagger-ui .info p {
    color: #6b7280;
  }

  /* SERVER BLOCK */
  .swagger-ui .scheme-container {
    background: #f3f4f6;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
  }

  /* AUTHORIZE BUTTON */
  .swagger-ui .btn.authorize {
    background: #22c55e;
    color: white;
    border-radius: 8px;
    border: none;
  }

  /* TAG TITLES (Auth, Notes) */
  .swagger-ui .opblock-tag {
    font-size: 22px;
    font-weight: 700;
    color: #374151;
    border-bottom: none;
    margin-top: 25px;
  }

  /* ENDPOINT ROW */
  .swagger-ui .opblock {
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    box-shadow: none;
    margin-bottom: 10px;
    overflow: hidden;
  }

  /* SUMMARY LINE */
  .swagger-ui .opblock-summary {
    padding: 12px 16px;
    align-items: center;
  }

  /* METHOD BADGE */
  .swagger-ui .opblock-summary-method {
    border-radius: 6px;
    font-weight: 700;
    padding: 6px 12px;
  }

  /* PATH */
  .swagger-ui .opblock-summary-path {
    font-weight: 600;
    color: #374151;
  }

  .swagger-ui .opblock-summary-description {
    color: #6b7280;
  }

  /* 🔥 COLORS LIKE IN SCREEN */

  /* POST */
  .swagger-ui .opblock.opblock-post {
    background: #e6f9f0;
    border: 1px solid #34d399;
  }

  /* GET */
  .swagger-ui .opblock.opblock-get {
    background: #e8f1ff;
    border: 1px solid #60a5fa;
  }

  /* PUT */
  .swagger-ui .opblock.opblock-put {
    background: #fff7ed;
    border: 1px solid #fb923c;
  }

  /* DELETE */
  .swagger-ui .opblock.opblock-delete {
    background: #fee2e2;
    border: 1px solid #f87171;
  }

  /* REMOVE DARK EXPANDED AREA */
  .swagger-ui .opblock-section-header {
    background: #f9fafb;
  }

  /* INPUTS */
  .swagger-ui input,
  .swagger-ui textarea {
    border-radius: 6px;
    border: 1px solid #d1d5db;
  }

  /* MODELS */
  .swagger-ui section.models {
    margin-top: 30px;
    background: white;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    padding: 16px;
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
    color: #2563eb;
  }

  .swagger-ui pre {
    background: #1f2937 !important;
    color: #e5e7eb !important;
    border-radius: 8px;
  }
`;

export default swaggerCustomCss;
