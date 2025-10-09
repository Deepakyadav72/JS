const btn_Add = document.querySelector(".add_btn");
let store = JSON.parse(localStorage.getItem("todos")) || [];

btn_Add.addEventListener("click", () => {
    const value_todo = document.querySelector("#todoVal").value;


    const dataObj = {
        id: Date.now(),
        todo: value_todo,
        isEdits: false,
        isCompleted: false
    }

    store.push(dataObj);

    // local storage...

    localStorage.setItem("todos", JSON.stringify(store));

    document.querySelector("#todoVal").value = "";
    read_Todo()
})


const read_Todo = () => {
    const mainDiv = document.querySelector("#todo_list");

    mainDiv.innerHTML = "";

    store.forEach((el) => {
        const todoDiv = document.createElement("div");
        const textTodo = document.createElement("h4");
        const input_is_completes = document.createElement("input");
        const btn_edits = document.createElement("button");
        const btn_delete = document.createElement("button");

        textTodo.innerText = el.todo;

        input_is_completes.type = "checkbox";

        todoDiv.className = "todo_divs";

        btn_delete.innerText = "delete";
        btn_delete.className = "btn_isDelete";
        btn_edits.innerText = "edit";
        btn_edits.className = "btn_isEdit";


        todoDiv.append(input_is_completes, textTodo, btn_edits, btn_delete);
        mainDiv.append(todoDiv);
    });

}
const deleteFunction=(id)=>{
    const updateDel=store.filter((el)=>el.id!==id);
    console.log('🚀 ~ updateDel:', updateDel);
    store=updateDel;
    localStorage.setItem("todos",JSON.stringify(store))
    read_Todo()
}
btn_cancel.addEventListener("click",()=>{
    cancelHandel(el.id);
})
//logic to hide.
textTode.className=el.isEdits ? "hideData":"showData";
inputEdit.className=el.isEdits?"showData" :"hideData";

//btn logic 
btn_edits.className=el.isEdits?"hideData":"showData btn_isEdit";
btn_cancel.className=el.isEdits?"showData btn_isDelet":"hideData";

btn_delete.className=el.isEdits?"hideData":"showData btn_isDelete";
btn_confirm.className=el.isEdits?"showData btn_isEdit":"hideData";

btn_edits.addEventListener('click',()=>{

})
todoDiv.append(input_is_completes,textTodo,inputEdit,btn_edits,btn_delete,btn_cancel,btn_confirm);
mainDiv.append(todoDiv);
});

window.onload = () => {
    read_Todo()
}