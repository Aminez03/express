const express = require("express");
const path = require("path");

const app = express();

// console.log(hours)

app.use(date=(req,res,next)=>{

  var objDate = new Date();
  var hours = objDate.getHours();
  var day =objDate.getDay();
  if((hours >= 9 && hours <= 17)&&(day!=0 || day!=6)){
    next()

  }
  else{
   
  res.sendFile(path.join(__dirname, "pages", "close.html"))


      
  }
})
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "pages", "home.html"))
);
app.use(express.static(path.join(__dirname, "pages")));

// app.get('/', function(req, res, next){
//   req.time = new Date().toString();
//   next();
// },
//   function(req, res) {
//     res.send({"time": req.time});

//   }
// );

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is runing successfuly on port ${PORT}`)
);
