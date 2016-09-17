const router = require('express').Router(),
    postModel = require('../../model/blog'),
    tagModel = require('../../model/tag'),
    settingModel = require('../../model/setting'),
    logger = require('../../logger'),
    async = require('async')

router.use((req, res, next) => {
    settingModel.find((err, settings) => {
        if (err) {
            logger.info(err)
            res.json({
                code: -100,
                info: {
                    result: err
                }
            })
            return
        }
        res.app.locals.settings = settings[0]
        next()
    })
})

router.use('/upload', require('../upload'))


router.get('/getCounts', (req, res, next) => {
    async.parallel({
        posts: cb => {
            postModel.count({}, (err, count) => {
                cb(err, count)
            })
        },
        views: cb => {
            postModel.aggregate({
                $group: {
                    _id: null,
                    views: {
                        $sum: '$pv'
                    }
                }
            }, (err, count) => {
                cb(err, count)
            })
        }
    }, (err, results) => {
        if (err) logger.info(err)
        res.json({
            code: 0,
            counts: {
                posts: results.posts,
                views: results.views,
                messages: 20
            }
        })
    })
})

router.get('/posts', (req, res, next) => {
    postModel.find((err, posts) => {
        if (err) {
            logger.info(err)
            res.json({
                code: -100,
                info: {
                    result: err
                }
            })
            return
        }
        res.json({
            code: 0,
            info: {
                posts
            }
        })
    })
})

router.get('/posts/detail/:id', (req, res, next) => {
    postModel.where({
        _id: req.params.id
    }).findOne((err, post) => {
        if (err) {
            logger.error(err)
        }
        res.json({
            code: 0,
            info: {
                post
            }
        })
    })
    postModel.findByIdAndUpdate(req.params.id, {})
})

router.post('/posts/publish', (req, res, next) => {
    let post = req.body
    post.is_publish = true
    if (req.body._id) {
        postModel.findByIdAndUpdate(req.body.id, post, (err, result) => {
            if (err) {
                logger.info(err)
                res.json({
                    code: -100,
                    info: {
                        result: err
                    }
                })
                return
            }
            res.json({
                code: 0,
                info: {
                    post: result
                }
            })
        })
    }else {
        postModel.create(post,(err,result)=>{
            if (err) {
                logger.info(err)
                res.json({
                    code: -100,
                    info: {
                        result: err
                    }
                })
                return
            }
            res.json({
                code: 0,
                info: {
                    post: result
                }
            })
        })
    }
})

router.post('/posts/save_to_draft', (req, res, next) => {
    let post = req.body
    post.is_publish = false
    post.is_del = false
    postModel.findByIdAndUpdate(req.body._id, post, (err, result) => {
        if (err) {
            logger.info(err)
            res.json({
                code: -100,
                info: {
                    result: result
                }
            })
            return
        }
        res.json({
            code: 0,
            info: {
                post: result
            }
        })
    })
})

router.get('/posts/del/:id', (req, res, next) => {
    let post = req.body
    postModel.findByIdAndUpdate(req.params.id, {
        is_publish: false,
        is_del: true
    }, (err, result) => {
        if (err) {
            logger.info(err)
            res.json({
                code: -100,
                info: {
                    result: result
                }
            })
            return
        }
        res.json({
            code: 0,
            info: {
                post: result
            }
        })
    })
})

router.get('/tags', (req, res, next) => {
    tagModel.find((err, tags) => {
        if (err) {
            logger.info(err)
            res.json({
                code: -100,
                info: {
                    result: err
                }
            })
            return
        }
        res.json({
            code: 0,
            info: {
                tags
            }
        })
    })
})

router.post('/tags/update', (req, res, next) => {
    tagModel.findByIdAndUpdate(req.body.id, {
        title: req.body.title
    }, (err, tag) => {
        if (err) {
            logger.info(err)
            res.json({
                code: -100,
                info: {
                    result: err
                }
            })
            return
        }
        res.json({
            code: 0,
            info: {
                tag
            }
        })
    })
})

router.get('/system', (req, res, next) => {
    res.render('admin/system', {
        layout: false
    })
})

router.get('/settings', (req, res, next) => {
    settingModel.find((err, settings) => {
        if (err) {
            logger.info(err)
            res.json({
                code: -100,
                info: {
                    result: err
                }
            })
            return
        }
        res.json({
            code: 0,
            info: {
                settings
            }
        })

    })
})

router.post('/settings', (req, res, next) => {
    var upload = require('../upload/upload').single('avator')
    upload((req, res, err) => {
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

module.exports = router
