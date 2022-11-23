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

    let chars = []
    let descriptions = []
    let web_name = ""
    let img_path = ""
    let seo_description = ""

    try {
        let response = JSON.parse(req.session.response)

        web_name = response["Название"]
        img_path = response["Путь к фото"]
        descriptions = response["Описания"]
        seo_description = response["SEO"]
        chars = JSON.parse(JSON.stringify(response))

        delete chars["Название"]
        delete chars["Путь к фото"]
        delete chars["Описания"]
        delete chars["SEO"]
    } catch (e) {
        chars = {
            error: "Not found"
        }

        console.error(e, e.stack);
    }

    res.render('index', {
        title: "Scenery Vision",
        isMain: true,
        has_code: true,
        code: req.params.code,
        info: chars,
        web_name: web_name,
        img_path: img_path,
        descriptions: descriptions,
        seo_description: seo_description
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
        server_response = {
            error: "Сервер не найден"
        }
    }

    req.session.response = server_response;
    res.status(200);
    res.redirect(`/card/${code}`);
})

module.exports = router