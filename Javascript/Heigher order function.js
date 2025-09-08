let arr=[1,2,5,6,8,7,6,8,9,8,4,8];

// Map

let arrArr =[ ];
arr.map(( Element,index,self)=>{
    if(Element!==8){
        newArr.push(Element);
        return Element
    };
}

);
console.log(newArr);

//Filter
let filterData=arr.filter((Element)=>{
    if (Element!==8) return Element;

});
console.log(filterData);

//For each
let newData=arr.forEach((Element,index,self)=>{
    if(Element!==8) console.log(Element);
}
)
console.log(newData);