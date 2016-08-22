const router = require('express').Router()

router.get('/',(req,res,next)=>{
    res.render('index')
})

router.use((req,res,next)=>{
    res.render('404')
})
module.exports = router
