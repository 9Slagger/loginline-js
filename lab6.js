const dataOne = [
  { code: "PH", name: "phone" },
  { code: "LT", name: "labtop" },
  { code: "KB", name: "keyboard" },
  { code: "MT", name: "monitor" }
];

const dataTwo = [
  { code: "LT", name: "labtop" },
  { code: "MT", name: "monitor" }
];

// use code to check condition duplicate in array
// expected is [ { code: "PH", name: "phone" }, { code: "KB", name: "keyboard" } ]

const main = () => {
  //your code
};

main();
























// const main = () => {
//   const result = [];  // question? why const can change value ,hint data type of array is ...
//   dataOne.forEach(data1 => {
//     let duplicate = false;
//     dataTwo.forEach(data2 => {
//       if (data1.code === data2.code) duplicate = true;
//     });
//     if (!duplicate) result.push(data1) // question? why const can change value ,hint data type of array is ...
//   });
//   console.log(result)
// };

// main();

// const main = () => {
//   const result = dataOne.filter(data1 => {
//     let duplicate = false;
//     dataTwo.forEach(data2 => {
//       if (data1.code === data2.code) duplicate = true;
//     });
//     if (duplicate) return false;
//     else return true;
//   });
//   console.log(result);
// };

// main();

// const main = () => {
//   const result = dataTwo.map(data1 =>
//     dataOne.find(data2 => data2.code !== data1.code)
//   );
//   console.log(result);
// };

// main();
