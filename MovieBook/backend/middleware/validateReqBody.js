const validateMovieReqBody = (req, res, next)=>{
    if (!req.body.name) {
        return res.status(400).send({
            msg: "Name Feild is Missing in te Movie"
        })

    }
    if (!req.body.releaseDate) {
       return res.status(400).send({
            msg: "release Date is Missing in te Movie"
        })
    }
    if (!req.body.releaseStatus) {
        return res.status(400).send({
            msg: "release Status is Missing in te Movie"
        })
    }
    if (!req.body.director) {
        return res.status(400).send({
            msg: "director is Missing in te Movie"
        })
    }

    const defaultReleaseStatus = ['UNRELEASED', 'RELEASED','BLOCKED']

    const tempStatus = defaultReleaseStatus.includes(req.body.releaseStatus);

    if(!tempStatus){
        return res.status(400).send({
            msg: "Release Status Should be Unreleased/Released/Blocked"
        })
    }  
    next();
    
}

module.exports = {
    validateMovieReqBody
}