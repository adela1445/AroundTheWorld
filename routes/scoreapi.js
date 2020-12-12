const Score = require( '../models/Score.js')
const express = require( 'express')
const { data } = require('autoprefixer')

const router = express.Router()

router.get('/api/save/:user_id', (req, res) => {

    console.log(req)


    Score.find({}).then((data) => res.json(data))
    console.log(data)
},
    console.log(data)
)

// router.post('/userscores', ({ body }, res) => {
//   console.log(body)
//   Score.create(body)
//     .then((done) => res.json(done))
//     .catch((err) => res.status(400).json(err))
// })

module.exports = router
