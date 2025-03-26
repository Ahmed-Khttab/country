

async function getCountryByContinent(country){

    try{
        const response  = await fetch(`https://restcountries.com/v3.1/region/${country}`);
        
        if(!response.ok){
            throw new error("error dd");
            
        }

        const Data  = await response.json();
        console.log(Data);
        


        const container = document.querySelector(".container");

        container.innerHTML = '';        

        for(let i=0; i<Data.length ; i++){
            
            const div  = document.createElement("div");
            div.classList.add("card-main");
        div.innerHTML = `
            <div class="card">
                <div class="card-img">
                <img src=${Data[i].flags.png} alt="flag">
                </div>
                <div class="card-content">
                
                <h2 class="country-name">Country : ${Data[i].name.common}</h2>

                <h3 class="country-capital">Capital : ${Data[i].capital}</h3>

                <h4 class="country-region">Region : ${Data[i].region}</h4>

                <h4 class="country-population">Population : ${Data[i].population.toLocaleString()}</h4>

                </div>
            </div>
        
        `;

        container.appendChild(div);

    }


    }
    catch(error){
        console.log("error message",error);
    }
}



async function getCountry(country){

    try{
        const response  = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        
        if(!response.ok){
            throw new error("error dd");
            
        }

        const Data  = await response.json();
        console.log(Data);
        


        const container = document.querySelector(".container");

        container.innerHTML = '';        

        for(let i=0; i<Data.length ; i++){
            // console.log(Data[i]);
            const div  = document.createElement("div")
            div.classList.add("card-main");
        div.innerHTML = `
            <div class="card">
                <div class="card-img">
                <img src=${Data[i].flags.png} alt="flag">
                </div>
                <div class="card-content">
                
                <h2 class="country-name">Country : ${Data[i].name.common}</h2>

                <h3 class="country-capital">Capital : ${Data[i].capital}</h3>

                <h4 class="country-region">Region : ${Data[i].region}</h4>

                <h4 class="country-population">Population : ${Data[i].population.toLocaleString()}</h4>

                </div>
            </div>
        
        `;

        container.appendChild(div);

    }


    }
    catch(error){
        console.log("error message",error);
    }
}



















const selectElement = document.querySelector("#country-select");

selectElement.addEventListener("change", function(e) {
    const selectedOption = e.target.value;
    if(selectedOption !=="Choose"){
        getCountryByContinent(selectedOption);
    }
});


const inputCountry  = document.querySelector(".search-bar");

const btnCountry  = document.querySelector(".btnSearch");

btnCountry.addEventListener("click" , function(){
    const i  = inputCountry.value;
    getCountry(i);
})



