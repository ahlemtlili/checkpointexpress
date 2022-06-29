
var d = new Date();
var hour = d.getHours();
var day = d.getDay();


const workTime = function (request, response, next) {
if (hour > 9 && hour < 18 && day > 0 && day < 6) {
next();
}else{
    response.status(400).render('closed',{title: ('closed')});
  }
}

     module.exports=workTime;