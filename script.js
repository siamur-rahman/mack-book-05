// memory ....
function extraMemoryCost(Cost, memoryCost) {
   const costForMemory = document.getElementById(Cost + '-extra-cost');
   let costForMemoryText = costForMemory.innerText;

   if (memoryCost == true) { console.log('true'); costForMemoryText = parseInt(00); }
   else if (memoryCost == false) { console.log('false'); costForMemoryText = parseInt(180); }
   else if (memoryCost == '512-SSD') { console.log('nothing'); costForMemoryText = 100; }
   else if (memoryCost == 'Aug-21') { console.log('nothing'); costForMemoryText = 20; }

   costForMemory.innerText = costForMemoryText;

   // // best price
   const bestPrice = document.getElementById('best-price');
   const bestPriceText = bestPrice.innerText;
   const bestPriceTextNumber = parseInt(bestPriceText);
   // //memory
   const extraMemoryCosst = document.getElementById('memory-extra-cost');
   const extraMemoryCosstText = extraMemoryCosst.innerText;
   const extraMemoryCosstTextNumber = parseInt(extraMemoryCosstText);
   // //storage
   const extrastorageCosst = document.getElementById('storage-extra-cost');
   const extrastorageCosstText = extrastorageCosst.innerText;
   const extrastorageCosstTextNumber = parseInt(extrastorageCosstText);
   // //delivery
   const extradeliveryCosst = document.getElementById('delivery-extra-cost');
   const extradeliveryCosstText = extradeliveryCosst.innerText;
   const extrasdeliveryCosstTextNumber = parseInt(extradeliveryCosstText);

   // update total cost for extra memory
   const totalCost = document.getElementById('total-extra-cost');
   totalCost.innerText = bestPriceTextNumber + extrastorageCosstTextNumber + extrasdeliveryCosstTextNumber + extraMemoryCosstTextNumber;
}


/////////////// MEMORY///////////////

document.getElementById('8GB-btn').addEventListener('click', function () {
   extraMemoryCost('memory', true);

})
document.getElementById('16GB-btn').addEventListener('click', function () {
   extraMemoryCost('memory', false);

})
///////////////// STORAGE ///////////////
document.getElementById('256GB-btn').addEventListener('click', function () {
   extraMemoryCost('storage', true);

})
document.getElementById('512GB-btn').addEventListener('click', function btn() {
   extraMemoryCost('storage', '512-SSD');
})
document.getElementById('1TB-btn').addEventListener('click', function btn() {
   extraMemoryCost('storage', false);
})
//////////////DELIVERY ///////////
document.getElementById('Aug-25-btn').addEventListener('click', function btn() {
   extraMemoryCost('delivery', true);

})

document.getElementById('Aug-21-btn').addEventListener('click', function btn() {
   extraMemoryCost('delivery', 'Aug-21');
})
