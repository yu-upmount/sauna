function hamburger(){
    document.getElementById('flexnav').classList.toggle('flexnav-open');

}
document.getElementById('menu-bottun').addEventListener('click',function(){
    hamburger();
});
