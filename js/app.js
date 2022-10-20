let btnSearch = document.querySelector('#get');


btnSearch.addEventListener('click', () => {
    sendApiRequest();
});


async function sendApiRequest(){
    let api_Key = "kYJ4pIcpVKuMO5Kjc9CShS1CNtGf5Y0Jszp0PNug";   // api.nasa@
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_Key}`);
    let data = await response.json();
    useApiData(data);
}


function useApiData(data){
    document.querySelector("#container").innerHTML = data.explanation;
    document.querySelector("#container").innerHTML += `<img src="${data.url}">`;
}