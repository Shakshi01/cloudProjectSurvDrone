const express=require('express');
const userFunctions=require('./controllers/userController');
const scheduleFunctions=require('./controllers/scheduleController');
const droneFunctions=require('./controllers/droneController');
const router=express.Router();


router.get('/',(req,res,next)=>{
    res.send('Hello Shakshi');
})

router.post('/signup',userFunctions.signup);
router.post('/login',userFunctions.login);
router.post('/addschedule',scheduleFunctions.CreateSchedule);
router.get('/viewschedule',scheduleFunctions.ViewSchedule);
router.post('/adddrone',droneFunctions.createDrone);
router.get('/viewdrone',droneFunctions.ViewDrone);
router.get('/user',userFunctions.verifyToken,userFunctions.getUser);
module.exports=router;