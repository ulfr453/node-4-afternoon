const users = require('./models/users')

let id = 1;

module.exports = {
    register: (req, res) => {
        const {session} = req;
        const {username, password} = req.body;

        username.push({id, username, passowrd});
        id++;

        session.user.username = username;

        res.status(200).send(session.user);

    },
    login: (req, res) => {
        const {session} = req;
        const {username, password} = req.body;

        const user = user.find(user => user.username === username && user.password === password);

        if(user) {
            session.user.username = user.username;
            res.status(200).send(session.user);
        } else {
            res.status(500).send('unauthorized.');
        }

    },
    signout: (req, res) => {
        req.session.destroy();
        res.status(200).send(req.session)

    },
    getUser: (req, res) => {

        const {session} = req;

        res.status(200).send(session.user);

    }
}