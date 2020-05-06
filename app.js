var hr = document.querySelector('.hours');
var min = document.querySelector('.minutes');
var sec = document.querySelector('.seconds');
var dt = document.querySelector('.date');

//Convert '5' to '05'
var doubleDig = num => {
    if(num < 10)
        return '0'+num;
    else
        return num;
};

//get current time and date and inject into html
var updateTime = () =>{
    const date = new Date();
    hr.innerHTML = doubleDig(date.getHours());
    min.innerHTML = doubleDig(date.getMinutes());
    sec.innerHTML = doubleDig(date.getSeconds());
    dt.innerHTML = doubleDig(date.getDate()) + '/'+  doubleDig((date.getMonth()+1)) + '/' + doubleDig(date.getFullYear());

};

//Execute every 1 second
setInterval(updateTime, 1000);