async function api(){
  try{
  data = fetch('https://restcountries.com/v3.1/all')
    out = await data;
     prom = out.json();
     final = await prom;
     parent  = document.querySelector('.container')
    parent1 = document.querySelector('.row')
     final.forEach(country => {

   
     parent1.innerHTML+=`
          <div id="cardDetails" class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
          <div class="card h-100">
           <div class="card-header">
           <h5 class="card-title">${country.name.common}</h5>
          </div><br>
          <div class="card-body">  
          <img src="${country.flags.png}" class="card-img-top">
         <div class="card-text">
         <ul class="list-group">
         <li class="list-group-item card-text"><b>Capital:${country.capital}</li>
         <li class="list-group-item card-text"><b>Region:${country.region}</li>
         <li class="list-group-item card-text"><b>Country Code:${country.cca3}</li>
         
       </div>
        

         <button class="btn btn-primary" target="_blank" value="${country.name.common}">Click for Weather</button>

          </div>
        </div>
      
      `
      parent.append(parent1)
      
      let btn = document.querySelectorAll(".btn");
      btn.forEach((ele)=>{
        ele.addEventListener("click",()=>{
          let value = ele.value
          console.log(value)
          async function weather(){
            let res = fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${ele.value}&APPID=07401ede46ffd4b2c4acdb4ff3dbedd7`
            );
            let result0 = await res
            let result1 = result0.json()
            let result = await result1

            console.log(result)
            ele.innerHTML= `weather: ${result.weather[0].description}<br>Temp: ${result.main.temp}<br>Pressure: ${result.main.pressure}<br>
            lon:${result.coord.lon}<br>lat${result.coord.lat}`
           
          }
          weather();
        })
      })
      
     });
    }
     catch(error){
      console.log(error)
     }
    
}
api()