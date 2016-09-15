const router = require('express').Router(),
postModel = require('../../model/blog'),
logger = require('../../logger')

router.get('/getCounts', (req, res, next) => {
    res.json({
        counts: {
            posts: 12,
            views: 209,
            messages: 20
        }
    })
})

router.get('/posts', (req, res, next) => {
    logger.info('fetch posts ...')
    postModel.find((err, posts) => {
        if (err) {
            console.log(err)
            return
        }
        res.json({
            code:0,
            info:{
                posts
            }
        })
    })
})

router.get('/posts/detail/:id', (req, res, next) => {
    postModel.where({_id:req.params.id}).findOne((err,post)=>{
        if(err){
            logger.error(err)
        }
        res.json({
            code:0,
            info:{
                post
            }
        })
    })
})

router.post('/posts/add',(req,res,next)=>{
    let post = req.body
    postModel.create(post,(err,result)=>{
        console.log('rs',result)
        console.log('body',post);
        if(err){
            logger.error(err)
        }
        res.json({
            code:0,
            info:{
                result:result
            }
        })
    })
})

router.get('/tags', (req, res, next) => {
    res.json({
        code: 0,
        info: {
            tags: [{
                id: 1,
                title: 'linux'
            }, {
                id: 2,
                title: 'node.js'
            }, {
                id: 3,
                title: 'angular.js'
            }, {
                id: 4,
                title: 'vue.js'
            }, {
                id: 5,
                title: 'react.js'
            }, ]
        }
    })
})

router.post('/tags/update', (req, res, next) => {
    res.json({
        code: 0,
        info: {
            result: 1
        }
    })
})

router.get('/system', (req, res, next) => {
    res.render('admin/system', {
        layout: false
    })
})

router.get('/settings', (req, res, next) => {
    let siteSettings = {
        title: 'Sunny-L的博客',
        keywords: 'blog,博客，footend，前端，互联网',
        description: 'Suny-L的博客',
        slogan: '三分天注定，七分靠打拼'
    }
    res.app.locals.settings = siteSettings
    res.json(siteSettings)
})

router.post('/settings', (req, res, next) => {
    var upload = require('../upload/upload').single('avator')
    upload(req, res, err => {
        if (err) {
            console.log(err)
            return
        }
        let file = req.file
        res.json({
            code: 0,
            info: {
                result: 1
            }
        })
    })
})

router.use('/upload', require('../upload'))

module.exports = router
