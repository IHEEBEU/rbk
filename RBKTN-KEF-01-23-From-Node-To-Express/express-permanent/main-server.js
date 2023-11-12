const express = require('express')
const morgan = require('morgan')
const handler = require('./main-handler')

const app = express()
// this is a middleware for express
// main goal is to log(console.log) in the terminal the HTTP request that are passing to the server
app.use(morgan(dev))

// Another middleware for handling the "JSon" data and parse it to a "js" object
app.use(express.json())
app.use(express.urlencoded({extend:false}))

const port = 3000


// main route handler "/"

app.get('/blogs',(req,res) => {
  handler.getAllBlogs((err,blogs) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).json(blogs);
    }
  })
})

// route '/blogs'insert a blog
app.post('/blogs',(req,res)=>{
  const { author,content,title } = req.body
  handler.insertBlog({author,content,title},(err, blog) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).json(blog);
    }
  })
})

//route '/blogs' get one blog
app.get('/blogs/:id',(req,res)=>{
  const id = req.params
  handler.getOneBlog(id,(err, blog) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(201).json(blog);
    }
  })
})

// delete one blog with the id
app.delete('/blogs/:id',(req,res)=>{
  const id = req.params
  handler.deleteOneBlog(id,(err, blog) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(204).json(blog);
    }
  })
})

// update one blog with the id






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})