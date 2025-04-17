const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const hoverSign=document.querySelector(".hover-sign");

const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
    
    video.addEventListener("mouseenter", () => {
        video.muted = true;
        video.play();
        hoverSign.classList.add("active");
    });
    video.addEventListener("mouseleave",()=>{
        video.pause();
        video.currentTime="0";
        hoverSign.classList.remove("active");
    });
});

//Sidebar

const sideBar=document.querySelector(".sidebar");
const menu=document.querySelector(".menu-bar");
const closed=document.querySelector(".close-icon");

menu.addEventListener("click",()=>{
    sideBar.classList.add("open-sidebar");
    sideBar.classList.remove("close-sidebar");
});

closed.addEventListener("click",()=>{
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});