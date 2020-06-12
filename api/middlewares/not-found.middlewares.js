module.exports = (req,res) => {
   return res.status(404).send({ok:false, message:"Not found"});
}