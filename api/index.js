const express = require('express');
const app = express();
const port = 4000;

const usersComponent = require('./components/users');
const postingsComponent = require('./components/postings');
//const imageUpload = require('./components/imageUpload');
const bodyParser = require('body-parser');
//const apiKeyDemo = require('./components/apiKeyDemo');
const cors = require('cors');
//const jsonSchemaValidationExample = require('./components/jsonSchemaValidationExample');



//   Simulates database for users
global.users = [
    {
      id: 1,
      email: "demo",
      password: "demo",
      username: "Demo User",
      contact: "GSM: 11 111 111",
    },
    {
      id: 2,
      email: "demo2",
      password: "demo2",
      username: "Demo User 2",
      contact: "GSM: 22 222 222",
    }
];


//   Simulates database for postings
global.postings = [
    {
      id: 1,
      title: "Old Toyota Corolla11",
      description: "Selling my Toyota Corolla Le, with only 90k original miles and Clean Title, never been any accidents, garage keeping.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    },
    {
      id: 2,
      title: "Old Toyota Corolla2",
      description: "Selling my Toyota Corolla Le, with only 90k original miles and Clean Title, never been any accidents, garage keeping.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    },
    {
      id: 3,
      title: "Old Toyota Corolla3",
      description: "Long description here",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    },
    {
      id: 4,
      title: "Old Toyota Corolla4",
      description: "Selling my Toyota Corolla Le, with only 90k original miles and Clean Title, never been any accidents, garage keeping.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    },
    {
      id: 5,
      title: "Old Toyota Corolla5",
      description: "Selling my Toyota Corolla Le, with only 90k original miles and Clean Title, never been any accidents, garage keeping.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    },
    {
      id: 6,
      title: "Old Toyota Corolla6",
      description: "Selling my Toyota Corolla Le, with only 90k original miles and Clean Title, never been any accidents, garage keeping.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
 },
 {
    id: 7,
    title: "Shoes",
    description: "My old shoes",
    category: "clothes",
    location: "Oulu",
    images: "no",
    price: "123",
    date: "27.02.2021 15:42",
    delivery: "pickup",
    seller: "Jack",
    contact: "abc@zfsd.com / 050 123 123 123"
}
];







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
    console.log(`Example API listening on http://localhost:${port}\n`);
    console.log('Available API endpoints');
    console.log('  /hello [GET, POST, PUT, DELETE]');
    console.log('  /hello/{param1}/world/{param2} [GET]');
    console.log('  /world [GET, POST, PUT, DELETE]');
    console.log('\n  /dogs [GET, POST]');
    console.log('  /dogs/{dogId} [GET, DELETE]');
    console.log('\n  /apikey/new/{username} [GET]');
    console.log('  /apikey/protected} [GET]');
    console.log('\n  /fileUpload [POST] multipart file upload');
    console.log('\n  /jsonSchemaValidationExample [POST] testing JSON Schema Validation');
    console.log('\n\n Use for example curl or Postman tools to send HTTP requests to the endpoints');
});
