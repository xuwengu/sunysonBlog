const router = require('express').Router()

router.get('/posts',(req,res,next)=>{
    res.json([{
        name:'sunny'
    }])
})

router.get('/tags',(req,res,next)=>{
    res.json([])
})

router.get('/index',(req,res,next)=>{
    res.json([])
})

module.exports = router