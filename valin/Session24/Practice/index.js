const num1Element = document.getElementById('n1');
const num2Element = document.getElementById('n2');
const num3Element = document.getElementById('n3');
const num4Element = document.getElementById('n4');
const num5Element = document.getElementById('n5');
const num6Element = document.getElementById('n6');
const num7Element = document.getElementById('n7');
const num8Element = document.getElementById('n8');
const num9Element= document.getElementById('n9');
const num0Element= document.getElementById('n0');
const dotElement= document.getElementById('dotBtn');

const clearElement = document.getElementById('clearBtn');
const percentageElement = document.getElementById('percentBtn');
const powerElement = document.getElementById('powerBtn');
const divideElement = document.getElementById('divideBtn');
const multiplierElement = document.getElementById('multiplierBtn');
const subtractionElement = document.getElementById('subtractionBtn');
const addictionElement = document.getElementById('addictionBtn');
const equalElement = document.getElementById('equalBtn');
const displayElement = document.querySelector('.calcDisplay');
const displayContainerElement = document.querySelector('.calcDisplayContainer');



let accumulator = 0;
let total = 0;
let operation = '';

// if (displayElement.innerHTML.length > 18) {
//    displayElement.style.fontSize = '20px';
// }


   num1Element.addEventListener('click', function() {
      const num1 = num1Element.innerHTML;
      deleteZeros();
      displayElement.innerHTML = displayElement.innerHTML + num1;
   })

   num2Element.addEventListener('click', function() {
      const num2 = num2Element.innerHTML;
      deleteZeros();
      displayElement.innerHTML = displayElement.innerHTML + num2;
   })

   num3Element.addEventListener('click', function() {
      const num3 = num3Element.innerHTML;
      deleteZeros();
      displayElement.innerHTML = displayElement.innerHTML + num3;
   })

   num4Element.addEventListener('click', function() {
      const num4 = num4Element.innerHTML;
      deleteZeros();
      displayElement.innerHTML = displayElement.innerHTML + num4;
   })

   num5Element.addEventListener('click', function() {
      const num5 = num5Element.innerHTML;
      deleteZeros();
      displayElement.innerHTML = displayElement.innerHTML + num5;
   })

   num6Element.addEventListener('click', function() {
      const num6 = num6Element.innerHTML;
      deleteZeros();
      displayElement.innerHTML = displayElement.innerHTML + num6;
   })

   num7Element.addEventListener('click', function() {
      const num7 = num7Element.innerHTML;
      deleteZeros();
      displayElement.innerHTML = displayElement.innerHTML + num7;
   })

   num8Element.addEventListener('click', function() {
      const num8 = num8Element.innerHTML;
      deleteZeros();
      displayElement.innerHTML = displayElement.innerHTML + num8;
   })

   num9Element.addEventListener('click', function() {
      const num9 = num9Element.innerHTML;
      deleteZeros();
      displayElement.innerHTML = displayElement.innerHTML + num9;
   })

   num0Element.addEventListener('click', function() {
      const num0 = num0Element.innerHTML;
      deleteZeros();
      displayElement.innerHTML = displayElement.innerHTML + num0;
   })

   dotElement.addEventListener('click', function() {
      const dot = dotElement.innerHTML;
      displayElement.innerHTML = displayElement.innerHTML + dot;
   })

   clearElement.addEventListener('click', function() {
      displayElement.innerHTML = '0';
      total = 0;
      accumulator = 0;
      operation = 0;
   })

   percentageElement.addEventListener('click', function() {
      operation = 1;
      accumulatorValue();
   })

   powerElement.addEventListener('click', function() {
         total = displayElement.innerHTML * displayElement.innerHTML;
         displayElement.innerHTML = total;
    
   })

   divideElement.addEventListener('click', function() {
      operation = 2;
      accumulatorValue();
   })

   multiplierElement.addEventListener('click', function() {
      operation = 3;
      accumulatorValue();
   })

   subtractionElement.addEventListener('click', function() {
      operation = 4;
      accumulatorValue();
   })

   addictionElement.addEventListener('click', function() {
      operation = 5;
      accumulatorValue();
   })

   equalElement.addEventListener('click', function() {
      if (operation === 1) {
         total = (accumulator * displayElement.innerHTML) / 100;
      } else if (operation === 2) {
         total = accumulator / displayElement.innerHTML;
      } else if (operation === 3) {
         total = accumulator * displayElement.innerHTML;
      } else if (operation === 4) {
         total = accumulator - displayElement.innerHTML;
      } else if (operation === 5) {
         total = Number(accumulator) + Number(displayElement.innerHTML);
      }

      displayElement.innerHTML = total;
      operation = 0;
      accumulator = 0;
   })

   function deleteZeros() {
      if (displayElement.innerHTML[0] === '0' && displayElement.innerHTML[1] !== '.') {
         displayElement.innerHTML = '';
      }
   }

   function accumulatorValue() {
      total = 0;
      if (displayElement.innerHTML !== '0') {
         accumulator = displayElement.innerHTML;
         displayElement.innerHTML = '0';
      }
   }
