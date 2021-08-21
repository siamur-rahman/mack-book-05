function extraMemoryCost(Cost, memoryCost) {
   const costForMemory = document.getElementById(Cost + '-extra-cost');
   let costForMemoryText = costForMemory.innerText;

   if (memoryCost == true) { costForMemoryText = parseInt(00); }
   else if (memoryCost == false) { costForMemoryText = parseInt(180); }
   else if (memoryCost == '512-SSD') { costForMemoryText = 100; }
   else if (memoryCost == 'Aug-21') { costForMemoryText = 20; }

   costForMemory.innerText = costForMemoryText;
   calculation();
}
// calculation total prices with function
function calculationFunction(update) {
   const updateCost = document.getElementById(update + '-extra-cost');
   const extraCost = updateCost.innerText;
   const extraCostNumber = parseInt(extraCost);
   return extraCostNumber;
}
function calculation() {
   // // prices...
   const bestPrice = document.getElementById('best-price');
   const bestPriceText = bestPrice.innerText;
   const bestPriceTextNumber = parseInt(bestPriceText);

   const extraCostForMemory = calculationFunction('memory');
   const extraCostForStorage = calculationFunction('storage');
   const extraCostForDelivery = calculationFunction('delivery');

   // calculation total prices
   const totalCost = document.getElementById('total-extra-cost');
   totalCost.innerText = bestPriceTextNumber + extraCostForStorage + extraCostForDelivery + extraCostForMemory;

   // out area total
   const totalCostAnother = document.getElementById('discount-text');
   totalCostAnother.innerText = bestPriceTextNumber + extraCostForStorage + extraCostForDelivery + extraCostForMemory;
   return totalCost.innerText;
}
/////////////// MEMORY///////////////
document.getElementById('8GB-btn').addEventListener('click', function () {
   extraMemoryCost('memory', true);
})
document.getElementById('16GB-btn').addEventListener('click', function () {
   extraMemoryCost('memory', false)
})
///////////////// STORAGE ///////////////
document.getElementById('256GB-btn').addEventListener('click', function () {
   extraMemoryCost('storage', true);
})
document.getElementById('512GB-btn').addEventListener('click', function () {
   extraMemoryCost('storage', '512-SSD');
})
document.getElementById('1TB-btn').addEventListener('click', function () {
   extraMemoryCost('storage', false);
})
//////////////DELIVERY ///////////
document.getElementById('Aug-25-btn').addEventListener('click', function () {
   extraMemoryCost('delivery', true);
})
document.getElementById('Aug-21-btn').addEventListener('click', function () {
   extraMemoryCost('delivery', 'Aug-21');
})
///////////////// discount part/////////////// 
document.getElementById('apply-btn').addEventListener('click', function () {
   const inputText = document.getElementById('input-text');
   const inputInnerText = inputText.value;

   const discount = document.getElementById('discount-text');

   if (inputInnerText == 'stevekaku') {
      const totalCost = calculation();
      const totalCostNumber = parseInt(totalCost);

      const discounted = totalCost / 100;
      const discountPrice = discounted * 20;

      discount.innerText = totalCostNumber - discountPrice;
      inputText.value = '';
   }
   else {
      inputText.value = '';
   }
})

