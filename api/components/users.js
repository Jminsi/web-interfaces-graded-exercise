const express = require('express');
const has = require('has-value');
const router = express.Router();


/* Middleware to validate new user creation */
function validateNewUser(req, res, next)
{
    // prepare error object
    const err = new Error();
    err.name = "Bad Request";
    err.status = 400;
    if(has(req.body, 'email') == false)
    {
        err.message = "Missing email";
        next(err);
    }
    if(has(req.body, 'password') == false)
    {
        err.message = "Missing password";
        next(err);
    }
    if(has(req.body, 'username') == false)
    {
        err.message = "Missing username";
        next(err);
    }
    if(has(req.body, 'contact') == false)
    {
        err.message = "Missing contact";
        next(err);
    }
    next(); // no validation errors, so pass to the next
}


// Register new user
router.post('/register', (req, res) => {
    const newUser = {
        id: global.users.length + 1,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        contact: req.body.contact
    }
    global.users.push(newUser);
    res.status(200);
    res.end()
});


// Login user
router.post('/login', (req, res) => {
    userData = global.users.find(u => {
        if (u.email == req.body.email) {
            return true;
        } else {
            return false;
        }
    });
    if(userData === undefined) {
        res.sendStatus(401)
    } else {
        if(req.body.password == userData.password    ) {
            res.json(userData);
        } else {
            res.sendStatus(401)
        }
    }
});


module.exports = router;
