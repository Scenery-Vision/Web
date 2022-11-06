const https = require('https');

class Handler {
    constructor(article) {
        this.article = article;
    }

    async httpsPost({
        body,
        ...options
    }) {
        return new Promise((resolve, reject) => {
            const req = https.request({
                method: 'POST',
                ...options,
            }, res => {
                const chunks = [];
                res.on('data', data => chunks.push(data))
                res.on('end', () => {
                    let resBody = Buffer.concat(chunks);
                    switch (res.headers['content-type']) {
                        case 'application/json':
                            resBody = JSON.parse(resBody);
                            break;
                    }
                    resolve(resBody)
                })
            })
            req.on('error', reject);
            if (body) {
                req.write(body);
            }
            req.end();
        })
    }

    async send_article() {
        response = await this.httpsPost({
            hostname: 'localhost',
            path: `/scenery-vision/api/v1.0/handl`,
            body: JSON.stringify({
                article: this.article
            })
        })

        return response
    }
}

module.exports = Handler