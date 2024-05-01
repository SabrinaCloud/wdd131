//loops.js
// myInfo = {
//     name: "Brother T",
//     photo: "images/photo.jpg",
//     favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
//     hobbies:["Reading", "Fishing", "Camping"],
//     placeLived: [
//         {
//             place: "Rexburg, ID",
//             length: "5 years",
//         },
//         {
//             place: "Ammon, ID",
//             length: "3 years",
//         },
//         {
//             place: "Sandy, UT",
//             length: "1 year",
//         },
//     ],
// };
// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favoriteFoods[0];
// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myInfo.favoriteFoods[1];
// let favoriteFood3 = document.createElement("li");
// favoriteFood3.textContent = myInfo.favoriteFoods[2];
// let favoriteFood4 = document.createElement("li");
// favoriteFood4.textContent = myInfo.favoriteFoods[3];

// document.querySelector("#favorite-foods").appendChild(favoriteFood1);
// document.querySelector("#favorite-foods").appendChild(favoriteFood2);
// document.querySelector("#favorite-foods").appendChild(favoriteFood3);
// document.querySelector("#favorite-foods").appendChild(favoriteFood4);

//with .forEach
// const foodsElement = document.querySelector('#favorite-foods');
// function createAndAppendFoodItem(food){
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
// }
// myInfo.favoriteFoods.forEach(createAndAppendFoodItem);


//with.map
// const foodsElement = document.querySelector('#favorite-foods');
// function mapFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     return favoriteFood;
// }
// function mapFoodItemSmall(food) {
//     return `<li>${food}</li>`;
// }
// const foodListElements = myInfo.favoriteFood.map(mapFoodItem);
// foodsElement.innerHTML = foodListElements.join('');

const DAY=6;
const LIMIT = 30;
let studentReport = [11,42,33,64,29,37,44];
// for loop
// for(let i=0; i<studentReport.length; i++) {
//     if (studentReport[i]<LIMIT) {
//         console.log(studentReport[i]);
//     }
// }
// while loop
// let i = 0;
// while (i<studentReport.length) {
//     if (studentReport[i]<LIMIT){
//         console.log(studentReport[i]);
//     }
//     i++;
// }
//forEach loop
// studentReport.forEach(function(item) {
//     if (item < LIMIT) {
//         console.log(item);
//     }
// });
//for...in loop
for (let i in studentReport) {
    if (studentReport[i]<LIMIT){
        console.log(studentReport[i]);
    }
}
