const Drone=require('../models/droneModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { Drone1 } = require('@mui/icons-material');
  

const createDrone=async(req,res,next)=>{
    const {drone_id,name,manufacturer,model_number,price}=req.body;
    console.log(drone_id,name,manufacturer,model_number,price);
    let existingDrone;
    try{
        existingDrone=await Drone.findOne({drone_id:drone_id});
        console.log(existingDrone);
    }catch(err){
        console.log(err);
    }
    if(existingDrone){
        console.log("Drone already exists");
        return res.status(400).json({message:"Drone already exists"});
    }
    const Drone= new Drone({
        drone_id,
        name,
        manufacturer,
        model_number,
        price,
    });
    console.log("Adding Drone");

    try{
        await Drone.save();
        console.log("saved");
    }catch (err){
        console.log(err);
    }

    return res.status(201).json({message:Drone});
}

const ViewDrone=async(req,res,next)=>{
    try{
      Drone.find({}) // pass the query object with the search criteria
        .exec() // execute the query
        .then(Drones => {
          console.log(Drones);
          res.json(Drones);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ message: "Error retrieving Drones." });
        });
    } catch(err){
      console.log(err);
      res.status(500).json({ message: "Error retrieving Drones." });
    }
  }
  
const verifyToken=(req,res,next)=>{
    const cookies=req.headers.cookie;
    console.log("Cookie:",cookies);
    const token=cookies.split('=')[1];
    // const headers=req.headers["authorization"];
    // console.log("Headers:",headers);
    // const token=headers.split(" ")[1];
    if(!token){
        return res.status(400).json({message:'Token not found'})
    }
    jwt.verify(String(token),"shakshi",(err,drone)=>{
        if(err){
            return res.status(400).json({message:"Invalid token"})
        }
        console.log("Drone Id:",drone.id);
        req.id=drone.id;
    })
    next();
}

const getDrone=async(req,res,next)=>{
    const droneId=req.id;
    let drone;
    try{
        drone=await Drone.findById(droneId,"-password");
    }catch(err){
        return new Error(err);
    }
    if(!drone){
        return res.status(400).json({message:"Drone not found"})
    }
    return res.status(200).json({drone});
}

module.exports={createDrone,ViewDrone,verifyToken,getDrone};