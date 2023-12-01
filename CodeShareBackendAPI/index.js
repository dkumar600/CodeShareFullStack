const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const http = require('node:http');
const mongoose = require('mongoose');
const {codeMod} = require('./mongooseModule/codeSchema.js');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.raw());

app.use(expressSession({
    secret: 'saveyourass',
    resave: false,
    saveUninitialized: true,
  }));

app.get('/:id',async (req,res)=>{
    const code = new codeMod({"id":"ggsbscd","code":"swvjhgvwkdkwdkwjdvjwdvkdvk"});
    const insertedCode = await code.save();
    res.status(201).json(insertedCode)
});
app.get('/re',(req,res)=>{
    console.log("Re");
})
//shdgudiehdied
// app.post('/', async (req,res)=>{
    
// })


app.listen(9001, async ()=>{
    try{
        await mongoose.connect('mongodb+srv://dktiwary007:Rosaline69@cluster0.3cgzekt.mongodb.net/?retryWrites=true&w=majority',{
            autoIndex:true
        });
        console.log("This is localhost:9001");
    }catch(err){
        console.log(err);
    }
    
})

