const express = require('express');
const has = require('has-value');
const router = express.Router();




function validateJSONHeaders(req, res, next)
{
    console.log('reqf=' + req.get('Content-Type'));
    if(req.get('Content-Type') === 'application/json')
    {
        next();
    }
    else
    {
        const err = new Error('Bad Request - Missing Headers');
        err.status = 400;
        next(err);
    }
}




//  Add posting
router.get('/add/', (req, res) => { 
    //console.log('\n  ADDDD zap=' + zap);
    //zap = zap + 1
    //postingsData = postingsData.pop();
    //postings = postings.pop();
    delete global.postings[0]; 
    res.sendStatus(200);
})


//  Return all postings
router.get('/', (req, res) => { 
    //res.json(postingsData.postings)});
    //console.log('\n  get zap=' + zap);
    res.json(global.users)
})

//  Return all postings for searched category
router.get('/category/:category', (req, res) => {
    console.log('\n  category:' + req.params.category);
    const resultPostings = postingsData.postings.filter(p => {
            return p.category == req.params.category;
          });
    if(resultPostings === undefined)
    {
        res.sendStatus(404)
    }
    else
    {
        res.json(resultPostings);
    }
})



//  Return information of a single dog
router.get('/:dogId', (req, res) => {
    const resultDog = dogData.dogs.find(d => {
        if (d.id == req.params.dogId) {
            return true;
        }
        else {
            return false;
        }
    });
    if(resultDog === undefined)
    {
        res.sendStatus(404)
    }
    else
    {
        res.json(resultDog);
    }
})


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



router.post('/registerr', (req, res) => {
    console.log(req);
    console.log(req.body);
    console.log('reqffff=' + req.body);
    res.status(200);
})




router.post('/register',
    /*[
      validateJSONHeaders,
      validateNewUser
    ],*/
    (req, res) => {
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

router.delete('/:id', (req, res) => {
    dogData.dogs = dogData.dogs.filter(dog => dog.id != req.params.id);
    res.sendStatus(200);
})

module.exports = router;