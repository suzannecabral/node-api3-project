const express = require('express');
const Posts = require('./postDb');
const router = express.Router();

router.get('/', validatePostId, (req, res) => {
  Posts.get()
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error retrieving posts'})
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  console.log("POST HAS BEEN VALIDATED");
  next();
}

module.exports = router;
