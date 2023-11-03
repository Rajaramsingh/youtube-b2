
function fetchdata(){
    console.log("fetch data called")
    let data =null;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(data){
        console.log("promise success",data)
        console.log(data);
        return data.json()
    })
    .then(function(data){
        console.log("final data[0].username",data[0].username);
       let para= document.getElementById('username') 
       for(let i=0; i<data.length; i++){
        let eachuser= document.createElement('h2');
        eachuser.innerHTML="welcome" + data[i].username.toUpperCase()
        para.appendChild(eachuser)
       }
        
        para.style.color="orange"
        para.style.fontfamily= "Arial, Helvetica, sans-serif";
        
        
    })
    
    .catch(function(err){
        console.log("promise failed",err)
    });
     console.log (data)
}
// timebomb implementation
let timerInsecond=130;  // in seconds
function mytimebomb(){
    const minutes=Math.floor(timerInsecond/60);
    const seconds=timerInseconds % 60;

    const formattedtime=(minutes+":"+seconds);

    document.getElementsById('timebomb').innerHTML=formattedtime;
    document.getElementsById('timebomb').style.color='red';

    if(timerInsecond<=0){
        clearInterval(interval); /// stop the timer
        alert('bomb!!!')
    }
    else{
        const minutes= Math.floor(timerInsecond/60);
    }


}
