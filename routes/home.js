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

router.get('/card/:code', async (req, res, _next) => {
    res.status(200)

    console.log(req.session.response)

    if ((req.session.response) && (!req.session.response.error)) {
        req.session.response.chars.foreach(element => {
            return {
                key: element.key,
                val: element.val
            }
        })
    } else {
        req.session.response = {error: "Not found"}
    }

    res.render('index', {
        title: "Scenery Vision",
        isMain: true,
        has_code: true,
        code: req.params.code,
        info: req.session.response
    })
})

router.post("/", async (req, res, _next) => {
    /*
    TODO: check if exists, if doesnt -> generate -> redir, else -> redir
    */

    const code = req.body.code
    handler = new CodeHandler(code)
    try {
        server_response = await handler.send_code()
    } catch {
        server_response = {error: "Сервер не найден"}
    }

    req.session.response = server_response;
    res.status(200);
    res.redirect(`/card/${code}`);
})

module.exports = router