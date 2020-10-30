const express = require('express');
const Users = require('./userDb');
const router = express.Router();

//[ ]
//ENDPOINTS

//[ ]
router.post('/', (req, res) => {
  // do your magic!
});

//[ ]
router.post('/:id/posts', (req, res) => {
  // do your magic!
});

//[ ]
router.get('/', (req, res) => {
  res.status(200).json({message:'THIS IS AN ENDPOINT'});
});

//[ ]
router.get('/:id', (req, res) => {
  // do your magic!
});

//[ ]
router.get('/:id/posts', (req, res) => {
  // do your magic!
});

//[ ]
router.delete('/:id', (req, res) => {
  // do your magic!
});

//[ ]
router.put('/:id', (req, res) => {
  // do your magic!
});

//[ ]
//custom middleware

//[ ]
function validateUserId(req, res, next) {
  // do your magic!
}

//[ ]
function validateUser(req, res, next) {
  // do your magic!
}

//[ ]
function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
