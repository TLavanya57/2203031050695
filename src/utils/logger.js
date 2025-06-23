const logger = (message, data = null) => {
  const logEntry = {
    message,
    timestamp: new Date().toISOString(),
    data,
  };
  localStorage.setItem(`log-${Date.now()}`, JSON.stringify(logEntry));
};

export default logger;
