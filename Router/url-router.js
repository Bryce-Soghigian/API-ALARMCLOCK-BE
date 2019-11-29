const router = require('express').Router()

const DB = require('../Models/url-model');


router.get('/urls',(req,res) => {
    DB.getURL()
    .then((el) => {
        res.status(200).json(el)
    }).catch((err) => {
        res.status(500).json(err)
    })
})
router.post('/urls', (req,res) => {
    const newurl = req.body
    DB.addURL(newurl)
    .then((el) => {
        res.status(200).json(el)
    }).catch((err) => {
        res.status(500).json(err)
    })
})

// useEffect(() => {
// setInterval(function(){
// for(let i = 0; i<res.data.length;i++){
//     axios.get('i')
//     .then((res) => {
//         console.log(res.data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }
// },1800000)
// }, [])

module.exports = router;