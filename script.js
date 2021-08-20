

// memory ....

function extraMemoryCost(memoryCost) {
   const costForMemory = document.getElementById('extra-memory-cost')
   if (memoryCost == true) { costForMemory.innerText = 00; }
   else { costForMemory.innerText = 180; }
}

document.getElementById('8GB-btn').addEventListener('click', function () {
   extraMemoryCost(true);
})
document.getElementById('16GB-btn').addEventListener('click', function () {
   extraMemoryCost(false);
})



// storage ...

function extraStorageCost(storageCost) {
   const costForStorage = document.getElementById('extra-storage-cost')
   if (storageCost == true) { costForStorage.innerText = 00; }
   else if (storageCost == false) { costForStorage.innerText = 100; }
   else { costForStorage.innerText = 180; }
}

document.getElementById('256GB-btn').addEventListener('click', function () {
   extraStorageCost(true);

})

document.getElementById('512GB-btn').addEventListener('click', function btn() {
   extraStorageCost(false);

})
document.getElementById('1TB-btn').addEventListener('click', function btn() {
   extraStorageCost();
})


// delivery charge ...

function deliveryChargeCost(deliveryCost) {
   const costForDelivery = document.getElementById('delivery-charge-cost')
   if (deliveryCost == true) { costForDelivery.innerText = 00; }
   else { costForDelivery.innerText = 20; }
}

document.getElementById('Aug-25-btn').addEventListener('click', function btn() {
   deliveryChargeCost(true);

})
document.getElementById('Aug-21-btn').addEventListener('click', function btn() {
   deliveryChargeCost(false);

})

