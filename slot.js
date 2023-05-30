
const promt = require("prompt-sync")();

const ROWS =3;
const COLs =3;

const SYMBOLS_COUNT = {
A:2,
B:4,
C:6,
D:8

}

const SYMBOLS_VALUES = {
   A:5,
   B:4,
   C:3,
   D:2
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

const spin = ()=>{
   const symbols = [];
   for( const [symbol,count ] of Object.entries(SYMBOLS_COUNT)){
      console.log(symbol, count)
      for (let i = 0; i < count; i++){
         symbols.push(symbol);
         const selectedSymbols

      }

   }

  const reels = [[],[],[]];
  for (let i = 0;i < COLS ; i++){
   const reelSymbols = [...symbols];
   for (let j = 0; j  < ROWS; j++)

  }
};


spin();
let balance = deposit();
const numbersOfLines = getNumberOfLines();
const bet = getBet(balance,numbersOfLines);

