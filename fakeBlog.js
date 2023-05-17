// https://jsonplaceholder.typicode.com/posts

async function readPosts(){
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Loading...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    if(json.length > 0 ){
        postArea.innerHTML = ''

        for(let i in json){
            let postHTML = `<div><h1>${json[i].title}<hr/>${json[i].body}</h1></div>`
            postArea.innerHTML += postHTML
        }
    }else {
        postArea.innerHTML = 'no posts to display'
    }
}

async function addNewPost(title, body){
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    )

    document.querySelector('#titleField').value = ''
    document.querySelector('#bodyField').value = ''

    readPosts()
}

document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value

    if(title && body){
        addNewPost(title, body)
    }else{
        alert('fill in all fields')
    }
})

readPosts()