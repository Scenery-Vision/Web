const https = require('https');

class Handler {
    constructor(code) {
        this.code = code;
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

    async send_code() {
        response = await this.httpsPost({
            hostname: 'localhost',
            path: `/scenery-vision/api/v1.0/handle`,
            body: JSON.stringify({
                code: this.code
            })
        })

        return response
    }
}

module.exports = Handler