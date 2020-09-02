// Test Text
console.log("Hallo Console :D")
// Variables
var changeText;
var changeColor;
var refreshPage;
var changeStringCheck;
var colorCheck;
const colorRed = 'red';
const testButton = document.querySelector('.button');;
const changeTextCheckBox = document.getElementById('changeText');
const changeColorCheckBox = document.getElementById('changeColor');
const refreshPageCheckBox = document.getElementById('refresh');
const changeStringBox = document.getElementById('changeString')
const changeStringCheckBox = document.getElementById('changeStringCheckBox')
const hiText = document.getElementById('hiText');
const colorCheckBox = document.getElementById('colorCheckBox')
const colorStringBox = document.getElementById('colorStringBox')
// Code
testButton.addEventListener('click', button => {
  console.log("Button Clicked")
  changeText = changeTextCheckBox.checked;
  changeColour = changeColorCheckBox.checked;
  refreshPage = refreshPageCheckBox.checked;
  changeStringCheck = changeStringCheckBox.checked;
  colorCheck = colorCheckBox.checked;
  updateDisplay();
});
// Functions
function updateDisplay(){
  if(changeText){
    changeTextOnSite(hiText, 'See ya!')
  }else if(changeStringCheck){
    var customText = changeStringBox.value;
    changeTextOnSite(hiText, customText)
  }
  if(changeColour){
    changeTextColorOnSite(hiText, colorRed)
  }else if(colorCheck){
    var customColor = colorStringBox.value;
    changeTextColorOnSite(hiText, customColor)
  }
  if(refreshPage){
    reloadPage()
  }
}
function changeTextOnSite(object, text){
  console.log(`Changing "${object.innerHTML}" to ${text}`)
  object.innerHTML = text
}
function changeTextColorOnSite(object, color){
  console.log(`Change "${hiText.innerHTML}" to ${colorRed}`)
  if(object && object.style) {
    object.style.color = color;
}
}
function reloadPage(){
  console.log('Refreshing Page in 3 Seconds')
  setTimeout(() => {  console.log('Refresh');  location.reload(); }, 3000); 
}