const http = require('http');

class Handler {
    constructor(code) {
        this.code = code;
    }

    async httpPost({
        body,
        ...options
    }) {
        return new Promise((resolve, reject) => {
            const req = http.request({
                method: 'POST',
                ...options,
            }, res => {
                const chunks = [];
                res.on('data', data => chunks.push(data))
                res.on('end', () => {
                    let resBody = Buffer.concat(chunks).toString("utf8");
                    switch (res.headers['content-type']) {
                        case 'application/json':
                            resBody = JSON.parse(resBody);
                            break;
                    }
                    resolve(resBody);
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
        let response = await this.httpPost({
            hostname: '127.0.0.1',
            port: '3350',
            path: `/scenery-vision/api/v1.0/generate_for_code/${this.code}`,
        })

        return response
    }
}

module.exports = Handler