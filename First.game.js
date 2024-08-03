function Oddss ()
{
    //Below is a line of code that allows me to get a random number from 1-10, I am able to adjust the
    //number at the end to increase the max
    //Also below you can see the code var, this basically means to set the variable to whatever
    var die1 = Math.ceil(Math.random() * 10);
    var die2 = Math.ceil(Math.random() * 10);
    //dont use document.write
    //document.write("average of "+num1 +" " + num2 + "="+result)
    document.getElementById ("firstnumres").innerHTML="First number =" + die1;
    document.getElementById ("secondnumres").innerHTML="Second number =" + die2;
    //In this case, I am using the var (variable) code to set my sum to equal my die1 plus die2, so wherever
    //I use sum, it will put in die1+die2.
    var sum = die1 + die2;
    document.getElementById("res").innerHTML= "res = " + sum;
    //Below is my first If statment, its basically saying if the following is true, then do..., in this case
    //I wanted it to say you lose since the number will be even
    //The code after the If statment basically means if the number is even, then..., I could also use
    //if need be, || which means "OR", && which means "AND", But I only used x % 2 ==0 which means even,
    //I also replaced the X with sum so its asking if the sum is even.
    if (sum % 2 ==0) 
    {
        document.getElementById("finalres").innerHTML= "You Lose!"
    }
    //Below is my first else statment, its saying if the above isnt true, do this instead, which is only type
    //you win.
    //I could also use "else if", but I do not need to in this situation as my game only has 2 possible outcomes,
    //winning or losing.
    else 
    document.getElementById("finalres").innerHTML= "You win!"
}


function Evenss () 
{
    var die1 = Math.ceil(Math.random() * 10);
    var die2 = Math.ceil(Math.random() * 10);
    document.getElementById ("firstnumres").innerHTML="First number = " + " " + die1;
    document.getElementById ("secondnumres").innerHTML="Second number = " + " " + die2;
    var sum = die1 + die2;
    document.getElementById("res").innerHTML= "res = " + sum;
    
    if (sum % 2 ==0) 
    {
        document.getElementById("finalres").innerHTML= "You win!"
    }
    else 
    document.getElementById("finalres").innerHTML= "You Lose!"
}
