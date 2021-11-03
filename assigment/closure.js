timer = null;
 var rudyTimer=(
   
 // stores ID of interval timer 
function delayMsg2() {
if (timer === null) {
timer = setInterval(rudy, 1000);
} else {
clearInterval(timer);
timer = null;
}
}());
function rudy() { // called each time the timer goes off
document.getElementById("output").innerHTML += " Rudy!";
}

document.getElementById('createAccount').addEventListener('click', createAccount);
class Account{
  constructor(type, balance){
    this.type = type;
    this.balance = balance;
  }
}
const account = []; 
function createAccount(){
    var accType = document.getElementById('accountName').value;
    var balance = document.getElementById('deposit').value;
    var accountToAdd = new Account(accType,balance);
    console.log(accType);
    account.push(accountToAdd); 
    var txt = "";
    account.forEach(acc => {
       txt+= "Account name: " + acc.type + " Balance: " + acc.balance + "\n";
    });
    document.getElementById("accounts").value = txt;
}
