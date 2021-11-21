/*
functions of ABOUT page.
*/


//function for printing a line letter by letter.
var mytext = "-> ADD STYLE TO YOUR WALK!!";//text that has to be printed 
var myArray = mytext.split("");//splits every character and stores in array
var loopTimer;
var repeater;

function frameLooper() 
{ 
if(myArray.length > 0) //checking array length as if its 0 it means its printed
{
document.getElementById("byword").innerHTML += myArray.shift();
} 
else {
clearTimeout(loopTimer);
return false;
}

loopTimer = setTimeout('frameLooper()',200);//runs the function in intervals

}
//source:https://stackoverflow.com/questions/8360130/how-to-make-a-text-flash-in-html-javascript




//this function is used to redirect to another page using the page url.
function redirect() 
{
    window.open("https://www.albany.edu/~sk796958/products.html"); //navigates to another page
}

//source learned from: https://www.w3schools.com/jsref/met_win_open.asp

/*
functions of contact page.
*/

//to check is the radio button selected or not and show information basing on that
function showinfo(number)
{
  //if radio button is checked then the divs show up information basing on it
      if (document .getElementById(number).checked)
      {
        if(number == '1') //if button 1 checked 
        {
        document.getElementById("R1B").style.display = "block"; //the information display style is set to show it
        }
        if(number == '2')//if button 2 checked
        {
        document.getElementById("R2B").style.display = "block";//the information display style is set to show it
        }
        if(number == '3')//if button 3 checked
        {
        document.getElementById("R3B").style.display = "block";//the information display style is set to show it
        }
        if(number == '4')//if button 4 checked
        {
        document.getElementById("R4B").style.display = "block";//the information display style is set to show it
        }

      }

      //else it will set it none and dont show up the information.
      else
      {
        if(number == '1')
        {
        document.getElementById("R1B").style.display = "none";
        }
        if(number == '2')
        {
        document.getElementById("R2B").style.display = "none";
        }
        if(number == '3')
        {
        document.getElementById("R3B").style.display = "none";
        }
        if(number == '4')
        {
        document.getElementById("R4B").style.display = "none";
        }
    }
    return false;
  
}
//not complete but learned about this on
//source: https://www.w3schools.com/jsref/prop_style_display.asp
//source 2: https://www.w3schools.com/jsref/prop_radio_checked.asp 
  
  
//this is submission of a form for a review or a complaint 
function message()
{
    var check = document.forms["form1"]["txtBox"].value;//gets the value of the txtBox
    var check2 = document.forms["form1"]["txtBox1"].value;//gets the value of the txtBox1
    var check3 = document.forms["form1"]["textarea"].value;//gets the value of the textarea
 //checks that none of the feilds are empty as they are required fields.
    if( check =="" || check2 =="" || check3 =="" || (check =="" && check2 =="" && check3 ==""))
    {
        alert("please enter input");//alerts when they are empty and shows up on the screen
        return false;
    }
    else 
    {
        alert("your submission recevied our representative reach you out soon");//if no error is found then it will alert that it is submitted.
       return true; 
    }
}
//not complete but learned about this on
//source: https://www.w3schools.com/js/js_validation.asp
//source 2: https://www.w3schools.com/jsref/met_win_alert.asp

/*
functions of subscribe page.
*/

//this is used to prompt the user the entered email on input and prompts to submit
function prompt1()
{
    var input = document.getElementById("input").value; //takes the input value.
    document.getElementById("prnt").innerHTML= "if your email is: "+input+" then submit to sbscribe."; //this is printed on input by the user
}

//this is used to promt the user by saying his mail is submitted for subscription.
function prompt2()
{
    var input = document.getElementById("input").value; //takes the input
    if(input == "")//if the input is empty
    {
        alert("please enter input");//alerts that it is empty
        return false;
    }
    else //else if the input is entered
    {
        alert("THANKYOU FOR SUBSCRIBING..... SEE YOU AT YOUR MAIL"); //alerts the user for the submission.
        document.getElementById("image").style.display="block";//displays a gif on submission of the mail as token of thanks
        //resets the fields for new submission.
        document.getElementById("prnt").innerHTML="";
        document.getElementById("input").value="";
   
        return true;
    }
}



/*
function of products page.
*/

//calculation of the total amount to be paid.
function cal()
{
    var numberofitems = parseInt(document.getElementById("price").value); //number of quantities of product 1
    var numberofitems1 = parseInt(document.getElementById("price1").value);//number of quantities of product 2
    var numberofitems2 = parseInt(document.getElementById("price2").value);//number of quantities of product 3
    var numberofitems3 = parseInt( document.getElementById("price3").value);//number of quantities of product 4
    var calculate;//this stores the total value for payment
    calculate = numberofitems*100 +numberofitems1*100 +numberofitems2*100 +numberofitems3*100  ; //calculates the total basing on quantities and price.
    document.getElementById("pay").innerHTML = calculate; //places the text on the webpage of that.
}

//making the website a prototype the pay button will just prompt the user on saying the payment received.
function pay()
{

    var input = document.getElementById("price").value; //taking the input value
    var input2 = document.getElementById("price1").value;//taking the input value
    var input3 = document.getElementById("price2").value;//taking the input value
    var input4 = document.getElementById("price3").value;//taking the input value
    //checking if the fields arent empty.
    if(input == "" || input2 == "" || input3 == "" || input4 == "" ||(input == "" && input2 == "" && input3 == "" &&input4 == ""))
    {
        alert("please enter input"); //if empty alerts the user to enter input
        return false;
    }
    //else if all the required feilds are good to go
    else
    {
        alert("THANKYOU FOR PURCHASE ..... PLEASE DIRECT TO PAYMENT"); //alerts the user on payment submission.
       //reseting all the fields for next shopping payment. 
        document.getElementById("price").value=0;
        document.getElementById("price1").value=0;
        document.getElementById("price2").value=0;
        document.getElementById("price3").value=0;
        document.getElementById("pay").innerHTML=0;
        document.getElementById("coupon").value="";
        document.getElementById("coupon1").innerHTML="";
        return true;
    }
}
//not complete but learned about this on
//source 2: https://www.w3schools.com/jsref/met_win_alert.asp


//this is for the coupon discount codes to reduce the price
function check() 
{
   var coupons = ["shoe","sneaker","saleon50","styles"]; //array with valid coupon codes that are used to compare with input.
   var i;//check variable for the loop 
   //for loop for checking 
   for(i = 0; i<coupons.length;i++)
   {
       if(document.getElementById("coupon").value == coupons[i]) //if the input entered by the user is in the array elements.
       {
           document.getElementById("pay").innerHTML= (10 * document.getElementById("pay").innerHTML)/100; // it will replace the total amount with new price.
           document.getElementById("coupon1").innerHTML = "coupon applied"; //and prompts the user that his code worked.
           break; //breaks the loop as the code is found
        }     
        else // else if it doesnt exist.
        {
            document.getElementById("coupon1").innerHTML = "coupon not valid"; // it says the code is not valid. 
        } 
   }

}



/*
EXTRA EFFORT:

I have used alot of additional functions apart from rubric such as alert, form and few default functions such as .open().
i have learned about them over w3 schools, had not implemented directly but tried them on few other examples to practise and then got to use it in this. 
the idea of using them was instinctive to make the page more and more interactive and appealing.

i loved using alert as it is one of the best way to promp the user. and this process of going beyond the script helped me in learning and adapting to the programming in javascipt 
now i am confident that i am a programmer of javascript also.

thank you !!
*/ 