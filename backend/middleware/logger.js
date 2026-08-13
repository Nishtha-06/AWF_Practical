//logger.js is middleware whose job is to observe and record incoming HTTP requests, 
// then use next() to allow those requests to continue through the backend.
function logger(req, res, next) {
    console.log(
        `${req.method} ${req.url} - ${new Date().toLocaleString()}`
    );

    next();
}

module.exports = logger;