const dateToday = new Date();
document.getElementById('btn-noakhali').addEventListener('click',function(event){
    event.preventDefault();
    const addAmount = getInputFieldValueById('input-noakhali');
    const noakhaliAmount = getInnerTextById('noakhali-amount');
    const totalAmount = getInnerTextById('total-current-balance');
    const newNoakhali = noakhaliAmount + addAmount;
    const newTotal = totalAmount - addAmount;
    if(addAmount > 0 && isNaN(addAmount)===false){
        document.getElementById('noakhali-amount').innerText = newNoakhali;
        document.getElementById('total-current-balance').innerText = newTotal;
        const history = document.createElement('div');
        history.classList.add('m-10');
        history.innerHTML = `
        <h3 class="font-bold text-center">${addAmount} Taka donated for Noakhali-Flood, Bangladesh</h3>
        <p class="text-center">Date: ${dateToday}</p>`
        document.getElementById('history').appendChild(history);
    }
    else{alert('invalid input')}
});

document.getElementById('btn-feni').addEventListener('click',function(event){
    event.preventDefault();
    const addAmount = getInputFieldValueById('input-feni');
    const noakhaliAmount = getInnerTextById('feni-amount');
    const totalAmount = getInnerTextById('total-current-balance');
    const newNoakhali = noakhaliAmount + addAmount;
    const newTotal = totalAmount - addAmount;
    if(addAmount > 0 && isNaN(addAmount)===false){
        document.getElementById('feni-amount').innerText = newNoakhali;
        document.getElementById('total-current-balance').innerText = newTotal;
        const history = document.createElement('div');
        history.classList.add('m-10');
        history.innerHTML = `
        <h3 class="font-bold text-center">${addAmount} Taka donated for Feni-Flood, Bangladesh</h3>
        <p class="text-center">Date: ${dateToday}</p>`
        document.getElementById('history').appendChild(history);
    }
    else{alert('invalid input')}
});

document.getElementById('btn-quota').addEventListener('click',function(event){
    event.preventDefault();
    const addAmount = getInputFieldValueById('input-quota');
    const noakhaliAmount = getInnerTextById('quota-amount');
    const totalAmount = getInnerTextById('total-current-balance');
    const newNoakhali = noakhaliAmount + addAmount;
    const newTotal = totalAmount - addAmount;
    if(addAmount > 0 && isNaN(addAmount)===false){
        document.getElementById('quota-amount').innerText = newNoakhali;
        document.getElementById('total-current-balance').innerText = newTotal;
        const history = document.createElement('div');
        history.classList.add('m-10');
        history.innerHTML = `
        <h3 class="font-bold text-center">${addAmount} Taka donated for Injured Students in Quota Movement, Bangladesh</h3>
        <p class="text-center">Date: ${dateToday}</p>`
        document.getElementById('history').appendChild(history);
    }
    else {alert('invalid input')}
});
// history and donate button
document.getElementById('btn-history').addEventListener('click',function(){
    showSection('history');
    hideSection('cards');
    const donate = document.getElementById('btn-donate');
    donate.style.backgroundColor = 'lightgray'
    const history = document.getElementById('btn-history');
    history.style.backgroundColor = '#B4F461'
})
document.getElementById('btn-donate').addEventListener('click',function(){
    hideSection('history');
    showSection('cards');
    const history = document.getElementById('btn-history');
    history.style.backgroundColor = 'lightgray'
    const donate = document.getElementById('btn-donate');
    donate.style.backgroundColor = '#B4F461'
});

