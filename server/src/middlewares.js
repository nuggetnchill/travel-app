// Not Found (error handler)
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(400);
  next(error);
};

// Error Middleware (general error handler)
//  eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack:
      process.env.NODE_ENV === 'production'
        ? '🥞 here is my stack'
        : error.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
