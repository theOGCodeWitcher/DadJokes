const jokeBox = document.querySelector(".joke");
const button = document.querySelector(".btn");

// const generateJoke =()=>{
// const setHeaders ={
//     headers:{
//         Accept:"application/json"
//     }
// }

//     fetch('https://icanhazdadjoke.com/' ,setHeaders)
// .then((res)=>res.json())
// .then((data)=>{
//     jokeBox.innerHTML=data.joke;
// })
// .catch((error)=>{
//     console.log(error);
// })
// }

async function generateJoke(){
    try{
        const res = await fetch('https://icanhazdadjoke.com/' ,{
            headers:{
                Accept:"application/json"
            }
        })
        if(!res.ok){
           throw Error(res.statusText)
        }
        console.log(res);
        const data = await res.json();
        jokeBox.innerHTML=data.joke;
    }catch(err){
        console.log(err);
    }
    
}


button.addEventListener('click' ,generateJoke)
generateJoke();