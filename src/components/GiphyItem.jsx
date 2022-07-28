import React from 'react'
import "../App.css"


const GiphyItem = ({ gifs }) => {

    return (
        <>
            <section className='gif-section'>
                {gifs.map(gif => {
                    return (
                        <article key={gif.id} className='gif-article'>
                            <h6 className='gif-title'>{gif.title}</h6>
                            <img className='gif-img' src={gif.url} alt="gif" />
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default GiphyItem