  
  
 var x=0;   //اعمل متغير اسمه x
 var y=0;   // اعمل متغير اسمه y

var operationnotset = true;
var operation = function (x) {return x};


function writenum(This)
{
    if (operationnotset)
    {
        x += This.value;
    }
    else
    {
        y += This.value;
    }

    document.getElementById("screen").innerHTML+=This.value
}


function sum()
{
    document.getElementById("screen").innerHTML+="+"
    operationnotset = false;
    operation = function () {
        x=parseFloat(x)
        y=parseFloat(y)       
        return x+y; //اجمع المتغيرين x ,y
    }
}
function sub()
{
    document.getElementById("screen").innerHTML+="-"
    operationnotset = false;
    operation = function () {
        x=parseFloat(x)
        y=parseFloat(y)     
        return x-y ;//اطرح المتغيرين x ,y
    }
}
function mul()
{
    document.getElementById("screen").innerHTML+="*"
    operationnotset = false;
    operation = function () {
        x=parseFloat(x)
        y=parseFloat(y)   
        return  x*y //ضرب المتغيرين x ,y
    }
}
function div()
{
    document.getElementById("screen").innerHTML+="/"
    operationnotset = false;
    operation = function () {
        x=parseFloat(x)
        y=parseFloat(y)     
        return x/y ;//قسمة المتغيرين x ,y
    }
}



function solve() { 
    document.getElementById("screen").innerHTML = operation();
   
    // keep the result as a new x so i can make 2+3=6+2=8*2=16 and so on
    x=operation();
   
    operationnotset = true;
    operation = function (x) { return x };
    //اجعل قيمة
    //x
    //تساوي 0
   
    // x=0;

    //اجعل قيمة
    //y
    //تساوي 0
     y=0;
}

function $rel() { 
    document.getElementById("screen").innerHTML+="&"
    operationnotset = false;
}

function rel() { 
    x=parseFloat(x)
    y=parseFloat(y) 
    console.log(x,y);
    if ( x > y)/*هل xاكبر من y*/
    {
  
        //اظهر رسالة مكتوب فيها قيمة ال
        //x 
       // اكبر من قيمة ال
       //y
       alert( x + " is greater than "+ y);
         //اكتب في كونسول قيمة ال
        //x 
       // اكبر من قيمة ال
       //y
       console.log(x + " is greater than "+ y);
    }
        
    else if (y < x) /* xهل اصغر من y*/
    {

         //اظهر رسالة مكتوب فيها قيمة ال
        //x 
       // اصغر من قيمة ال
       //y
       alert( x + " is smaller than "+ y);
        //اكتب في كونسول قيمة ال
        //x 
       // اصغر من قيمة ال
       //y
       console.log(x + " is smaller than "+ y);
    }
        
    else if ( x === y)/* هل x تساوي من y*/
    {
        //اظهر رسالة مكتوب فيها قيمة ال
        //x 
       // تساوي  قيمة ال
       //y
       alert( x + " is equal to "+ y);
        //اكتب في كونسول قيمة ال
        //x 
       // تساوي قيمة ال
       //y
       console.log(x + " is equal to "+ y);
    }
        
}







function del() {
  
    //العنصر صاحب ال
    //id=screen
    //اجعل النص داخله  يساوي
    //""
    //لا شئ
  document.getElementById("screen").innerHTML="";

    operationnotset = true;
    operation = function (x) { return x };
    //اجعل قيمة
    //x
    //تساوي 0
    x=0;
    //اجعل قيمة
    //y
    //تساوي 0
    y=0;
}