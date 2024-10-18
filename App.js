// Dark mode
const html = document.getElementsByTagName('html')[0]
const themeButton = document.getElementById('theme')

function toggleTheme(theme) {
    if (html.dataset.theme != 'dark') {
        html.dataset.theme = theme
        themeButton.innerText = "Light Mode"
    } else {
        html.dataset.theme = 'light'
        themeButton.innerText = "Dark Mode"
    }
}
