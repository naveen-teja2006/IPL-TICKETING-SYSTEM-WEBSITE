let seatModel = require("../model/seatsModel");
exports.getAllSeatsById = async(req,res) =>{
    let matchId = req.params.id;
    try{
        let seats = await seatModel.getAllSeatsById(matchId);
        return res.status(200).json(seats);
    }
    catch(error){
        return res.status(500).json({message:error.message});
    }
}