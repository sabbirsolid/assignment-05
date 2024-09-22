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
    }
    else{alert('invalid input')}
});

document.getElementById()