const Base_URL =`https://official-joke-api.appspot.com/random_joke`;

const apiCalling= async()=>{
    try{
        let data =await fetch(Base_URL);
        let res =await data.json();
        console.log('🚀 ~ res:', res);
        alert(
            `id ${res.id}
            type ${res.type}
            setup ${res.setup}
            punchline ${res.punchline}`
        )
        
    }
}
