const { constants } = require("./constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title: "VALIDATION_ERROR",
                message: err.message,
                stack: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stack: err.stack,
            });
        case constants.UNAUTHORIZED:
            res.json({
                title: "UNAUTHORIZED",
                message: err.message,
                stack: err.stack,
            });
        case constants.FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                message: err.message,
                stack: err.stack,
            });
        case constants.SERVER_ERR:
            res.json({
                title: "SERVER_ERR",
                message: err.message,
                stack: err.stack,
            });
        default:
            console.log("No Error, All good!");
            break;
    }
};

module.exports = errorHandler;
