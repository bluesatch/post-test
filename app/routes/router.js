const express = require('express')
const router = express.Router()

const PORT = process.env.PORT || 3005

router.get('/api', (req, res)=> {
    res.json({
        'All Users': `http://localhost:${PORT}/api/users`
    })
})

router.use('/api/users', require('./api/userRoutes'))

router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 Error This page does not exist!</h1>')
    }
})

module.exports = router