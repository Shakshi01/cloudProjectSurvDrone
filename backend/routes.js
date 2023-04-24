const express=require('express');
const userFunctions=require('./controllers/userController');
const scheduleFunctions=require('./controllers/scheduleController');
const router=express.Router();


router.get('/',(req,res,next)=>{
    res.send('Hello gautam');
})

router.post('/signup',userFunctions.signup);
router.post('/login',userFunctions.login);
router.post('/addschedule',scheduleFunctions.CreateSchedule);
router.get('/viewschedule',scheduleFunctions.ViewSchedule);
router.get('/user',userFunctions.verifyToken,userFunctions.getUser);
module.exports=router;