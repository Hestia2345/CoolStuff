function changeBGColor() {
    var x = document.querySelector('h1');
    x.classList.add('beagoodwat');
    x.classList.remove('normal');
    setTimeout(function(){
        x.classList.add('normal');
        x.classList.remove('beagoodwat');
    }, 1800);
}

// const rand = Math.floor(Math.random() * 10) + 1;
// document.getElementById('olleh').innerHTML = rand