const {Router} = require('express')
const router = Router()

router.get('', (_req, res, _next) => {
    res.status(200)
    res.render('about', {
        title: "Scenery Vision",
        isAbout: true
    })
})

module.exports = router
