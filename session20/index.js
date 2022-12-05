// scope
let testLet = '1let'
const testConst='1const'
var testVar='1var'


if(true)
{
    let testLet='2let';
    const testConst='2sconst';
     var testVar='2svar';
}


let global='unchanged'
function addTwo(number){
   global='changed';
    console.log(globalLet)
    return number+2;
}
 global='changed'
 let ScopeTest='la nivel fisier'
 function addFive(number){
    ScopeTest='la nivel functie';
    if(number<50)
    {
        ScopeTest='la nivel interior functie';
    }
    return number+5;

 }
 addFive(52)
//console.log(ScopeTest)
