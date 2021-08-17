function getInputValue() {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);

    // clear deposite input field
    depositeInput.value = '';
    
    return depositeAmount;
}

// depostite button handeler 
document.getElementById('deposite-button').addEventListener('click', function () {
    /*     const depositeInput = document.getElementById('deposite-input');
        const depositeAmountText = depositeInput.value;
        const depositeAmount = parseFloat(depositeAmountText); */

    const depositeAmount = getInputValue();


    // get current deposit 
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = previousDepositeTotal + depositeAmount;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanaceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanaceTotal + depositeAmount;
    balanceTotal.innerText = newBalanceTotal;

})

// withdraw button handeler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanaceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanaceTotal - withdrawAmount;


    // clear withdraw input field 
    withdrawInput.value = '';
})