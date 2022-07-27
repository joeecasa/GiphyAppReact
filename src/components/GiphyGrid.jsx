import React, { useEffect, useState } from 'react'
import GiphyItem from './GiphyItem';
import getGifs from '../helpers/getGifs';


const GiphyGrid = ({ category }) => {

    const [gifs, setGifs] = useState([]);


    useEffect(() => {
        getGifs(category)
            .then(images => setGifs(images))
    }, [])
    
    /// se ejecuta una sola vez  para eso se usa el useEffect
    ///array de dependencias, le decis q estes pendiente de alguna variable, por ejemplo si cambia algo vuelve y ejecuta todo
    ////// con el array le decis q hacer

    return (
        <>
            <h3>{category}</h3>
            <hr />
            <GiphyItem gifs = {gifs} />

        </>

    )
}

export default GiphyGrid