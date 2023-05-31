
const promt = require("prompt-sync")();

const ROWS =3;
const COLS =3;

const SYMBOLS_COUNT = {
A: 2,
B: 4,
C: 6,
D: 8,

}

const SYMBOLS_VALUES = {
   A: 5,
   B: 4,
   C: 3,
   D: 2,
}

const deposit = () => {

  while (true) {
   const depositAmount  = promt("Enter a deposit Amount:  ");
   const numberDepositAmount = parseFloat(depositAmount);

   if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {

      console.log("Invalid deposit amount, try again.");

   }else {
      return numberDepositAmount;
   }
  }
};

const getNumberOfLines = () => {
   while (true) {
      const lines  = promt("Enter numbersof lines to bet on (1-3):  ");
      const numberOfLines = parseFloat( lines);
   
      if (isNaN(numberOfLines ) || numberOfLines <= 0 || numberOfLines > 3) {
   
         console.log("Invalid number of line, please try again.");
   
      }   else{
         return numberOfLines;
      }
     }

}

const getBet = (balance, lines) => {
   while (true) {
      const bet  = promt("Enter the betper line  ");
      const numberBet = parseFloat( bet);
   
      if (isNaN(numberBet ) || numberBet <= 0 || numberBet > balance / lines) {
   
         console.log("Invalid Bet,Try Again.");
   
      }   else{
         return numberBet;
      }
     }
}

const spin = () => {
   const symbols = [];
   for( const [symbol,count ] of Object.entries(SYMBOLS_COUNT)){
      console.log(symbol, count)
      for (let i = 0; i < count; i++){
         symbols.push(symbol);
        

      }

   }

  const reels = [];
  for (let i = 0;i < COLS ; i++) {
   reels.push([]);
   const reelSymbols = [...symbols];
   for (let j = 0; j  < ROWS; j++){
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbols = reelSymbols[randomIndex];
      reels[i].push(selectedSymbols);
      reelSymbols.splice(randomIndex,1);
   }
  }

  return reels;
};

const transpose = (reels) => {
   const rows = [];
   for (let i = 0; i <ROWS; i++) {
      rows.push([]);
      for  (let j = 0; j <  COLS; j++) {
         rows [i].push(reels[j][i])
      }
   }
   return rows 
};

const printROWS = (rows) => {
   for (const row of rows ) {
      let rowString = ""; 
      for (const [i,symbol] of row.entries()){
         rowString +=symbol
         if (i != row.length - 1){
            rowString += " | "
         }
      }
      console.log(rowString)
   }
};

const getWinnings = (rows,bet, lines) => {
   let Winnings =0;

   for (let row = 0; row < lines; row++){
      const symbols = rows [row];
      let allSame = true;
      
      for (const symbol of symbols) {
         if (symbol != symbols[0]) {
            allSame = false;

         }
      }


      if (allSame){
         Winnings += bet *  SYMBOLS_VALUES[symbols[0]]
      }
   }

   return Winnings;
}

const game = () =>{
let balance = deposit();
while (true){

console.log ("You have a balance of UGX" + balance);
const numbersOfLines = getNumberOfLines();
const bet = getBet(balance,numbersOfLines);
balance -= bet * numbersOfLines;
const reels = spin();
const rows = transpose(reels);
printROWS(rows);
const Winnings = getWinnings(rows,bet, numbersOfLines)
balance += Winnings;
console.log("You won,UGX" + Winnings.toString());

if (balance <= 0) {
   console.log ("You run out of money!")
   break;
}

const playAgain = promt(" Do you wantto play again (y/n) ?");
if (playAgain != "y") break;
}
};
game();

