// 1 - Declare an empty array;

// let emptyArray = [];


// 2 - Declare an array with more than 5 number of elements

// let arrayWithNumbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(arrayWithNumbers);

// 3 - Find the length of your array

// let arrayWithNumbers = [1, 2, 3, 4, 5, 6, 7];
// let arrayLenght=arrayWithNumbers.length;
// console.log("The lenght of your array is : " + arrayLenght);


// 4 - Get the first item, the middle item and the last item of the array

//    let arrayWithNumbers = [1, 2, 3, 4, 5, 6, 7];
//    let firstItem=arrayWithNumbers[0];
//    let middleItemIndex=Math.floor(arrayWithNumbers.length/2);
//    let middleItem=arrayWithNumbers[middleItemIndex];
//    let lastItem=arrayWithNumbers[arrayWithNumbers.length-1];

//    console.log("first item is: " + firstItem);
//    console.log("middle item is: " + middleItem);
//    console.log("last item is: " + lastItem);


// 5 - Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

    //   let mixedDataType=[5,true,7,"togo","togusiii",13,39];
    //   let arrayLength=mixedDataType.length;
    //   console.log(arrayLength);




// 6 - Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

    //   let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];





// 7 - Print the array using console.log()
     
    //  let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
    //  console.log(itCompanies);



// 8 - Print the number of companies in the array


//    let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
//    let numberOfCompanies=itCompanies.length;
//    console.log(numberOfCompanies);




// 9 - Print the first company, middle and last company

//    let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
//    let firstItem=itCompanies[0];
//    let middleItemIndex=Math.floor(itCompanies.length/2);
//    let middleItem=itCompanies[middleItemIndex];
//    let lastItem=itCompanies[itCompanies.length-1];

//    console.log("first item is: " + firstItem);
//    console.log("middle item is: " + middleItem);
//    console.log("last item is: " + lastItem);


// 10 - Print out each company

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];

// console.log("List of IT companies:");

// for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i]);
// }


// 11 - Change each company name to uppercase one by one and print them out

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];

// console.log("List of IT companies in uppercase:");

// for (let i = 0; i < itCompanies.length; i++) {
//     let uppercaseCompany = itCompanies[i].toUpperCase();
//     console.log(uppercaseCompany);

// }

// 12 - Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];

// console.log(itCompanies + " are big IT companies");



// 13 - Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// let searchCompany = "Google";
// if (itCompanies.includes(searchCompany)) {
//     console.log(searchCompany + ' exists in the list of IT companies.');
// } else {
//     console.log(searchCompany + ' is not found in the list of IT companies.');
// }

// 14 Filter out companies which have more than one 'o' without the filter method

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// let companiesWithTwoO = [];

// for (let i = 0; i < itCompanies.length; i++) {
//     let company = itCompanies[i];
//     let oCount = 0;

//     for (let char of company) {
//         if (char.toLowerCase() === 'o') {
//             oCount++;
//         }
//     }
//     if (oCount === 2) {
//         companiesWithTwoO.push(company);
//     }
// }
// console.log("Companies with two 'o':", companiesWithTwoO);


// 15 - Sort the array using sort() method

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// console.log("Sorted IT companies:", itCompanies.sort());

// 16 - Reverse the array using reverse() method

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// console.log(itCompanies.reverse());


// 17 - Slice out the first 3 companies from the array

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// console.log("First three companies: "+itCompanies.slice(0,3));


// 18 - Slice out the last 3 companies from the array

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// console.log("First three companies: "+itCompanies.slice(4,7));

// 19 - Slice out the middle IT company or companies from the array

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// let middleItemIndex=Math.floor(itCompanies.length/2);
// let middleItem=itCompanies[middleItemIndex];
// console.log(middleItem);

// 20 - Remove the first IT company from the array

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// itCompanies.shift();
// console.log("IT companies after removing the first one:", itCompanies);

//21 - Remove the middle IT company or companies from the array

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// let middleIndex = Math.floor(itCompanies.length / 2);
// if (itCompanies.length % 2 === 0) {
//     itCompanies.splice(middleIndex - 1, 2);
// } else {
//     itCompanies.splice(middleIndex, 1);
// }
// console.log(itCompanies);



// 22 - Remove the last IT company from the array

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// itCompanies.pop();
// console.log("IT companies after removing the first one:", itCompanies);

// 23 - Remove all IT companies

// let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// itCompanies.splice(0, itCompanies.length);
// console.log( itCompanies);


// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js 
// and store the webTechs array in to this file. Access both file in main.js file

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// 24 - const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added

// const shoppingCart = ["Milk", "Coffee", "Tea","Honey"];
// if (!shoppingCart.includes("Meat")) {
//     shoppingCart.unshift("Meat");
// }
// console.log(shoppingCart);

// 25 - add Sugar at the end of you shopping cart if it has not been already added

// const shoppingCart = ["Milk", "Coffee", "Tea","Honey"];
// if (!shoppingCart.includes("Sugar")) {
//     shoppingCart.push("Sugar");
// }
// console.log(shoppingCart);

// 26 - remove 'Honey' if you are allergic to honey

// const shoppingCart = ["Milk", "Coffee", "Tea","Honey"];
// let allergicToHoney = false;
// let inputAnswer=prompt("Are you allergic to honey? (Type 'yes' or 'no' :) <3)");
// if (inputAnswer === 'yes') {
//     allergicToHoney = true;
// }
// if (allergicToHoney) {
//     const indexToRemove = shoppingCart.indexOf('Honey');
//     if (indexToRemove !== -1) {
//         shoppingCart.splice(indexToRemove, 1);
//     }
// }
// console.log(shoppingCart);



// 27 - modify Tea to 'Green Tea'


// const shoppingCart = ["Milk", "Coffee", "Tea","Honey"];
// const newShoppingCart = shoppingCart.map(item => (item === 'Tea' ? 'Green Tea' : item));

// console.log(newShoppingCart);

// 28 - In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
//      If it does not exist add to the countries list.

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
    
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ];
//   const ETCountry = 'Ethiopia';
//   let isEthiopiaExists = countries.includes(ETCountry);
//   if (isEthiopiaExists===true) {
//     const updatedCountries = countries.map(country =>
//         country === 'Ethiopia' ? country.toUpperCase() : country);
      
//       console.log("Updated countries list:", updatedCountries);
// }
// if (!isEthiopiaExists) {
//     countries.push(ETCountry);
//     console.log("Ethiopia added to the countries list." + countries);
// }


 






// 29 - In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
//      If it does not exist add Sass to the array and print the array.

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
  
// ]
// const web = "Sass";
//   let isSassexist = webTechs.includes(web);
//   if (isSassexist===true) { 
//       console.log("Sass is a CSS preprocess");
// }
// if (!isSassexist) {
//     webTechs.push(web);
//     console.log(webTechs);
// }

