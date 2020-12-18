const Merch = require('../models/merch')

const express = require('express')
const passport = require('passport')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE
// POST /merch
router.post('/merch', requireToken, (req, res, next) => {
  // set owner of the newly created merchandise to be current user
  req.body.merch.owner = req.user.id
  Merch.create(req.body.merch)
    // respond to succesful `create` with status 201 and JSON of new "merch"
    .then(merch => {
      res.status(201).json({ merch: merch.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /merch/203948029384
router.patch('/merch/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the user tries to change the `owner` property by including a new owner, prevent that by deleting that key/value pair
  delete req.body.merch.owner

  Merch.findById(req.params.id)
    .then(handle404)
    .then(merch => {
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, merch)
      return merch.updateOne(req.body.merch)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// INDEX
// GET /merch
router.get('/merch', requireToken, (req, res, next) => {
  Merch.find()
    .then(merch => {
      return merch.map(merch => merch.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(merch => res.status(200).json({ merch }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /merch/23983479823
router.get('/merch/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Merch.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "merch" JSON
    .then(merch => res.status(200).json({ merch: merch.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /merch/0293840234
router.delete('/merch/:id', requireToken, (req, res, next) => {
  Merch.findById(req.params.id)
    .then(handle404)
    .then(merch => {
      // throw an error if current user doesn't own `merch`
      requireOwnership(req, merch)
      // delete the example ONLY IF the above didn't throw
      merch.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
