const {
    Router
} = require('express')
const CodeHandler = require('../models/content');
const router = Router()

router.get('', async (_req, res, _next) => {
    res.status(200)
    res.render('index', {
        title: "Scenery Vision",
        isMain: true
    })
})

router.get('/:code', async (req, res, _next) => {
    res.status(200)
    res.render('index', {
        title: "Scenery Vision",
        isMain: true,
        has_code: true,
        code: req.params.code,
        // info: info
    })
})

router.post("/handle", async (req, res, _next) => {
    /*
    TODO:
    content -> model -> uid (or use code here) -> DB (local) -> load -> card (+ thumbnail if doesn't exist)
    TODO: check if exists, if doesnt -> generate -> redir, else -> redir
    */

    const code = req.body.code
    handler = new CodeHandler(code)
    // server_response = await handler.send_code()

    res.status(200);
    res.redirect(`/${code}`);
})

module.exports = router