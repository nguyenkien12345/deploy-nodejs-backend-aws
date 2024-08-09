const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        data: [
            { id: 1, name: 'Nguyen Trung Kien', age: 24, gender: true },
            { id: 2, name: 'Nguyen Van A', age: 100, gender: true },
            { id: 3, name: 'Nguyen Van B', age: 80, gender: false }
        ]
    })
})

module.exports = router;