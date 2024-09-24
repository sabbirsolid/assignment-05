// function for extracting amount of money
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    // const inputNumber = parseFloat(inputValue);
    // return inputNumber;
    return inputValue;
}

function getInnerTextById(id){
    const text = document.getElementById(id).innerText;
    const textToNumber = parseFloat(text);
    return textToNumber;
}
// time
const dateToday = new Date();
//for calculating and implementing the money

// function for showing and hiding class
function showSection(id){
    document.getElementById(id).classList.remove('hidden');
}
function hideSection(id){
    document.getElementById(id).classList.add('hidden');
}

tailwind.config = {
    theme: {
      extend: {
        colors: {
          btnPrimary: '#B4F461',
          navbgColor: '#F9F7F3'
        }
      }
    }
  }
