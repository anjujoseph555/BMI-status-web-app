const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var H=Number(req.body.h);
  var W=Number(req.body.w);
  var bmi=W/(H*H);
  if(bmi<18.5){
    res.send("Your bmi is "+bmi+" - Under Weight");
  }
  else if (18.5<bmi<24.9) {
    res.send("Your bmi is "+bmi+" - Normal Weight");
  }
  else{
    res.send("Your bmi is "+bmi+" - Over Weight");
  }
});


app.listen(3000,function(){
  console.log("Server set is running on port 3000");

});
