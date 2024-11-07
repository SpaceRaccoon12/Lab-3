//The first thing that we are going to do us make sure that all our HTML has been rendered
document.addEventListener('DOMContentLoaded' ,(loaded) =>{
    // Now test to see if our JS is connected
    console.log('Welcome Message');
    //Now we will look at how to declare a variable in JS
    let a = 200;
    let b = 180;
    let c = a + b;
    //The const is a variable that cannot be changed once the value has been assigned
    const value1 = 500;
    const value2 = 600;
    let total = value1 + value2;


   // document.getElementById("main-lesson").innerHTML =  "<a href='index.html'>" + "<img id='logo' src='./img/logo.png' alt='SHOW UP OMG'>";
    document.getElementById("main-lesson").innerHTML = "<h1> TEST </h1>" + "<p>Please work good god</p>" + "<a href='index.html'>" + "<img id='logo' src='./img/logo.png' alt='SHOW UP OMG'>";
   // document.getElementById("main-lesson").innerHTML =  "<a href='index.html'>" + "<img id='logo' src='./img/logo.png' alt='SHOW UP OMG'>";

    // now let's look at how we can output our HTML
    //document.getElementById("ex1").innerHTML = "<h4>JavaScript Variables</h4>" + "<p>Let: The value of C is " + c + "</p>" + "<p>Const: The total is: " + total + "</p>";
    //Well now we can't see our HTML... Let's style it with JS
    document.getElementById("main-lesson").style.color = "#ff0000";
   document.getElementById("main-lesson").style.padding = "2% 8%";
   document.getElementById("main-lesson").style.backgroundColor ="#d69558"
    


    //Now let's create our golbal header
   // document.getElementById("lesson-global-header").innerHTML = "<div id='logo-container'>" + "<a href='index.html'>" + "<img id='logo' src='./img/logo.png' alt='header logo'>" + "</a>" + "</div>" + "<nav><menu>" + "<li><a href='#' > Item 1</a></li>" + "</menu></nav>";

    //document.getElementById("lesson-global-header").style.cssText = "display: flex; height: 125px; background-color: #f8f8f8; align-items: center;";

  //  document.getElementById("logo-container").style.cssText = "flex-grow: 1; height: 110px; width: auto;";

  //  document.getElementById("logo").style.cssText = "width: auto; height: 100%;";


});