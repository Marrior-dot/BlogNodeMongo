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

//Permite visualizar os dados pelo express e retorná-los em formato json,
//sem isso retorna um undefined
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res) => {
    /*
    const blogPost = new blogs({
        number : 0,
        title: "First blog",
        content: "My first blog content",
        author: "Author of the blog"    
    })

    //Async
    blogPost.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
*/
    res.redirect('blogs')
    
})

app.get('/listOfBlogs', (req,res) => {
    blogs.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/about', (req,res) => {
    res.render('about', {title: "About Page", section: "THE ABOUT"})
})

app.get('/blogs/create', (req,res) => {
    res.render('create', {title: "Writting Page", section: "THE WRITTING"})
})

app.get('/blogs', (req,res) =>{
    blogs.find()
    .then((result) => {
        res.render('index', {title: "Home Page",section: "THE BLOG", blogC: result})
    })
    .catch((err) => {
        console.log(err)
    })

})

app.get('/blogs/:id',(req,res) => {
    const id = req.params.id
    blogs.findById(id)
    .then((result) => {
        res.render('each',{ section:"Seção de cada Blog",title:"Detalhes do Blog", blogTitle:result.title, blogContent: result.content, blogAuthor: result.author  })
    })
    .catch((err) => {
        console.log(err)
    })

})

app.post('/blogs', (req,res) => {
    console.log(req.body)
    const newBlog = new blogs(req.body)

    newBlog.save()
    .then((result) => {
        res.redirect('/')
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/contact', (req,res) => {
    res.render('contact', {title: "Contact Page", section: "THE CONTACTS"})
})


