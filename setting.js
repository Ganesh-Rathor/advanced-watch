setInterval(function(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let secound = time.getSeconds();
    let milisec = time.getMilliseconds();

    let day = time.getDay();
    let monthV = time.getMonth();
    let yearV = time.getFullYear();
    document.querySelector("#Hour").innerHTML = hour + ":";
    document.querySelector("#menute").innerHTML = minute + ":";
    document.querySelector("#secound").innerHTML = secound;
    document.querySelector(".milisec").innerHTML = "  "+ milisec;
    document.querySelector(".dayV").innerHTML =  dayName(day);
    document.querySelector(".day").innerHTML =  time.getDate()+"/";
    document.querySelector(".month").innerHTML = ( monthV+1)+"/";
    document.querySelector(".year").innerHTML =  yearV;

},10);

function dayName(day){
    switch (day) {
        case 1:
            return" Monday";
            break;
        
        case 2:
            return"Tusday";
            break;
            
        case 3:
            return" Wednesday";
            break;

        case 4:
            return" Thusday";
            break;
        case 5:
            return" Friday";
            break;
        case 6:
            return" Saterday";
            break;
        case 7:
            return" Sunday";
            break;
    }
}