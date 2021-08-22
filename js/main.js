
document.querySelector("form").onsubmit = function(e){
    e.preventDefault();
    let x = document.querySelector("input").value;
    let regex = /[ ]{1,}/gi;
    let y =x.replaceAll(regex,"-");
    console.log(y);
 fetch("https://api.covid19api.com/summary").then(function(res){
   return res.json();
}).then(function(data){
    
    for(let i = 0; i < data.Countries.length; i++){
        if(y == data.Countries[i].Slug){
          document.querySelector(".death span").textContent = data.Countries[i].TotalDeaths;
          document.querySelector(".recover span").textContent = data.Countries[i].TotalConfirmed;
          document.querySelector(".country span").textContent = data.Countries[i].Country;
        }
    }
    
   console.log(data.Countries);
});
}




























