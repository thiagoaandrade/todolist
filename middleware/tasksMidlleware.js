const validateFieldTitle = (req,res,next) => {
    if(!req.body.title){
        return res.status(400).json({success:false, message:'The field "title" is required'})
    }
    next()
}

const validateFieldStatus = (req,res,next) => {
    if(!req.body.status){
        return res.status(400).json({success:false, message:'The field "status" is required'})
    }
    next()
}

const validateQueryId = (req,res,next) => {
    if(req.query.id){
        const parsedId = parseInt(req.query.id)
        
        if(isNaN(parsedId)){
            return res.status(400).json({success:false, message: "Please provide a valid value for the ID"})
        }
    }
    next()
}

const validateParamId = (req,res,next) => {
    if(req.params.id){
        const parsedId = parseInt(req.params.id)
        
        if(isNaN(parsedId)){
            return res.status(400).json({success:false, message: "Please provide a valid value for the ID"})
        }
    }
    next()
}

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
    validateQueryId,
    validateParamId
}