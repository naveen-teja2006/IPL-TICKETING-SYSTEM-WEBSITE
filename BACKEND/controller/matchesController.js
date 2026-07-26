let matchesModel = require("../model/matchesModel");
exports.getAllMatches = async(req,res) =>{
    try{
        let matches = await matchesModel.getAllMatches();
        res.status(200).json(matches);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.getAllMatchesById = async(req,res) =>{
     let id = req.params.id;
     try{
        const match = await matchesModel.getAllMatchesById(id);
     if(match.length == 0){
        return res.status(404).json({message:"Match Not Found"})
     }
     return res.status(200).json(match[0]);
    }
     catch(error){
        return res.status(500).json({message:error.message});
     }
}