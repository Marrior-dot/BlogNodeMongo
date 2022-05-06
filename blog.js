const express = require('express')
const app = express()
const mongo = require('mongoose')
const blogs = require('./models/blogSchem')
port = 3040

mongo.connect('mongodb+srv://Marrior:ev2ryday@sysdatacluster.mkj5o.mongodb.net/Test1?retryWrites=true&w=majority')
.then((result) => app.listen(port, () => {
    console.log("Funcionando na porta "+port)
}))
.catch((err) => console.log(err))

app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static('public'))

app.get('/', (req,res) => {
    const blogPost = new blogs({

    })

    res.render('index', {title: "Home Page",section: "THE BLOG", blogC: blogs})
})

app.get('/about', (req,res) => {
    res.render('about', {title: "About Page", section: "THE ABOUT"})
})

app.get('/create', (req,res) => {
    res.render('create', {title: "Writting Page", section: "THE WRITTING"})
})

app.get('/contact', (req,res) => {
    res.render('contact', {title: "Contact Page", section: "THE CONTACTS"})
})


