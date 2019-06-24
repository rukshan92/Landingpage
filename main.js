//DOM Element
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
//Show time
function showTime() {
    //let today = new Date(2019, 06, 18, 16, 38, 30);
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();


    //Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr format
    hour = hour % 12 || 12;

    //Out put the time
    time.innerHTML = `${hour}<span>:</sapn>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}
//Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
    //Long way
    // if (n < 10) {
    //     n = '0' + n;
    // }
    // return n;
}

// set background and greeting;
function setBgGreet() {
    //let today = new Date(2019, 06, 18, 16, 38, 30);
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //morning
        document.body.style.backgroundImage = "url(morning.jpg)";
        // document.body.style.backgroundPosition = 'center';
        greeting.textContent = 'Good Morning';
    }
    else if (hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url(afternoon.jpg)";
        greeting.textContent = 'Good Afternoon';
    }
    else {
        //eveing
        document.body.style.backgroundImage = "url(night.jpg)";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
}

//get name 
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }
    else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // make Sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//get Focus 
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    }
    else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//Set Focus
// Set Name
function setFocus(e) {
    if (e.type === 'keypress') {
        // make Sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
//Run
showTime();
addZero();
setBgGreet();
getName();
getFocus();