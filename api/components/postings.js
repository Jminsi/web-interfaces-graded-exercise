const express = require('express');
const has = require('has-value');
const router = express.Router();


// Add posting
router.post('/add', (req, res) => {
    //console.log('\n  ADDDD ');
    //console.log(req.body)
    d = new Date();

    userData = global.users.find(u => {
        if (u.email == req.body.email) {
            return true;
        } else {
            return false;
        }
    });
    if (userData === undefined) {
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
        //console.log("Addinbg new:");
        //console.log(newPosting);
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


//  Return all postings for which category search matches
router.get('/category/:category', (req, res) => {
    console.log('\n  category:' + req.params.category);
    const resultPostings = global.postings.filter(p => {
        return p.category.toLowerCase().includes(req.params.category.toLowerCase());
    });
    if (resultPostings === undefined) {
        res.sendStatus(404)
    } else {
        res.json(resultPostings);
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
        res.json(resultPostings);
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
        res.json(resultPostings);
    }
});


module.exports = router;