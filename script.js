
let count =0;

async function getjoke(){
    document.getElementById('joke').innerText= '';
    document.getElementById('setup').innerText= '';
    document.getElementById('delivery').innerText= '';
    let select=document.getElementById('select').value
    let response=await fetch(`https://v2.jokeapi.dev/joke/${select}`)
    let jokes=await response.json();
   
    if(jokes.type=='single'){
        document.getElementById('joke').innerText=jokes.joke;
    }else{
        document.getElementById('setup').innerText=jokes.setup;
        document.getElementById('delivery').innerText=jokes.delivery;
    }
    count++;
    document.getElementById('count').innerText=`You have read ${count} pieces of jokes today!`
}
