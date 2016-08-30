const router = require('express').Router()

router.get('/',(req,res,next)=>{
    res.render('index')
})

router.get('/about',(req,res,next)=>{
    res.render('about')
})

router.get('/list',(req,res,next)=>{
    res.render('list')
})

router.use((req,res,next)=>{
    res.render('404')
})
module.exports = router
