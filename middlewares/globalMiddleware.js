const globalMiddleware = (req, res, next) => {
    console.log("Global Middleware started");
    next();
    console.log("Global middleware ended")
};

module.exports ={
    globalMiddleware,
}