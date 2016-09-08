const router = require('express').Router()

router.get('/posts',(req,res,next)=>{
    let data = [1,2,3,4,5].map((item,items)=>{
        return {
            title:'buntu14.4搭建nginx,php开发环境',
            introduce:'angularjs设计的时候并没有考虑js资源异步加载的实现，当系统过于庞大，模块过多时，我们的首页加载展现就成了问题。 应用启动后不能直接用 module.controller 等方法，否则会报控制器未定义的错误， 见 问题 所以我们要做的就是 重新定义controller及其它方法 异步加载文件(require.js) 相关代码如下 index页面',
            last_update_time:"一天前"
        }
    },{})
    res.json(data)
})

router.get('/tags',(req,res,next)=>{
    res.json([])
})

router.get('/index',(req,res,next)=>{
    res.json([])
})

module.exports = router