const Base_URL =`https://jsonplaceholder.typicode.com/comments`;



const apiCalling =async()=>{

    try{
        let data=await fetch(Base_URL);
        let res= await data.json();
        console.log('🚀 ~ res:', res);

    }catch(error){
        console.log('🚀 ~ error:', error);
        
    }

    // //sync way handle promise 
    // fetch(Base_URL).then ((res)=>res.json()).
    // then ((res)=>console.log(res)).catch
    // ((error)=>console.log(error)).finally
    // (()=>console.log("data has been fetch"));
}
apiCalling()