const {request} = require("playwright");

// const getToken = async () => {
//     const response = await request.post('/login', {body: {username: 'admin', password: 'admin'}});
//     return response.body.token;
// }

const config = {
    use: {
        baseURL: 'http://jsonplaceholder.typicode.com',
        options: {
            secure: false,
            timeout: 30000,
        },
        extraHTTPHeaders: {
            'Content-Type': 'application/json; charset=utf-8',
        } //,
        // authorization: {
        //     type: 'bearer',
        //     token: getToken,
        // }
    }
}

module.exports = config;