const e = require('express')
var express = require('express')

var app = express()

require('dotenv').config() //config env
const port = process.env.PORT //port from env
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

// Middleware
app.use(function logger(req,res,next){
    console.log(`Request URI path ${req.url}`)
    next()
})

//Post Function
app.post('/biodata',(req,res)=>{
    const nama = req.body.nama
    const tempatLahir = req.body.tempatLahir
    const tanggalLahir = req.body.tanggalLahir
    const alamat = req.body.alamat

    // if(req){
    //     console.log('Post Success')
    // }
    res.send({
        'nama':nama,
        'tempat-lahir':tempatLahir,
        'tanggal-lahir':tanggalLahir,
        'alamat':alamat
    })
    // console.log({
    //         'nama':nama,
    //         'tempat-lahir':tempatLahir,
    //         'tanggal-lahir':tanggalLahir,
    //         'alamat':alamat
    //     })
})


// Get Function
app.get('/biodata',(req,res)=>{
    const nama = req.query.nama
    const tempatLahir = req.query.tempatLahir
    const tanggalLahir = req.query.tanggalLahir
    const alamat = req.query.alamat

    res.send({
        'nama':nama,
        'tempat-lahir':tempatLahir,
        'tanggal-lahir':tanggalLahir,
        'alamat':alamat
    })

    // Port
    // http://localhost:8000/biodata?nama=rival&tempatLahir=tasikmalaya&tanggalLahir=15%20juni%202002&alamat=kp%20cijeruk
})

app.listen(port,function(){
    console.log(`listening on port ${port}...`)
})