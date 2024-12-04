//hello world in express
// const express=require('express')
// const app=express()
// const port=3000

// app.get('/',(req,res)=>{
//   res.send('Hello world')
// })

// app.listen(port,()=>{
//   console.log(`app is listening in port ${port}`)
// })

//
require('dotenv').config()
const express=require('express')
const app=express()
const port=3000
app.get('/twitter',(req,res)=>{
  res.send('shadcn')
})
app.get('/',(req,res)=>{
  res.send('/dir')
})
app.get('/login',(req,res)=>{
  res.send('<h1>shads cn </h1>')
})
app.get('/youtube',(req,res)=>{
  res.send('<h2>shadscndotcom</h2>')
})
app.listen(process.env.PORT,()=>{
  console.log(`listening on port ${port}`)
})