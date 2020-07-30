(function(){

const chatwin = document.getElementById('chat-win');
const messages = document.getElementById('messages');
const help = document.getElementById('help');
const sym = document.getElementById('symbol');
const texthelp = document.getElementById('texthelp');
const send = document.getElementById('submitBtn');
const userin = document.getElementById('userin');
const additionalFrontEnd = document.getElementById('additionalFrontEnd');

let cbActive = false;

function start(status){
    fetch('/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify({state:status})
    })
    .then((response)=>response.json())
    .then(data=>{
        messages.innerHTML = data;
    })
    .catch((err)=>{console.log(err.message)});
}start('start');


function sending(){
    if(userin !== ''){
        let uin = userin.value;
        userin.value = '';
        let inputObj = {input: uin};
        
        fetch('/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(inputObj)
        })
        .then(response=>response.json())
        .then(data=>{
            messages.innerHTML += `<div class="user"><p class="umsg">${uin}</p></div>`;
            messages.innerHTML += `<div class="server"><p class="smsg">${data}</p></div>`;
            messages.scrollTop = messages.scrollHeight;
        })
        .catch((err)=>{console.log(err.message)});
    }
}


send.addEventListener('click',sending);


userin.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        sending();
    }
});


help.addEventListener('click',()=>{
    if(!cbActive){
        cbActive = true;
        additionalFrontEnd.style.display = 'none';
        chatwin.style.display = 'block';
        sym.innerHTML = 'x';
    }
    else{
        cbActive = false;
        additionalFrontEnd.style.display = 'block';
        chatwin.style.display = 'none';
        sym.innerHTML = '?';
    }
});


})();