function displayInOut1(){
    var vid = document.getElementById("vids1");
    console.log(vid)
    if (vid.style.display == "none") {
        vid.style.display = "flex";
       pageScroll();
       return
    } return vid.style.display = "none";
}

function displayInOut2(){
    var vid = document.getElementById("vids2");
    console.log(vid)
    if (vid.style.display == "none") {
        vid.style.display = "flex";
       pageScroll();
       return
    } return vid.style.display = "none";
}
function displayInOut3(){
    var vid = document.getElementById("vids3");
    if (vid.style.display == "none") {
        vid.style.display = "grid";
       pageScroll();
       return
    } return vid.style.display = "none";
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

