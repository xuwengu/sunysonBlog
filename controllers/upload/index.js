const router = require('express').Router(),
    upload = require('./upload').array('avatar',5)

router.post('/',(req,res,next)=>{
    console.log(req.files)
    upload(req,res,err=>{
        if(err){
            console.log(err)
            return 
        }
        res.json({
            code:0
        })
    })
})

module.exports = router
