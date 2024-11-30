//  First way
let singlePhone = 119.95;
let taxPerPhone = 5.9975;
let bundleOfPhones = 30;

let totalAmount = bundleOfPhones * (singlePhone + taxPerPhone);
console.log(totalAmount);
// Second Way
let phonePrice = 119.95;
let phoneTax = phonePrice * 0.05;
let bulkOfPhones = 30;

let fullAmount = bulkOfPhones * (phonePrice + phoneTax);
console.log(fullAmount);
