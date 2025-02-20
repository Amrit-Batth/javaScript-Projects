// object Destructuring 
// const person = { name: "Amritpal", age: 25, city: "Amritsar" };

// const { name, age, city } = person;

// console.log(name); // "Amritpal"
// console.log(age);  // 25
// console.log(city); // "Amritsar"

// 1. Extract object properties
// const product = { name: "Laptop", price: 50000, brand: "Dell" };

// const{name,price}=product;
// console.log(name,price);

// 2. Rename properties
// const user = { firstName: "John", lastName: "Doe" };


// const{firstName:fname,lastName:lname}=user;
// console.log(fname,lname);

// 3. Extract title and author
// const book = { title: "JavaScript Guide" };

// const{title,author="amrit"}=book;
// console.log(title,author);

// 4. Destructure Nested Objects
// const person = { name: "David", address: { city: "New York", country: "USA" } };

// const{address:{city,country}}=person;
// console.log(city,country);

// 5. Function Parameter Destructuring
// function displayCar(...obj) {
//     console.log(obj);
//     const[{brand,model,year}]=obj;
//     console.log(brand,model,year);
// }


// const car = { brand: "Tesla", model: "Model S", year: 2023 };
// displayCar(car);


// ------------------------------------------------super advanced tasks -----------------------------------------

// const company = {
//     name: "InnovateTech",
//     employees: [
//       { 
//         id: 101, 
//         name: "Alice", 
//         salary: 75000,
//         address: { city: "New York", zip: "10001" }
//       },
//       { 
//         id: 102, 
//         name: "Bob", 
//         salary: 65000,
//         address: { city: "San Francisco", zip: "94105" }
//       }
//     ]
//   };
// // Extract firstEmployeeName, firstEmployeeSalary, and firstEmployeeCity from this object:

// const{employees:[{name,salary,address:{city}}]}=company;
// console.log(name,salary,city);

//  Task 2: Destructure from an Object with Multiple Nested Arrays
// const store = {
//     name: "Gadget World",
//     products: [
//       {
//         id: 201,
//         name: "Smartphone",
//         variants: [
//           { color: "Black", price: 500 },
//           { color: "White", price: 520 }
//         ]
//       },
//       {
//         id: 202,
//         name: "Tablet",
//         variants: [
//           { color: "Silver", price: 700 },
//           { color: "Gold", price: 750 }
//         ]
//       }
//     ]
//   };
  
// // Extract productName, firstVariantColor, and firstVariantPrice from the nested structure
// const{products:[{name,variants:[{color,price}]}]}=store;
// console.log(name,color,price);


// Task 3: Extract Data from Complex Employee Records
// const organization = {
//     employees: [
//       {
//         name: "Emma",
//         role: "Developer",
//         skills: ["JavaScript", "React", "Node.js"],
//         office: { location: "New York", floor: 5 }
//       },
//       {
//         name: "David",
//         role: "Designer",
//         skills: ["Photoshop", "Figma", "Illustrator"],
//         office: { location: "San Francisco", floor: 7 }
//       }
//     ]
//   };
  
// // Extract firstEmployeeName, firstEmployeeRole, firstSkill, and secondEmployeeOffice
// const{employees:[{name,role,skills:[firstskill]},{office:{location}}]}=organization;
// console.log(name,role,firstskill,location);

// Task 4: Extract and Rename Nested Properties
// const order = {
//     id: 5001,
//     customer: { name: "Michael", age: 35 },
//     date: "2025-02-20",
//     items: [
//       { name: "Laptop", price: 1200 },
//       { name: "Mouse", price: 50 }
//     ],
//     totalAmount: 1250
// };
// // Extract customerName, orderDate, firstItemName, firstItemPrice, and rename totalAmount to orderTotal
// const{customer:{name:Cname},date,items:[{name,price}],totalAmount:amount}=order;
// console.log(Cname,date,name,price,amount);


// Task 5: Destructuring with Default Values in a Deeply Nested Object

// const university = {
//     name: "Tech University",
//     location: { city: "Boston" },
//     courses: [
//       { title: "Web Development", instructor: "Dr. Smith" },
//       { title: "Data Science", instructor: "Dr. Johnson" }
//     ]
//   };

// // Extract city, country (default: "Unknown"), firstCourseName, and firstInstructor
// const{location:{city,country="unknown"},courses:[{title,instructor}]}=university;  
// console.log(city,country,title,instructor);

// Task 6: Extract Values from an Array Inside an Object Inside Another Object

// const company = {
//     name: "SoftTech",
//     team: {
//       lead: "Sophia",
//       employees: [
//         {
//           name: "Ethan",
//           projects: [
//             { title: "AI System", tasks: ["Data Collection", "Model Training"] }
//           ]
//         }
//       ]
//     }
//   };
// // Extract employeeName, projectTitle, firstTask:

// const{team:{employees:[{name,projects:[{title,tasks:[firstTask]}]}]}}=company;
// console.log(name,title,firstTask);

// Task 7: Destructure Inside a Function and Handle Missing Properties

// const user = { 
//     username: "john_doe",
//     contact: { email: "john@example.com" }
//   };
  
//   // Write a function that extracts username, email, and age (default: 18).
//   function getUserDetails(user) {
//     console.log(user);
//     const{username,contact:{email,age=18}}=user;
//     console.log(username,email,age);
//   }
  
// getUserDetails(user);


// Task 8: Extract Deeply Nested Data and Use Spread Operator

// const project = {
//   name: "AI Research",
//   manager: { name: "Sophia", experience: "10 years" },
//   team: [
//     { name: "Liam", role: "Data Scientist" },
//     { name: "Emma", role: "AI Engineer" },
//     { name: "Oliver", role: "ML Engineer" }
//   ]
// };
// // Extract managerName and teamMembers, storing all members except the first one in remainingMembers:

// const{manager:{name},team:[,...except]}=project;
// const{team:[...accept]}=project;
// console.log(name,accept,except);


// -------------------------------------------------------super super dupper----------------------------------------

// const organization = {
//     company: {
//       name: "NextGen Solutions",
//       ceo: { name: "Jonathan Stark", age: 50 },
//       employees: [
//         {
//           name: "Sophia",
//           role: "Software Engineer",
//           skills: ["JavaScript", "React", "Node.js"],
//           office: { location: "New York", floor: 7 }
//         },
//         {
//           name: "Liam",
//           role: "Project Manager",
//           skills: ["Agile", "Scrum", "Communication"],
//           office: { location: "San Francisco", floor: 5 }
//         }
//       ],
//       projects: [
//         {
//           title: "AI Assistant",
//           tasks: ["Data Collection", "Model Training", "Deployment"]
//         },
//         {
//           title: "Blockchain Security",
//           tasks: ["Encryption", "Consensus Mechanism", "Smart Contracts"]
//         }
//       ]
//     }
//   };
// companyName
// ceoName
// firstEmployeeName
// firstEmployeeSkill
// secondEmployeeOfficeFloor
// secondProjectTask  

// const{company:{name:companyName,ceo:{name},employees:[{name:firstEmployeeName,skills:[skill]},{name:secName,skills:[secskill]},{office:{floor}}]}}=organization;

// console.log(companyName,name,firstEmployeeName,skill,secName,secskill,floor);


// --------------------------------------------Task 3: University System Data Extraction-------------------------

// const university = {
//     name: "Global Tech University",
//     students: [
//       {
//         name: "Alice Johnson",
//         age: 22,
//         courses: [
//           { title: "Computer Science", instructor: "Dr. Alan Turing" },
//           { title: "Machine Learning", instructor: "Dr. Andrew Ng" }
//         ],
//         dormitory: "North Hall",
//         hobbies: ["Reading", "Gaming"]
//       },
//       {
//         name: "David Brown",
//         age: 23,
//         courses: [
//           { title: "Cybersecurity", instructor: "Dr. Kevin Mitnick" },
//           { title: "Networking", instructor: "Dr. Vint Cerf" }
//         ],
//         dormitory: "West Hall",
//         hobbies: ["Swimming", "Photography"]
//       },
//       {
//         name: "Sophia Lee",
//         age: 21,
//         courses: [
//           { title: "Data Science", instructor: "Dr. Geoffrey Hinton" },
//           { title: "Cloud Computing", instructor: "Dr. Werner Vogels" }
//         ],
//         dormitory: "East Hall",
//         hobbies: ["Sketching", "Yoga"]
//       }
//     ]
//   };
  
// // universityName
// // firstStudentName
// // firstStudentFirstCourseTitle
// // firstStudentFirstCourseInstructor
// // secondStudentDormitory
// // thirdStudentSecondHobby

// const{name,students:[{name:stuName,courses:[{title,instructor}]},{dormitory},{hobbies:[,yoga]}]}=university;
// console.log(name,stuName,title,instructor,dormitory,yoga);


// -------------------------------------------callback function--------------------------------------------
// function f1(callback) {
//     console.log("f1");
//     callback();
// }
// function f2() {
//     console.log("f2");
// }
// f1(f2);



// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         callback("Data loaded successfully!");
//     }, 2000);
// }

// // simple way
// // fetchData((message) => {
// //     console.log(message);
// // });

// function f2(msg) {
//     console.log(msg);
// }

// fetchData(f2);

// ---------------------------------------------callback Task-------------------------------------------
// function calculate(a, b, callback) {
//     return callback(a,b);
//  }
 
//  function add(x, y) {                          //calculate(5, 3, add)
//      return x + y;
//  }
 
//  function multiply(x, y) {
//      return x * y;
//  }
 
//  // Call calculate with different callbacks
//  console.log(calculate(5, 3, add));       // Expected Output: 8
//  console.log(calculate(4, 6, multiply));  // Expected Output: 24
 

// function fetchUserData(callback) {
//     return callback(user)
//  }
 
//  function person(user) {
//     return user;
//  }

//  const user={name:"john",age:25};
//  console.log(fetchUserData(person));

//  // Expected Output (after 3 sec)
//  // Fetching data...
 // User Data: {name: "John", age: 25}
 

// A callback function is a function that is called back (executed) inside another function after it has completed its execution.

 function f1(callback) {
    console.log("f1");
    callback(f3);
 }

 function f2(callback) {
    console.log("f2");
    callback(f4);
 }

 function f3(callback) {
    console.log("f3");
    callback(f1);
 }

 function f4() {
    console.log("f4");
 }

 f1(f2);