// var obj={
//     'name':'haider',
//     'mail':'abc@gmail.com'
// }


// //Jason file used to store data can be use in any lang c++ js html
// //stores array , array of objs
// //two types od dt string,parse
// var obj={
//     'name':'haider', // JASON file
//     'mail':'abc@gmail.com'
// }

// var a=JSON.stringify(obj);
// localStorage.setItem('userinfo',a);

// var stringg=localStorage.getItem('userinfo');
// console.log(stringg);

// var parse=JSON.parse(obj);
// console.log(parse);

// //Use to clear from Application F12
// localStorage.clear();

// TIMER 3 SEC



function sign(){
var name=document.getElementById('name').value;
var email=document.getElementById('email').value;
var pass=document.getElementById('password').value;
if(name==""|| email===""||pass===""||name==" "|| email===" "||pass===" ")
{
console.log('Something went wrong !')
}
else{
var info={
    fullname:name,
    email:email,
    passowrd:pass
}
var a=JSON.stringify(info);
localStorage.setItem('userinfo',a);
}
// localStorage.clear();
document.getElementById('load').innerHTML="Loading.. "
setInterval(function(){
location="http:\\www.google.com"
},6000)

}
