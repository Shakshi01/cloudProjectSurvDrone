const Mission=require('../models/missionModel');
const jwt=require('jsonwebtoken');
  

const ViewMission=async(req,res,next)=>{
    try{
      Mission.find({}) // pass the query object with the search criteria
        .exec() // execute the query
        .then(missions => {
          console.log(missions);
          res.json(missions);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ message: "Error retrieving schedules." });
        });
    } catch(err){
      console.log(err);
      res.status(500).json({ message: "Error retrieving schedules." });
    }
  }

  const ViewMissionIdList=async(req,res,next)=>{
    try {
        Mission.find({})
          .exec()
          .then((missions) => {
            const missionIds = missions.map((mission) => ({
              value: mission.mission_id,
              label: `Mission ${mission.mission_id}`,
            }));
            console.log(missionIds);
            res.json(missionIds);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Error retrieving mission IDs." });
          });
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error retrieving mission IDs." });
      }
  }

  
module.exports={ViewMission,ViewMissionIdList};