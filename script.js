const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const sidebarToggle = document.getElementById("active-btn");
var active = false;

sidebarToggle.addEventListener('click',function(){

    if(active == false){
        sidebar.classList.add('active');
        content.classList.add('active');
        active = true;
    }
    else{
        sidebar.classList.remove('active');
        content.classList.remove('active');
        active = false;
    }
});