
let interval = setInterval(time, 1000);

function time() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let clockDate = new Date();
    let date = clockDate.getDate();
    let month = clockDate.getMonth();
    let year = clockDate.getFullYear();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;


    if (seconds < 10) {
        seconds = `0${seconds}`
    } else {
        seconds = seconds;
    }

    document.getElementById("clock-time")
        .innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock-date").innerHTML = `${date}/${month}/${year}`;

}

function stopButton() {
    clearInterval(interval);
}