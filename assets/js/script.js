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
document.querySelector('#button').addEventListener('click', click)

// // requisição post
// function insert(){
//     fetch('https://jsonplaceholder.typicode.com/posts',
//      {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json' // especificação das informações que estou mandando
//         },
//         body: JSON.stringify({
//             title: 'Test',
//             body: 'Body test',
//             userId: 2
//         })
//      })
//     .then(() => {
//         return response.json() // resposta convertida em objeto
//     })
//     .then((json) => {
//         console.log(json)
//     })
// }

// document.querySelector('#insert').addEventListener('click', insert)

//async await 
async function click2(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    alert(`title of the 1st post: ${posts[0].title}`)
}

document.querySelector('#button2').addEventListener('click', click2)


// Promises 
function testPromise(duration){
    return new Promise(
        (resolve, reject) => {
            function nSei(){
                resolve(`passou o tempo ${duration}ms`)
            }
            if(typeof duration !== 'number'){
                reject('not a number')
            }
            if(duration >= 5001){
                reject('duration is too long')
            }
            setTimeout(nSei, duration)
        }
    )
}

// testPromise(2000).then((value) =>{
//     console.log(value)
// }).catch((e) => {
//     console.log(e)
// })


async function seiNao(){
    try {
        const response = await testPromise(5000)
        console.log(response) 
    } catch (error) {
        console.log(error)
    }

}

seiNao()