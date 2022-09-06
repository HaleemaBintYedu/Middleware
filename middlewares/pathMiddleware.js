const pathMiddleware = (req, res, next) => {
  console.log("Path Middleware started");
  next();
  console.log("Path middleware ended");
};

module.exports = {
  pathMiddleware,
};
