// requisição post
async function insert(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
     {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // especificação das informações que estou mandando
        },
        body: JSON.stringify({
            title: 'Test',
            body: 'Body test',
            userId: 2
        })
     })
    let json = await response.json()
    console.log(json)
}

document.querySelector('#insert').addEventListener('click', insert)