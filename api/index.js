const express = require('express');
const app = express();
const port = 4000;

const usersComponent = require('./components/users');
const postingsComponent = require('./components/postings');
const bodyParser = require('body-parser');
const cors = require('cors');


//   Simulates database for users
global.users = [
    {
      id: 1,
      email: "demo",
      password: "demo",
      username: "DemoUser One",
      contact: "Tel: 555-123123, only evenings",
    },
    {
      id: 2,
      email: "demo2",
      password: "demo2",
      username: "DemoUser Two",
      contact: "Tel:123-555 555, call anytime",
    }
];


//   Simulates database for postings
global.postings = [
    {
      id: 1,
      title: "Toyota Corolla 1.6i 1999",
      description: "For sale very dependable Toyota Corolla that runs really good not issues at all mechanical excellent transportation body not perfect but no accidents good tires nice radio.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "1500",
      date: "10/12/2020, 17:15:00",
      delivery: "Pickup",
      seller_id: 1
    },
    {
      id: 2,
      title: "Apple MacBook Pro Late 2013",
      description: "MacBook Pro, including charger, original package and incase Laptop sleeve. Excellent for a Student.",
      category: "computers",
      location: "Tampere",
      images: "no",
      price: "200",
      date: "05/01/2021, 10:20:00",
      delivery: "Pickup or post package",
      seller_id: 2
    },
    {
        id: 3,
        title: "Honda CRV Ex 4wd 2009",
        description: "Selling 2009 honda crv ex 4wd clean title excellent condition have 113k miles well maintained no oil leaks.",
        category: "cars",
        location: "Kokkola",
        images: "no",
        price: "6500",
        date: "20/02/2021, 16:00:00",
        delivery: "Pickup",
        seller_id: 1
      },
    {
        id: 4,
        title: "Leather Motorcycle Jacket",
        description: "Good condition armored jacket by SHIFT. All leather with nylon gussets for stretch. Size Large.",
        category: "clothes",
        location: "Oulu",
        images: "no",
        price: "50",
        date: "22/02/2021, 22:00:00",
        delivery: "Pickup or shipping by mail",
        seller_id: 2
    },
    {
        id: 5,
        title: "3x Levi’s 511 Jeans",
        description: "For sale are three pairs of Levi’s 511 Jeans in very good condition. ",
        category: "clothes",
        location: "Helsinki",
        images: "no",
        price: "100",
        date: "28/02/2022, 07:50:00",
        delivery: "Only shipping",
        seller_id: 2
    }
];
global.postings_nextFreeId = global.postings.length + 1;


const customHeaderCheckerMiddleware = function(req, res, next) {
    console.log('Middleware is active!');
    if(req.headers['custom-header-param'] === undefined)
    {
        return res.status(400).json({ reason: "custom-header-param header missing"});
    }

    // pass the control to the next handler in line
    next();
}

//app.use(customHeaderCheckerMiddleware);
app.use(bodyParser.json());
app.use(cors());






// for graded ex:
//app.post('/users/login', (req, res) => res.send('user login!'));
//email
//password

//app.post('/users/register', (req, res) => res.send('user register!'));
//email
//firstname
//lastname
//password

//app.post('/postings/add', (req, res) => res.send('add posting!'));
//title
//description
//dategory
//location
//images
//price
//posting_date
//delivery_type
//seller_id

//app.post('/postings/delete', (req, res) => res.send('delete posting!'));
//posting_id

//app.post('/postings/edit', (req, res) => res.send('edit posting!'));

//app.post('/postings/search', (req, res) => res.send('edit posting!'));







/* basic HTTP method handling */
app.get('/hello', (req, res) => res.send('Hello GET World!'));
app.post('/hello', (req, res) => res.send('Hello POST World!'));
app.put('/hello', (req, res) => res.send('Hello PUT World!'));
app.delete('/hello', (req, res) => res.send('Hello DELETE World!'));

/* Route parameters */
app.get('/hello/:parameter1/world/:parameter2', (req, res) => {
    res.send('Your route parameters are\n' + JSON.stringify(req.params));
});

/* Example of defining routes with different method handlers */
app.route('/world')
    .get((req,res) => res.send('get World'))
    .post((req, res) => res.send('post World'))
    .put((req, res) => res.send('put World'))
    .delete((req, res) => res.send('delete World'))

/* demonstrate route module/component usage - the dogComponent content is defined in separate file */
app.use('/postings', postingsComponent);
app.use('/users', usersComponent);
//app.use('/apiKey', apiKeyDemo);
//app.use('/fileUpload', imageUpload);
//app.use('/jsonSchemaValidationExample', jsonSchemaValidationExample);

/* This will be activated as the last if no other route matches. */
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404; // Set status code to 404
    next(err);  /* If you pass anything to the next() function (except the string 'route'),
                 Express regards the current request as being an error and will skip any
                 remaining non-error handling routing and middleware functions. */
});

/* This is an error handling middleware, the function has four parameters.
   See https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling */
app.use((err, req, res, next) => {
    if(err.hasOwnProperty('status') == true) {
      const date = new Date();
      console.error(date.toUTCString() + ' - ' + err.toString());
      console.error('Path attempted - ' + req.path)

      res.status(err.status);
      res.json({
        reason: err.toString()
      });
    }
    else {
      next();
    }
});


app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}\n`);
});
