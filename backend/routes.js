const express=require('express');
const userFunctions=require('./controllers/userController');
const scheduleFunctions=require('./controllers/scheduleController');
const missionFunctions=require('./controllers/missionController');
const droneFunctions=require('./controllers/droneController');
const router=express.Router();


router.get('/',(req,res,next)=>{
    res.send('Hello Shakshi');
})

router.post('/signup',userFunctions.signup);
router.post('/login',userFunctions.login);
router.post('/addschedule',scheduleFunctions.CreateSchedule);
router.get('/viewschedule',scheduleFunctions.ViewSchedule);
router.delete("/schedules/:id", scheduleFunctions.deleteSchedule);
router.put("/schedules/:id", scheduleFunctions.editSchedule);
router.post('/adddrone',droneFunctions.createDrone);
router.delete("/drones/:id", droneFunctions.deleteDrone);
router.put("/drones/:id", droneFunctions.editDrone);
router.get('/viewdrone',droneFunctions.ViewDrone);
router.get("/countdrones",droneFunctions.CountDrones);
router.get('/missionOptions',missionFunctions.ViewMissionIdList);
router.get('/droneOptions',droneFunctions.ViewDroneIdList);
router.get('/user',userFunctions.verifyToken,userFunctions.getUser);
router.get('/getuserProfile/:email',userFunctions.getUserProfile);
router.get("/countusers",userFunctions.CountUsers);
router.get("/countmissions",missionFunctions.CountMissions);
router.get("/getmissions",missionFunctions.getMissions);
module.exports=router;
