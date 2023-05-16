async function click(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    alert(`title of the 1st post: ${json[0].title}`)

    alert('click!')
}

document.querySelector('#button3').addEventListener('click', click)

// função anonima com async
// let click = async () => {}