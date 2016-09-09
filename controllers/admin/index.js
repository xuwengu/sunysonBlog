const router = require('express').Router()

router.get('/posts',(req,res,next)=>{
    res.json([{
        name:'sunny'
    }])
})

router.get('/tags',(req,res,next)=>{
    res.json([])
})

router.get('/system',(req,res,next)=>{
    res.render('admin/system',{
        layout:false
    })
})

module.exports = router