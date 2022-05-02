function displayInOut1(){
    var vid = document.getElementById("vids1");
    if (vid.classList[0] == 'hidden') {
        vid.classList.add('videoflex');
        vid.classList.remove("hidden");
       pageScroll();
       return
    }vid.classList.remove("videoflex");
    vid.classList.add("hidden")
    return;
}
function displayInOut2(){
    var vid = document.getElementById("vids2");
    if (vid.classList[0] == 'hidden') {
        vid.classList.add('videoflex');
        vid.classList.remove("hidden");
       pageScroll();
       return
    }vid.classList.remove("videoflex");
    vid.classList.add("hidden")
    return;
}

function displayInOut3(){
    var vid = document.getElementById("vids3");
    if (vid.classList[0] == 'hidden') {
        vid.classList.add('videogrids');
        vid.classList.remove("hidden");
       pageScroll();
       return
    }vid.classList.remove("videogrids");
    vid.classList.add("hidden")
    return;
}






async function pageScroll() {
    window.scrollBy(1, 100); // horizontal and vertical scroll increments
    scrolldelay = await setTimeout(pageScroll,1);
    clearTimeout(scrolldelay);
    
}

async function scrollEnd(){
    window.scrollBy(100, 10000); // horizontal and vertical scroll increments
    scrolldelay = await setTimeout(ScrollEnd,1);
    clearTimeout(scrolldelay);
    
}

