// let arr=[1,2,5,6,8,7,6,8,9,8,4,8];

// // Map

// let arrArr =[ ];
// arr.map(( Element,index,self)=>{
//     if(Element!==8){
//         newArr.push(Element);
//         return Element
//     };
// }

// );
// console.log(newArr);

// //Filter
// let filterData=arr.filter((Element)=>{
//     if (Element!==8) return Element;

// });
// console.log(filterData);

// //For each
// let newData=arr.forEach((Element,index,self)=>{
//     if(Element!==8) console.log(Element);
// }
// )
// console.log(newData);



// Reduce

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let val=arr.reduce((acc,cur)=>{
//     return acc+=cur
// },0);
// console.log(val);

// HOF: create a reducer for summing a property.
const items=[
    {name:'Book',price:300},
    {name:'pen',price:50},
    {name:'notebook',price:150},
];

const createSumReduce=(prop)=>{
    return(acc,obj)=>acc+obj[prop];
};
const totalPrice=items.reduce(createSumReduce('price'),0);
console.log(totalPrice);

// conso


// const fruits=['Apple','Banana','Apple','Banana','Orange','Apple'];

// const countFruits=fruits.reduce((acc,fruits)=>{
//     acc[fruits]=(acc[fruits]|| 0)+1;
//     return acc;
// },{});

// console.log(countFruits);



// let str= 'Massaaiii';
// let funstr=str.split('');
// console.log('->funstr:',funstr);

// const countstring=funstr.reduce((acc,string)=>{
//     acc[string]=(acc[string]||0)+1;
//     return acc;

// },{});
// console.log(countstring)


