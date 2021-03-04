let clock = document.querySelector('#clock');

setInterval(()=>{
    clock.innerHTML = ((new Date).toLocaleString().substr(11,8));
},1000);
