const {
    Router
} = require('express')
const ArticleHandler = require('../models/content');
const router = Router()

router.get('', async (_req, res, _next) => {
    res.status(200)
    res.render('index', {
        title: "Scenery Vision",
        isMain: true
    })
})

router.get('/:code', async (_req, res, _next) => {
    res.status(200)
    res.render('index', {
        title: "Scenery Vision",
        isMain: true
    })
})

router.post("/handle", async (req, res, _next) => {
    /*
    TODO:
    content -> model -> uid (or use article here) -> DB (local) -> load -> card (+ thumbnail if doesn't exist)
    */

    const article = req.body.article
    handler = new ArticleHandler(article)
    // server_response = await handler.send_article()

    res.status(200);
    res.redirect(`/${article}`);
})

module.exports = router