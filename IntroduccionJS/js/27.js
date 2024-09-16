const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/photos'

//no se recomienda hacer varias peticiones en una sola función


//Este metodo las abre al mismo tiempo y su performance es mejor
const consultarApi = async () => {
    try {
        const inicio =  performance.now();

        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)])

        const [data, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()])
    console.log(data)
    console.log(data2)
    console.log(data3)

    const fin = performance.now();
    console.log(`El resultado es: ${fin - inicio} ms`)

    } catch (error) { //en caso de que cualquier función falle se ejecuta
     console.log(error.message)
    }
 }
 
 consultarApi()