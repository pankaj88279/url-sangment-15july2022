//console.log("its working")

const express = require("express");
const app=express()
// object :mathod()

app.use(express.json())

app.get('/data',(req,res)=>{

    console.log(req.query)
    console.log(req.query.msg)
    console.log(req.query.name)
    console.log(req.query.surname)
    console.log(req.query.adress)

    res.send({ 
      "mgs":req.query.msg,
      "name":req.query.name,
      "surname":req.query.surname,
      "adress":req.query.adress
      

    });
})

app.get('/data2/:name/:surname/:mobile',function(req,res){

  console.log(req.params)
  console.log(req.params.name)
  console.log(req.params.surname)
  console.log(req.params.mobile)
  
  res.json({
      fuldetails:{ 
        "name":req.params.name,
        "surname":req.params.surname,
        "mobile":req.params.mobile

      }
 })

})



app.post('/data1',(req,res)=>{

  console.log(req.body)
  console.log(req.body.name)
  console.log(req.body.surname)
  console.log(req.body.adress)

  res.json({ 
    
    "name":req.body.name,
    "surname":req.body.surname,
    "adress":req.body.adress
    

  });
})
app.listen(4000);