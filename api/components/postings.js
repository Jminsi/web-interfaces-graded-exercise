const express = require('express');
const has = require('has-value');
const router = express.Router();


// Add posting
router.post('/add', (req, res) => {
    console.log('\n  add posting ');
    //console.log(req.body)

    d = new Date();

    const newPosting = {
        //id: global.postings.length + 1,
        id: global.postings_nextFreeId,
        category: req.body.category,
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        price: req.body.price,
        delivery: req.body.delivery,
        images: "no",
        date: d.toLocaleString('en-GB'),
        seller_id: req.body.seller_id
    }
    global.postings_nextFreeId = global.postings_nextFreeId + 1
    global.postings.push(newPosting);
    res.status(200);
    res.end()
});



// Edit posting
router.post('/edit', (req, res) => {
    console.log('\n  edit posting_id:' + req.body.posting_id);
    //console.log(req.body)
    d = new Date();

    for (var i = 0; i < global.postings.length; i++) {
        var posting = global.postings[i];
        if (posting.id == req.body.posting_id) {
            //index = i;
            posting.category = req.body.category,
                posting.title = req.body.title,
                posting.description = req.body.description,
                posting.location = req.body.location,
                posting.price = req.body.price,
                posting.delivery = req.body.delivery,
                posting.images = "no",
                posting.date = d.toLocaleString('en-GB')
        }
    }

    res.status(200);
    res.end()
});


// Delete posting
router.post('/delete', (req, res) => {
    console.log('\n  delete posting id:' + req.body.id);

    index = -1
    
    // search index of posting id to delete
    for (var i = 0; i < global.postings.length; i++) {
        var posting = global.postings[i];
        if (posting.id == req.body.id) {
            index = i;
        }
    }

    global.postings.splice(index, 1);
    res.status(200);
    res.end()
});


//  Return all postings
router.get('/', (req, res) => {
    
    allPostings = global.postings

    // fill seller info 
    for (var i = 0; i < allPostings.length; i++) {
        var posting = allPostings[i];
        for (var u = 0; u < global.users.length; u++) {
            var user =  global.users[u];
            if(posting.seller_id == user.id) {
                posting.seller = user.username;
                posting.contact = user.contact;
            }
        }
    }

    //res.json(global.postings)
    res.json(allPostings)
})


//  Return all postings for which category search matches
router.get('/category/:category', (req, res) => {
    console.log('\n  category:' + req.params.category);
    const resultPostings = global.postings.filter(p => {
        return p.category.toLowerCase().includes(req.params.category.toLowerCase());
    });
    if (resultPostings === undefined) {
        res.sendStatus(404)
    } else {
        allPostings = resultPostings

        // fill seller info 
        for (var i = 0; i < allPostings.length; i++) {
            var posting = allPostings[i];
            for (var u = 0; u < global.users.length; u++) {
                var user =  global.users[u];
                if(posting.seller_id == user.id) {
                    posting.seller = user.username;
                    posting.contact = user.contact;
                }
            }
        }
        //res.json(resultPostings);
        res.json(allPostings);
    }
});


//  Return all postings for which location search matches
router.get('/location/:location', (req, res) => {
    console.log('\n  location:' + req.params.location);
    const resultPostings = global.postings.filter(p => {
        return p.location.toLowerCase().includes(req.params.location.toLowerCase());
    });
    if (resultPostings === undefined) {
        res.sendStatus(404)
    } else {
        allPostings = resultPostings

        // fill seller info 
        for (var i = 0; i < allPostings.length; i++) {
            var posting = allPostings[i];
            for (var u = 0; u < global.users.length; u++) {
                var user =  global.users[u];
                if(posting.seller_id == user.id) {
                    posting.seller = user.username;
                    posting.contact = user.contact;
                }
            }
        }
        //res.json(resultPostings);
        res.json(allPostings);
    }
});


//  Return all postings for which date search matches
router.get('/date/:date', (req, res) => {
    console.log('\n  date:' + req.params.date);
    const resultPostings = global.postings.filter(p => {
        return p.date.toLowerCase().includes(req.params.date.toLowerCase());
    });
    if (resultPostings === undefined) {
        res.sendStatus(404)
    } else {
        allPostings = resultPostings

        // fill seller info 
        for (var i = 0; i < allPostings.length; i++) {
            var posting = allPostings[i];
            for (var u = 0; u < global.users.length; u++) {
                var user =  global.users[u];
                if(posting.seller_id == user.id) {
                    posting.seller = user.username;
                    posting.contact = user.contact;
                }
            }
        }
        //res.json(resultPostings);
        res.json(allPostings);
    }
});


//  Return all postings for specific user ID
router.get('/user/:id', (req, res) => {
    console.log('\n  postings for user id:' + req.params.id);
    const resultPostings = global.postings.filter(p => {
        return p.seller_id == req.params.id;
    });
    if (resultPostings === undefined) {
        res.sendStatus(404)
    } else {
        allPostings = resultPostings

        // fill seller info 
        for (var i = 0; i < allPostings.length; i++) {
            var posting = allPostings[i];
            for (var u = 0; u < global.users.length; u++) {
                var user =  global.users[u];
                if(posting.seller_id == user.id) {
                    posting.seller = user.username;
                    posting.contact = user.contact;
                }
            }
        }
        //res.json(resultPostings);
        res.json(allPostings);
    }
});



module.exports = router;