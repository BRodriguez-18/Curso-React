//Fetch con /Async /Await
const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url)
//     .then((response) =>{
//         if(response.ok){
//             return response.json()
//         }
//         throw new Error('Hubo un error...')

//     })
//     .then(data => { 
//         console.log(data)
//     })
//     .catch(error =>{ 
//         console.log(error)
//     })

const consultarApi = async () => {
   try {
    const response = await fetch(url) //se espera que se complete el await y se obtenga la respuesta
    if(!response.ok){
        throw new Error('Hubo un error...')
    }
    const data = await response.json()
   console.log(data)
   } catch (error) { //en caso de que cualquier función falle se ejecuta
    console.log(error.message)
   }
}

consultarApi()