require('dotenv').config();
const express='express'
const session= require('express-session')
const checkForSession = require('../node-4-afternoon/server/middlewares/checkForSession')
const swagController = require('../node-4-afternoon/server/controllers/swagController')
const authController = require('../node-4-afternoon/server/controllers/authController')
const cartContoller = require('../node-4-afternoon/server/controllers/cartController')
const searchController = require('../node-4-afternoon/server/controllers/searchController')


const app = express();

let {SERVER_PORT, SESSION_SECRET} = process.env;

app.use(express.jsno());
app.use(
    session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    })
)

app.use(checkForSession);
app.use(express.static(`${__dirname}/../build`))

//endpoints

app.get('/api/swag', swagController.read);

app.post('/api/login', authController.login);
app.post('/api/register', authController.register);
app.post('/api/signout', authController.signout);
app.get('/api/user', authController.getUser);

app.post('/api/cart/checkout', cartContoller.checkout)
app.post('/api/cart/:id', cartContoller.add);
app.delete('/api/cart/:id', cartContoller.delete);

app.get('/api/search', searchController.search)

app.listen(SERVER_PORT, ()=> {
    console.log(`server listening on port ${SERVER_PORT}`);
});