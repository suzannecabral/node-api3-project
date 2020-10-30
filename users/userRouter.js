const express = require('express');

//require functions from the db models:

// const { getById } = require('../posts/postDb');
const Users = require('./userDb');


//instantiate router:
const router = express.Router();

router.post('/', (req, res) => {
  //POST /api/users/
});

router.post('/:id/posts', (req, res) => {
  // POST /api/users/:id/posts
});

router.get('/', (req, res) => {
  // GET /api/users/
  Users.get()
    .then(data=>{
      res.status(200).json({data});
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error  retrieving users.'});
    })
});

router.get('/:id', (req, res) => {
  // GET /api/users/:id
});

router.get('/:id/posts', (req, res) => {
  // GET /api/users/:id/posts
});

router.delete('/:id', (req, res) => {
  // DELETE /api/users/:id
});

router.put('/:id', (req, res) => {
  // PUT /api/users/:id
});

//custom middleware

function validateUserId(req, res, next) {
  // const {id} = req.params

  // getById(id)
  //   .then(data=>{
  //     console.log("VALIDATE_USER_ID:");
  //     console.log(data);
  //     next();
  //     //test this before moving on
  //     //next step if/then for error msg
  //     //requests are not gteting into user router
      
      

  //   })
  //   .catch(err=>{
  //     console.log(err);
  //     res.status(500).json({message:"server error retrieving users"})
  //   });
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
