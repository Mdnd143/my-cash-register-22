const billAmount=Number(document.querySelector("#bill-amount").value);
const cashGiven=Number(document.querySelector("#cash-given").value);
const checkBtn=document.querySelector("#check-button");
const outputBox=document.querySelector("#output");
const availableNotes=[2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes");
// console.log(billAmount,cashGiven);

function calculateChange(AmountToBeReturned){
    for(let i=0;i < availableNotes.length; i++){
        const numberOfNotes= Math.trunc(Number(AmountToBeReturned/availableNotes[i]));
        AmountToBeReturned=AmountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;


    }
    
}

function validateBillAndCashAmount(){
    const billAmount=Number(document.querySelector("#bill-amount").value);
    const cashGiven=Number(document.querySelector("#cash-given").value);
    if(billAmount > 0){
        calcChange(billAmount,cashGiven);
    }

else{
    outputBox.innerText="The Bill Amount should be greater than zero";
}
}
function calcChange(billAmount,cashGiven){
    
        if(cashGiven > billAmount){
            const AmountToBeReturned=cashGiven-billAmount;
            calculateChange(AmountToBeReturned);

        }
    
        else{
            outputBox.innerText="Do you wanna wash plates ? "
        }
    

}

checkBtn.addEventListener("click",validateBillAndCashAmount);
