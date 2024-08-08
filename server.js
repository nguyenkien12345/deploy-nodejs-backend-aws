require('dotenv').config();
const app = require('./src/app')



// const {PORT} = process.env;




const server = app.listen( 3000, () => {
    console.log(`WSV start with port 3000`);
})

process.on('SIGINT', () => {
    server.close( () => console.log(`exits server express`))
})
