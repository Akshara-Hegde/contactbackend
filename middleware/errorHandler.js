const { constants } = require("../constants");

const errorHandler = (err,req,res,next)=> {
    const statusCode= res.statusCode?res.statusCode:500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:res.json({
            title: "validation failed",
            message: err.message,
            stacktrace: err.stack
        });
        break;
        case constants.UNAUTHORIZED: res.json({
            title: "Un Authorized Error",
            message: err.message,
            stacktrace: err.stack
        });
        break;;
        case constants.FORBIDDEN: res.json({
            title: "Forbidden Error",
            message: err.message,
            stacktrace: err.stack
        });
        break;
        case constants.NOT_FOUND: res.json({
            title: "Not Found",
            message: err.message,
            stacktrace: err.stack
        });
        break;
        case constants.SERVER_ERROR: res.json({
            title: "Server Error",
            message: err.message,
            stacktrace: err.stack
        });
        break;
        
        default : console.log("No Error")
    }
  next()
    
}
module.exports = errorHandler