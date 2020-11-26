// Dark Mode
// Local Storage saves the cookie in browser in local history
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#darkModeToggle');

// Test
// darkModeToggle.addEventListener('click', () => {
//     console.log('test');
// });

// is dark mode enabled?
// if enables turn it off
// if disabled turn it on 

const enableDarkMode = () => {
    document.body.classList.add('darkMode');

    localStorage.setItem('darkMode', 'DarkMode: Enabled')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkMode');

    localStorage.setItem('darkMode', 'DarkMode: Disabled')
}


darkModeToggle.addEventListener('click', () => {
    
});
