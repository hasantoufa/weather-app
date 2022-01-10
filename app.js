
const submitBtn=document.getElementById('submitBtn')
submitBtn.addEventListener('click',function(){

    const inputText=document.getElementById('inputText').value
    console.log(inputText)

    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputText+'&appid=9da79bd79b641c3cf843b0861e5afddd')

    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        const cityNam=data.name;
        const tem=data.main.temp;
        const temp= tem-273.15;
        const description= data.weather[0].description;



        document.getElementById('city').innerText=cityNam;
        document.getElementById('temp').innerText=temp.toFixed(2);
        document.getElementById('des').innerText=description;

    })


})