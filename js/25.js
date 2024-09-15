//Fetch API con Promises

const url = 'https://jsonplaceholder.typicode.com/comments'

//promise es un objeto que estará a futuro o no
fetch(url)
    .then((response) =>{
        if(response.ok){
            return response.json()
        }
        throw new Error('Hubo un error...')

    })
    .then(data => {
        console.log(data)
    })
    .catch(error =>{ 
        console.log(error)
    })



