//------------------------------ map method task 1 =>numbers convert into string------------

// const numbers = [10, 20, 30, 40];

// const arr=numbers.map((value)=>{
//     return value+"";
// });
// console.log(typeof arr==="string");

//---------------------------- task 2 Extract names------------------------------
// const users = [
//     { firstName: "Amritpal", lastName: "Singh" },
//     { firstName: "John", lastName: "Doe" },
//     { firstName: "Alice", lastName: "Johnson" }
// ];

// const firstname = users.map((value,index)=>{
//     return value.firstName;
// });

// console.log(firstname);

//------------------ task 3 Double the numbers---------------------

// const nums = [1, 3, 5, 7];

// const double = nums.map((value)=>{
//     return value*2;
// }) 

// console.log(double);

//------------------- task 4 convert to uppercase--------------------

// const words = ["hello", "world", "javascript"];

// const upper = words.map((value)=>{
//     return value.toLocaleUpperCase();
// });

// console.log(upper);

//------------------------- task 5 add discount product-------------------------
// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 20000 }
//   ];
  
//   const discountedProducts = products.map(product => ({
//     ...product, 
//     discountPrice: product.price * 0.9 // 10% discount
//   }));
  
//   console.log(discountedProducts);
 
//---------------------- task 6 find length of each of words--------------------

// const words = ["apple", "banana", "grape"];

// const len = words.map((value)=>{
//     return value.length;
// });

// console.log(len);

// --------------------task 7 ---------------------------------------
// const prices = [1000, 2500, 500];

// const format = prices.map((value)=>{
//     return "&"+value;
// });
// console.log(format);

// ------------------------task 8 Add greeting-------------------------------------
// const names = ["Amritpal", "John", "Alice"];

// const greeting = names.map((value)=>{
//     return `Hello ${value}!`;
// });
// console.log(greeting);


// -------------------------task 9 cal age-----------------------------
// const birthYears = [1998, 2000, 2005];

// const age = birthYears.map((value)=>{
//     let curYear = 2025;
//     return curYear-value;
// });
// console.log(age);

// --------------------------------task 10 get letters after @ -------------------------------
// const emails = ["user1@gmail.com", "user2@yahoo.com", "user3@outlook.com"];

// const domains = emails.map((value)=>{
//     return value.slice(6);
// });
// console.log(domains);



// --------------------------------Reduce Method sum numbers -------------------------------

// const numbers = [10, 20, 30, 40];

// const sum = numbers.reduce((acc,curr)=>{
//     return acc+curr;
// },0);

// console.log(sum);

// ---------------------------find the max num-------------------------------

// const numbers = [5, 12, 8, 30, 25];

// const max = numbers.reduce((acc,curr)=>{
//     return Math.max(acc,curr);
// },0);

// console.log(max);

// ----------------------------Count Occurrences of Elements--------------------------
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const occ = fruits.reduce((acc,fruits)=> {
//     acc[fruits] = (acc[fruits] || 0)+1;
//     return acc; 
// },{});

// console.log(occ);

// -----------------------------------task 4 flatten 2d array-------------------------
// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// const flatArray = nestedArray.reduce((acc, curr) => {
//     return acc.concat(curr)
//     },[]);

// console.log(flatArray);


// ------------------------------task 3 total price of products---------------------------------
// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 20000 },
//     { name: "Tablet", price: 15000 }
// ];

// const totalPrice = products.reduce((acc, product) =>{ 
//     return acc + product.price
// },0);

// console.log(totalPrice);


// -----------------------------------filter method --------------------------------------
//1.  Filter Even Numbers

// const numbers = [10, 15, 20, 25, 30];

// const even = numbers.filter((val)=>{
//     return val%2==0;
// });
// console.log(even);

//2.  Filter Adults (Age ≥ 18)
// const ages = [12, 18, 25, 16, 30];

// const adults = ages.filter((value)=>{
//     return value>=18;
// });
// console.log(adults);

//3.  Filter Expensive Products
// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 15000 },
//     { name: "Tablet", price: 25000 }
// ];

// const exp = products.filter((value)=>{
//     return value.price>20000;
// });
// console.log(exp);

//4. Filter Strings Longer Than 5 Characters
// const words = ["apple", "banana", "grape", "kiwi", "strawberry"];

// const str = words.filter((val)=>{
//     return val.length>5;
// });
// console.log(str);

//5. Filter Employees Working in IT Department
// const employees = [
//     { name: "Alice", department: "HR" },
//     { name: "Bob", department: "IT" },
//     { name: "Charlie", department: "Finance" },
//     { name: "David", department: "IT" }
// ];

// const dept = employees.filter((val)=>{
//     return val.department=='IT';
// });
// console.log(dept);

// -----------------finish methods-------------------------------


// ------------------------Now start Array Destructuring -----------------------------------
//1. Extract first and last element

// const numbers = [10, 20, 30, 40];

// const[first,,,last]=numbers;
// console.log(first,last);

//2. Destructure First Two and Store Remaining 
// const names = ["Alice", "Bob", "Charlie", "David"];

// const [fir,sec,...remaining]=names;

// console.log(fir,sec);
// console.log(remaining);
