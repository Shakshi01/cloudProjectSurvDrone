const express=require('express');
const userFunctions=require('./controllers/userController');
const router=express.Router();


router.get('/',(req,res,next)=>{
    res.send('Hello gautam');
})

router.post('/signup',userFunctions.signup);
router.post('/login',userFunctions.login);
router.get('/user',userFunctions.verifyToken,userFunctions.getUser);
module.exports=router;