const express = require('express');
const has = require('has-value');
const router = express.Router();

function validateJSONHeaders(req, res, next)
{
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

//  Some fixed example data of dogs
let dogData = {
    dogs: [{
        id: 1,
        name: "Max",
        image: "https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif"
    },
    {
        id: 2,
        name: "Bella",
        image: "https://media.giphy.com/media/3ndAvMC5LFPNMCzq7m/giphy.gif"
    },
    {
        id: 3,
        name: "Tucker",
        image: "https://media.giphy.com/media/bbshzgyFQDqPHXBo4c/giphy.gif"
    }]
}


let postingsData = {
    postings: [
    {
      id: 1,
      title: "Old Toyota Corolla1",
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

]
}



//  Add posting
router.get('/addsss/', (req, res) => { 
    //console.log('\n  ADDDD zap=' + zap);
    //zap = zap + 1
    //postingsData = postingsData.pop();
    //postings = postings.pop();
    delete global.postings[0]; 
    res.sendStatus(200);
})






router.post('/add', (req, res) => {
    console.log('\n  ADDDD ');
    console.log(req.body)
    d = new Date();

    
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
        const newPosting = {
            id: global.postings.length + 1,
            category: req.body.category,
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            price: req.body.price,
            delivery: req.body.delivery,
            images: "no",
            date: d.toLocaleString(),
            seller_id: userData.id
        }
        console.log("Addinbg new:");
        console.log(newPosting);
        global.postings.push(newPosting);
        //res.sendStatus(200)
        res.status(200);
        res.end()
    }
});







//  Return all postings
router.get('/', (req, res) => { 
    //res.json(postingsData.postings)});
    //console.log('\n  get zap=' + zap);
    res.json(global.postings)
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

/* Middleware to validate new dog creation */
function validateNewDog(req, res, next)
{
    // prepare error object
    const err = new Error();
    err.name = "Bad Request";
    err.status = 400;
    if(has(req.body, 'name') == false)
    {
        err.message = "Missing or empty name";
        next(err);
    }
    if(has(req.body, 'image') == false)
    {
        err.message = "Missing or empty image";
        next(err);
    }
    next(); // no validation errors, so pass to the next
}

/* Create a new dog
    Expects the following data format
    {
        name: string,
        image: string - whole url to image
    }
*/
router.post('/',
    [
      validateJSONHeaders,
      validateNewDog
    ],
    (req, res) => {
        const newDog = {
            id: dogData.dogs.length + 1,
            name: req.body.name,
            image: req.body.image
        }
        dogData.dogs.push(newDog);

        res.status(201);
        res.json(newDog);
});

router.delete('/:id', (req, res) => {
    dogData.dogs = dogData.dogs.filter(dog => dog.id != req.params.id);
    res.sendStatus(200);
})

module.exports = router;