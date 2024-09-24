function amountCalculation(btn_id,input_id,amount_id,motive){
    document.getElementById(btn_id).addEventListener('click',function(event){
        event.preventDefault();
        const userInput = getInputFieldValueById(input_id);
        const currentCardAmount = getInnerTextById(amount_id);
        const totalAmount = getInnerTextById('total-current-balance');
        for(let check of userInput){
           if(isNaN(check) === true){
            alert('Invalid Input');
            document.getElementById(input_id).value = "";
            return;
           }
        }
        const addAmount = parseFloat(userInput);
        const newCardAmount = currentCardAmount + addAmount;
        const newTotal = totalAmount - addAmount;
        // console.log(addAmount, newCardAmount, newTotal);
        if(addAmount > 0){

            if(totalAmount >= addAmount){
            document.getElementById(amount_id).innerText = newCardAmount;
            document.getElementsByClassName('total-amount').innerText = newTotal;
            document.getElementById('total-current-balance').innerText = newTotal;         
            const history = document.createElement('div');
            history.classList.add('m-10');
            history.innerHTML = `
            <h3 class="font-bold text-center">${addAmount} Taka donated for ${motive}, Bangladesh</h3>
            <p class="text-center">Date: ${dateToday}</p>`
            document.getElementById('history').appendChild(history);
            modal.showModal();
            document.getElementById(input_id).value = "";
            }
            else{
                alert('Not Enough Balance');
                document.getElementById(input_id).value = "";
            }
        }
        else{alert('Invalid Input');
            document.getElementById(input_id).value = "";
        }
    });
}
amountCalculation('btn-noakhali','input-noakhali','noakhali-amount','Noakhali');
amountCalculation('btn-feni','input-feni','feni-amount','Feni');
amountCalculation('btn-quota','input-quota','quota-amount','Quota Movement');

// history and donate button
document.getElementById('btn-history').addEventListener('click',function(){
    showSection('history');
    hideSection('cards');
    document.getElementById('btn-history').style.backgroundColor = '#B4F461';
    document.getElementById('btn-donate').style.backgroundColor = 'lightgray';
})
document.getElementById('btn-donate').addEventListener('click',function(){
    hideSection('history');
    showSection('cards');
    document.getElementById('btn-history').style.backgroundColor = 'lightgray';
    document.getElementById('btn-donate').style.backgroundColor = '#B4F461';
});
// blog button home button
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = "blog.html";
});