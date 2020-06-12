module.exports = (error,req,res,next) => {
    const errorStatus = error.status || 500;
    return res.status(errorStatus).send({ok:false, message: error.message});
}