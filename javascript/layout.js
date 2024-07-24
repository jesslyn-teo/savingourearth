// Used in Home Page
var i = 0;
var txt = [];
txt[0] = "Our climate is changing; Why aren't we?";
txt[1] = "Save Earth, Save a life, Save us all.";
txt[2] = "Keep our Earth Green and Clean.";
var speed = 100; 
var currentMessage = 0; 
var isDeleting = false; 
var displayText = " "; 

// Function to simulate a typewriter effect
function typeWriter() {
    var message = txt[currentMessage];

    if (isDeleting) {
        displayText = message.substring(0, displayText.length - 1); 
    } else {
        displayText = message.substring(0, displayText.length + 1); 
    }

    document.getElementById("typewriter").innerHTML = displayText;

    if (!isDeleting && displayText === message) {
        isDeleting = true;
        speed = 25; 
    } else if (isDeleting && displayText === "") {
        isDeleting = false;
        speed = 100; 
        currentMessage = (currentMessage + 1) % txt.length; 
    }


    setTimeout(typeWriter, speed);
}


window.onload = function () {
    typeWriter();
};

// Used in Goals Page
function myFunction() {
    var x = document.getElementById("myDIV");

    if (x.innerHTML === "Find out more about what we can do better as a society!") {
        x.innerHTML = "I feel that it is essential that we take saving our earth alarmingly seriously" +
            " because it contributes to many different aspects of our lives,<br> such as" +
            " climate change. We are reliant on the food and water Mother Nature has" +
            " to offer to us.<br> We fail to realize that some of our daily activities" +
            " damage our planet due to a lack of knowledge,<br> such as throwing away" +
            " leftovers. Thus, it is also why we should take the initiative to learn" +
            " and do more for our country.";
    } else {
        x.innerHTML = "Find out more about what we can do better as a society!";
    }
}

// Function to animate numerical values
function animateValue(item, duration, start = 0) {
    var end = item.innerText.replaceAll(",", "").trim();
    var range = end - start;
    var increment = (range / (duration / 10)); 
    
    if (end < start) {
        increment *= -1;
    }
    var current = start;
    var stepTime = 1; 


    var timer = setInterval(function () {
        current += Math.ceil(increment);
        item.innerText = current;

        if (current >= end) {
            item.innerText = end;
            clearInterval(timer);
        }
    }, stepTime);
}

// Apply the value animation to all elements with the class 'counter'
document.querySelectorAll('.counter').forEach((item) => {
    animateValue(item, 3000);
});
