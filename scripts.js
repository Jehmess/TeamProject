// Deep sea
function deepSea(){
    let element = document.getElementById('banner')
    element.classList.toggle('darkMode');
    let element2 = document.getElementById('body')
    element2.classList.toggle('body2');
    let element3 = document.getElementById('topHead')
    element3.classList.toggle('topHead2');
    let element4 = document.getElementById('footer')
    element4.classList.toggle('footer2');

    let element5 = document.getElementById('navBar')
    element5.classList.toggle("navBar2");
    // TODO Only Grabs one ID
    if(document.body.classList.contains('body2')){
        localStorage.setItem('websiteTheme', "darkmode");
    } else{
        localStorage.setItem('websiteTheme', 'default');
    }
};
function themeFinder(){
    var theme = localStorage.getItem('websiteTheme');
    if(theme != null){
        document.body.classList.remove('default', '')
    }
}

// TODO LOCAL STORAGE COOKIES
// if dark-mode = true







