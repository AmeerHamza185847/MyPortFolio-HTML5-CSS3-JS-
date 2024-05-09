

let flag = true;
let toggle = () => {
    if (flag) {
        menueClose.style.display = 'block';
        menueClose.style.cursor = 'pointer';
        /* style the navbar to be display */
        secondOrderList.style.left = '0px';
        secondOrderList.style.transition = '1s';
        menueOpen.style.display = 'none';
        flag = false;
    }
    else {
        menueClose.style.display = 'none';
        menueOpen.style.display = 'block';
        secondOrderList.style.left = '-107%';
        secondOrderList.style.transition = '1s';
        flag = true;
    }
}

let secondOrderList = document.querySelector(".secondOrderList");

let menueClose = document.querySelector(".menueClose");
menueClose.addEventListener('click',toggle);

let menueOpen = document.querySelector(".menueOpen");
menueOpen.addEventListener('click', toggle);


/* Circular progress bar 1 coding starts here */

let circle1 = document.querySelector(".circle1");
let percentageValue1 = document.querySelector(".percentageValue1");

let startValueBar1 = 0;
let endValueBar1 = 85;

let progress1 = setInterval(() => {
    startValueBar1++;
    circle1.style.background = `conic-gradient(#44f54b ${startValueBar1 * 3.6}deg, #ededed 0deg)`;
    percentageValue1.textContent = `${startValueBar1}%`;
    if(startValueBar1 === endValueBar1){
        clearInterval(progress1);
    }
},30);

/* Circular progress bar 1 coding endss here */


/* Circular progress bar 2 coding starts here */

let circle2 = document.querySelector(".circle2");
let percentageValue2 = document.querySelector(".percentageValue2");

let startValueBar2 = 0;
let endValueBar2 = 75;

let progress2 = setInterval(() => {
    startValueBar2++;
    circle2.style.background = `conic-gradient(#44f54b ${startValueBar2 * 3.6}deg, #ededed 0deg)`;
    percentageValue2.textContent = `${startValueBar2}%`;
    if(startValueBar2 === endValueBar2){
        clearInterval(progress2);
    }
},30);

/* Circular progress bar 2 coding endss here */


/* Circular progress bar 3 coding starts here */

let circle3 = document.querySelector(".circle3");
let percentageValue3 = document.querySelector(".percentageValue3");

let startValueBar3 = 0;
let endValueBar3 = 60;

let progress3 = setInterval(() => {
    startValueBar3++;
    circle3.style.background = `conic-gradient(rgb(248, 107, 46) ${startValueBar3 * 3.6}deg, #ededed 0deg)`;
    percentageValue3.textContent = `${startValueBar3}%`;
    if(startValueBar3 === endValueBar3){
        clearInterval(progress3);
    }
},30);

/* Circular progress bar 3 coding endss here */





