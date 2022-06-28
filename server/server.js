const express=require('express');
const app=express();

const workTime=require('../Middleware/middleware')
app.set("views", './views');
//set the wiew engine for the app

app.set("view engine","pug");
app.use(express.static('Public'));
//MIDDLEWARE
app.use(workTime);
//HOME
app.get('/', function (req, res){
    res.render('Home',{title:('home')});
});
//SERVICES
app.get('/OurServices', function(req, res){
    res.render('OurServices',{title: ('OurServices')} );
});
//CONTACT US
app.get('/Contactus', function(req, res){
    res.render('Contactus');
});
app.use((req, res)=>{
    res.status(404).render("404",{title:'404'})
    })
//listening port
const port=4000;
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running at port ${port}`)
})