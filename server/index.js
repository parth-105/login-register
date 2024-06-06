const exoress = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const empmodel = require('./emp')
const app=exoress();

const htttp = require('http').createServer(app)

const PORT =  3000;


app.use(exoress.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.json({msg:"hi"})
})

app.post('/register',(req,res)=>{
     empmodel.create(req.body)
     .then(employees => res.json(employees))
     .catch(err => res.json(err))
})

mongoose.connect("mongodb://127.0.0.1:27017/employee");

htttp.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})