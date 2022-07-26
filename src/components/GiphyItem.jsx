import React, { useEffect, useState } from 'react'
import getGifs from '../helpers/getGifs';

const GiphyItem = ({ category }) => {

    const [gifs, setGifs] = useState([]);


    useEffect(() => {
        getGifs(category)
            .then(images => setGifs(images))
    }, [])


    return (
        <>
            <section>
                {gifs.map(gif => {
                    return (
                        <article>
                            <h6>{gif.title}</h6>
                            <img src={gif.url} alt="gif" />
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default GiphyItem