function changeBGColor() {
    var x = document.querySelector('h1');
    x.classList.add('beagoodwat');
    x.classList.remove('normal');
    setTimeout(function(){
        x.classList.add('ufotang');
        x.classList.remove('beagoodwat');
    }, 1000);
    setTimeout(function(){
        x.classList.add('normal');
        x.classList.remove('ufotang');
    }, 3000);
}