const getGifs = async (category) =>{


    const url = `https://api.giphy.com/v1/gifs/search?api_key=aFyhDnITL60fRZ0m4MeB6xl3YwhQ5aVl&q=${category}&limit=10`

    const response = await fetch(url)

    const { data } = await response.json()

    const gifs = data.map(item =>{
        return {
            id : item.id,
            title : item.title,
            url : item.images.downsized_large.url
        }
    })
    
    return gifs

}

export default getGifs