const express = require('express');
const { insert } = require('../data/dbConfig');

//require functions from the db models:
const Posts = require('../posts/postDb');
const { getUserPosts } = require('./userDb');
const Users = require('./userDb');

//instantiate router:
const router = express.Router();

//---------------------------
// ENDPOINTS
//---------------------------
// [ ]

router.post('/', validateUser, duplicateUser, (req, res) => {
  //POST /api/users/
  // [x]
  const newUser = req.body;
  
  Users.insert(newUser)
    .then(data=>{
      console.log(data);
      res.status(201).json(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error creating new user'});
    });
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // POST /api/users/:id/posts
  // [ ]
  const user_id = req.params.id;
  const {text} = req.body;
  const newPost = {text, user_id};

  Posts.insert(newPost)
    .then(data=>{
      res.status(201).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({message:'Server error creating new post'});
    });


});

router.get('/', (req, res) => {
  // GET /api/users/
  // [x]
  Users.get()
    .then(data=>{
      res.status(200).json({data});
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error  retrieving users.'});
    })
});

router.get('/:id', validateUserId, (req, res) => {
  // GET /api/users/:id
  // [x]
  res.status(200).send(req.user)
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // GET /api/users/:id/posts
  // [x]
  const {id}=req.params;
  
  getUserPosts(id)
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error retrieving user posts'});
    });


});

router.delete('/:id', validateUserId, (req, res) => {
  // DELETE /api/users/:id
  // [x]

  const {id} = req.params;
  Users.remove(id)
    .then(()=>{
      res.status(200).json({message:'user deleted successfully'});
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error deleting user'});
    })

});

router.put('/:id', validateUserId, validateUser, (req, res) => {
  // PUT /api/users/:id
  // [x]
  const {id} = req.params;
  const {name} = req.body;
  const updatedUser = {id, name}

  Users.update(id, updatedUser)
    .then(()=>{
      res.status(200).json({message:'User updated successfully'});
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error updating user'});
    });
});

//custom middleware
// [x]

//validateUserId
// [x]
function validateUserId(req, res, next) {
  const {id} = req.params;

  Users.getById(id)
    .then(data=>{

      if(data){
        console.log("VALID ID");
        console.log(data);
        req.user = data;
        next();
      }else{
        console.log("INVALID ID");
        console.log(data);
        res.status(400).json({message:`There is no user with id: ${id}`});
        next();
      }

    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error while retrieving user id'});
      next();
    })
}

//validateUser
// [x]
function validateUser(req, res, next) {
  //check that there is a response body
  if(Object.keys(req.body).length > 0){  
    const {name} = req.body;
    //check that there is a name
    if(name){
      next();
      //next check that name does not exist
    }else{
      res.status(400).json({message:"missing required name field"});
    }
  }else{
    res.status(400).json({message:"missing user data"});
  }
}


//extra: duplicateUser
//[x]

function duplicateUser(req, res, next){
  const {name}=req.body;
  //check that name does not exist
  Users.get()
    .then(data=>{
      if(data.find(user => user.name === name)){
        res.status(400).json({message:'Error: User already exists, please pick a unique username.'});
      }else{
        next();
      }
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'server error validating user'});
    })
}


//validatePost
// [x]
function validatePost(req, res, next) {
  //check for req body
  if(Object.keys(req.body).length > 0){
    //check for input ("text" key)
    if(req.body.text){
      //passes the check, continue
      next();
    }else{
      res.status(400).json({message:"missing required text field"});
    }
  }else{
    res.status(400).json({message:"missing user data"});
  }
}

module.exports = router;
