// Callback.
// document.querySelector('#button').addEventListener('click', ()=> {
//     alert("clicked the button")
// })


// Requisições na prática
// Promise 
//* https://jsonplaceholder.typicode.com/posts

function click(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        //console.log(json[0])
        alert(`title of the 1st post: ${json[0].title}`)
    })
}

document.querySelector('#button').addEventListener('click', click())