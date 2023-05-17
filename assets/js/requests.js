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

//request get
async function getPost(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
     {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
     })
    let json = await response.json()
    console.log(json)
}


// request get comments
async function getPostComments(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments',
     {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
     })
    let json = await response.json()
    console.log(json)
}


//request get comments id
async function getPostCommentsId(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments?postId=1',
     {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
     })
    let json = await response.json()
    console.log(json)
}


// request put posts
async function putPosts(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
     {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' // especificação das informações que estou mandando
        },
        body: JSON.stringify({
            title: 'test',
            body: 'Body test',
            userId: 2
        })
     })
    let json = await response.json()
    console.log(json)
}

// detete
async function deletePosts(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
     {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json' // especificação das informações que estou mandando
        }
     })
    let json = await response.json()
    console.log(json)
}

// chamar os treco
Promise.all([
    getPost(),
    getPostComments(),
    getPostCommentsId(),
    putPosts(),
    deletePosts(),
])

//async await

async function click(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    alert(`title of the 1st post: ${json[0].title}`)

    alert('click!')
}

document.querySelector('#button3').addEventListener('click', click)

// função anonima com async
// let click = async () => {}

