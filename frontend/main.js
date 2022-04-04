window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApi = 'http://localhost:7071/api/GetResumecounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(Response => {
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