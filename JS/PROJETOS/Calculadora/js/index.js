import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping} from "./keyHandlers.js"
import switchTheme from "./switchTheme.js"
const input = document.getElementById('input')

document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', handleButtonPress)
})
document.getElementById('clear').addEventListener('click', handleClearButton)
input.addEventListener('keydown', handleTyping)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', switchTheme)