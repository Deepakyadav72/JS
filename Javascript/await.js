function waiting_msg_promise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("goat you???")
        },2000)
    })
}
const async_await_show_msg_promise=async()=>{
    console.log("start the task??");
    let msg= await waiting_msg_promise();
    console.log('🚀 ~ msg:', msg);
    
    console.log("finise the task");

}
async_await_show_msg_promise();