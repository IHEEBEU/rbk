const fs = require('fs')
const helper = require('./helper-functions')
const path = require('path')

//  method for inserting one object inside the blogs.json file

exports.insertBlog = ( {author,content,title} , cb ) => {
}

//  Method for getting all the blogs from the file blogs.json file

exports.getAllBlogs = ( cb ) => {
}

// Method for getting one blog from the file Blogs.json
// with the id as a parameter

exports.getOneBlog = ( id,cb ) => {
}

// Method for deleting one blog
// it will handle a request through /blog and the id "param"

exports.deleteOneBlog = ( id,cb ) => {
}

exports.allBlogs = path.join(__dirname,"storedFiles/blogs.json")