// this file contain function that will help you write less Verbose code, so the main purpose is not to rewrite properties that you are reusing
// in this case the `` path ``


const fs = require('fs')
const path = require('path')

exports.counterFile = path.join(__dirname, '/storedFiles/index.txt');

// paddedNumber is used as the Index/id of the object

const paddedNumber = ( num ) => String(num).padStart(5,'0')

// main helper function for reading and creating/writing in the files

// this is a helper function that will take in consideration the path to the "file system"
// so instead of using the funciton of the fs file that take two parameters( path , callback) this one will only take a callback that have the data inside of it

const readIndex = ( cb ) => {
      console.log(exports.counterFile)
      fs.readFile(exports.counterFile,(err,data) => {
            err ? cb(err,null) : cb(null,Number(data))
      })}

// this is a helper funciotn for the fs.writeFile function that will have 2 properties instead of 3 since you will not need to change the file in this funciton


const writeIndex = ( index, cb ) => {
      const paddedIndex = paddedNumber(index)
      fs.writeFile(exports.counterFile,paddedIndex,(err)=>{
            err ? cb(err, null) : cb(null, paddedIndex)
      }
)}

//this function is to get the next index when you insert a new object ! it is creating the new ID
// this funciton should read from the file and get the new index so you can use it in the next insertion of the object as the ID

const getTheNextIndex = ( number )=> {

}

getTheNextIndexSolution((err,index) =>{
      console.log(index)
})

exports.getTheNextIndex = getTheNextIndex
