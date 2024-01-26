var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload = function(){
    var res = JSON.parse(request.response);
for(let i of res){    
    console.log(i.flags.png); // Answer to day3 task question 2
    console.log(i.name.common,i.region,i.subregion,i.population) // Answer to day3 question 3
   }

}
