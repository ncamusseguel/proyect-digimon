var url = "https://digimon-api.vercel.app/api/digimon"

fetch(url)
.then(response => response.json())
.then( datos => {
    console.log(datos)

})