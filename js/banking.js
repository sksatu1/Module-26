function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);

    // clear deposite input field
    inputField.value = '';

    return inputAmount;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanaceTotal = parseFloat(balanceTotalText);
    return previousBalanaceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanaceTotal = parseFloat(balanceTotalText); */
    const previousBalanaceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanaceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanaceTotal - amount;
    }
}

// depostite button handeler ---------------------------------------------------------------
document.getElementById('deposite-button').addEventListener('click', function () {
    /*     const depositeInput = document.getElementById('deposite-input');
        const depositeAmountText = depositeInput.value;
        const depositeAmount = parseFloat(depositeAmountText); */





    /*  // get and update deposit total
     const depositeTotal = document.getElementById('deposite-total');
     const depositeTotalText = depositeTotal.innerText;
     const previousDepositeTotal = parseFloat(depositeTotalText);
     depositeTotal.innerText = previousDepositeTotal + depositeAmount; */

    // update balance ------------------------------------------------------------------------
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanaceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanaceTotal + depositeAmount;
    balanceTotal.innerText = newBalanceTotal; */

    const depositeAmount = getInputValue('deposite-input');
    if (depositeAmount > 0) {
        updateTotalField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true);
    }


})

// withdraw button handeler -----------------------------------------------------------------
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*  const withdrawInput = document.getElementById('withdraw-input');
     const withdrawAmountText = withdrawInput.value;
     const withdrawAmount = parseFloat(withdrawAmountText); */




    // update withdraw total ----------------------------------------------------------------
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

    // update balance after withdraw --------------------------------------------------------
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanaceTotal = parseFloat(balanceTotalText);
     balanceTotal.innerText = previousBalanaceTotal - withdrawAmount; */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
})