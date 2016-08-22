const router = require('express')().router()

router.get('/',(req,res,next)=>{
    render('/index')
})

module.exports = router
