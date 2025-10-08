const btn_Add=document.querySelector(".add_btn");
let store=JSON.parse(localStorage.getItem("todos"))||[];

btn_Add.addEventListener("click",()=>{
    const value_todo=document.querySelector("#todoVal").value;

    const dataObj={
        id:Date.now(),
        todo:value_todo,
        isEdits:false,
        isCompleted:false
    }
    store.push(dataObj);
    //local storage

    localStorage.setItem("todos",JSON.stringify(store));
    document.querySelector("#todoVal").value="";
    read_Todo()

})
const read_Todo=()=>{
    const mainDiv=document.querySelector("#todo_list");

    mainDiv.innerHTML="";
    store.forEach((el)=>{
        const
    })
}