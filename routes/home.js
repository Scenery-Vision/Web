const {
    Router
} = require('express')
const CodeHandler = require('../models/content');
const router = Router()
const examples = ["018883", "94022616", "94-130-00718-1", "1021565", "93-120-01864-1",
    "51-250-01034-1", "1021794", "0200115", "1012544", "94040177", "3030184", "94140032",
    "94024273", "94025798", "94-320-00976-2", "94024121", "92022643", "95-121-01703-1"
]

router.get('', async (_req, res, _next) => {
    res.status(200)
    res.render('index', {
        title: "Scenery Vision",
        isMain: true,
        examples: examples.sort(() => Math.random() - 0.5),
    })
})

router.get('/card/', async (req, res, _next) => {
    res.status(200)

    res.render('index', {
        title: "Scenery Vision",
        isMain: true,
        has_code: false,
        examples: examples.sort(() => Math.random() - 0.5),
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
        seo_description: seo_description,
        examples: examples.sort(() => Math.random() - 0.5),
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