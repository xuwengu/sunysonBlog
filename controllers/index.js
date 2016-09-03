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

router.get('/detail/:title',(req,res,next)=>{
    let tags =[
        {
            name:'linux',
            id:1
        },{
            name:'angular.js',
            id:2
        },{
            name:'node.js',
            id:3
        },{
            name:'react.js',
            id:4
        },{
            name:'vue.js',
            id:5
        }

    ]
    res.render('detail',{
        tags
    })
})


router.use((req,res,next)=>{
    res.render('404')
})
module.exports = router
