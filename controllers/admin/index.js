const router = require('express').Router()

router.get('/getCounts',(req,res,next)=>{
    res.json({
        counts:{
            posts:12,
            views:209,
            messages:20
        }
    })
})
router.get('/posts',(req,res,next)=>{
    let data = [1,2,3,4,5].map((item,items)=>{
        return {
            id:item,
            title:'buntu14.4搭建nginx,php开发环境',
            introduce:'angularjs设计的时候并没有考虑js资源异步加载的实现，当系统过于庞大，模块过多时，我们的首页加载展现就成了问题。 应用启动后不能直接用 module.controller 等方法，否则会报控制器未定义的错误， 见 问题 所以我们要做的就是 重新定义controller及其它方法 异步加载文件(require.js) 相关代码如下 index页面',
            last_update_time:"一天前"
        }
    },{})
    res.json(data)
})

router.get('/posts/detail/:id',(req,res,next)=>{
    let detail = {
        id:req.params.id,
        title:'buntu14.4搭建nginx,php开发环境',
        introduce:'angularjs设计的时候并没有考虑js资源异步加载的实现，当系统过于庞大，模块过多时，我们的首页加载展现就成了问题。 应用启动后不能直接用 module.controller 等方法，否则会报控制器未定义的错误， 见 问题 所以我们要做的就是 重新定义controller及其它方法 异步加载文件(require.js) 相关代码如下 index页面',
        content:'angularjs设计的时候并没有考虑js资源异步加载的实现，当系统过于庞大，模块过多时，我们的首页加载展现就成了问题。 应用启动后不能直接用 module.controller 等方法，否则会报控制器未定义的错误， 见 问题 所以我们要做的就是 重新定义controller及其它方法 异步加载文件(require.js) 相关代码如下 index页面',
        last_update_time:"一天前",
        create_time:'一个月前'
    }
    res.json({
        code:0,
        info:{
            detail:detail
        }
    })
})

router.get('/tags',(req,res,next)=>{
    res.json({
        code:0,
        info:{
            tags:[
                {id:1,title:'linux'},
                {id:2,title:'node.js'},
                {id:3,title:'angular.js'},
                {id:4,title:'vue.js'},
                {id:5,title:'react.js'},
            ]
        }
    })
})

router.post('/tags/update',(req,res,next)=>{
    res.json({
        code:0,
        info:{result:1}
    })
})

router.get('/system',(req,res,next)=>{
    res.render('admin/system',{
        layout:false
    })
})

module.exports = router