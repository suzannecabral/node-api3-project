const express = require('express');
const Posts = require('./postDb');
const router = express.Router();

router.get('/', (req, res) => {
  Posts.get()
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error retrieving posts'})
    })
});

router.get('/:id', validatePostId, (req, res) => {
  res.status(200).json(req.post);
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

// fix: the error inside next just shows up as [object Object]
// data type getting changed somewhere as it's passed back? 
// maybe json or stringify?

// res returns correctly

function validatePostId(req, res, next) {
  const { id } = req.params;

  Posts.getById(id)
    .then(data =>{

      if (!data){
        console.log("INVALID POST");
        next({code: 404, message: 'Not found: No post exists with that ID'});
      }else{
        console.log("VALID POST");
        console.log(data);
        req.post=data;
        next();
      }
    })
    .catch(err=>{
      console.log(err.message);
      next({code: 500, message: 'The server went boom'});
    })
  
}

module.exports = router;
