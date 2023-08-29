const logger = (req,res,next) => {
    const log = new Date().toString()
     // return res.status(200).json({ time : log})
    req.timeLog = log
    next()
}

module.exports = logger