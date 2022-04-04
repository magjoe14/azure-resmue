window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterjoe.azurewebsites.net/api/GetResumecounter?code=0UGVhTx3baARaXh3HsjvyRR8/MzsLEAZ/iRYi9zza5hiaOpeTnhaUw==';
const localfunctionApi = 'http://localhost:7071/api/GetResumecounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(Response => {
        return Response.json()
    }).then(respone => {
        console.log("Website called function API.");
        count = respone.count
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}