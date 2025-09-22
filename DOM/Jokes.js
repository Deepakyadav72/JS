const infoFunc=()=>{
    let information=document.getElementsByTagName("p")[0].innerText;
    console.log('🚀 ~ information:', information);
    
}
const generator=async()=>{
    const API=`https://official-joke-api.appspot.com/random_joke`;
    const jokeDiv = document.getElementById("joke");
    try{
        let res =await fetch(API);
        let data =await res.json();
        console.log('🚀 ~ data:', data);

        let id=document.createElement("h3");
        let punchLine=document.createElement("h4");
        let setup=document.createElement("h5");
        let type=document.createElement("p");

        id.innerText=data.id;
        punchLine.innerText=data.punchline;
        setup.innerText=data.setup;
        type.innerText=data.type;
        
        jokeDiv.append(id,punchLine,setup,type)
    }catch(error){
        console.log('🚀 ~ error:', error);
        
    }
    
}