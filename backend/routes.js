const express=require('express');
const userFunctions=require('./controllers/userController');
const scheduleFunctions=require('./controllers/scheduleController');
const droneFunctions=require('./controllers/droneController');
const missionFunctions=require('./controllers/missionController');
const mapFunctions= require('./controllers/mapController');
const plannerFunctions = require('./controllers/missionPlanController');
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
router.get('/missionOptions',missionFunctions.ViewMissionIdList);
router.get('/droneOptions',droneFunctions.ViewDroneIdList);
router.get('/user',userFunctions.verifyToken,userFunctions.getUser);
router.get('/getuserProfile/:email',userFunctions.getUserProfile);
// POST - add map to db
router.post('/addMap', mapFunctions.uploadMap);
// GET - get map by name
router.get('/getMapByName', mapFunctions.getMapByName);
// GET - get all maps
router.get('/getAllMaps', mapFunctions.getAllMaps);
// UPDATE - update Map Image
router.put('/updateMapImageByName', mapFunctions.updateMapImageByName);
// DELETE - delete map by name
router.delete('/deleteMapByName', mapFunctions.deleteMapByName);
// DELETE - delete all maps
router.delete('/deleteAllMaps', mapFunctions.deleteAllMaps);
// POST - add new mission plan
router.post('/createMissionPlan', plannerFunctions.createMissionPlan);
// GET - get all mission plans
router.get('/getAllMissionPlans', plannerFunctions.getAllMissionPlans);
// GET - get mission plans by mission-type
router.get('/getMissionPlansByType', plannerFunctions.getMissionsPlansByType);
// GET - get mission plan by Location
router.get('/getMissionPlansByLocation', plannerFunctions.getMissionsByLocation);
// UPDATE - update mission alerts by id
router.put('/updateMissionAlertsById/:id', plannerFunctions.updateMissionAlerts);
// DELETE - delete all missions plans
router.delete('/deleteAllMissionPlans', plannerFunctions.deleteAllMissions);
// DELETE - delete mission plan by id
router.delete('/deleteMissionPlanById/:id', plannerFunctions.deleteMissionPlanById);


module.exports=router;
