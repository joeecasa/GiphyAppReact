import React, { useState } from 'react'


const AddGiphyCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("")


    const onFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 2) return////el trim es para quitar espacios en blanco
        onNewCategory(inputValue.trim());
        setInputValue("");

    }

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    return (
        <section>
            <form onSubmit={onFormSubmit} >
                <input
                    type="text"
                    placeholder='ingrese la categoria'
                    value={inputValue}
                    onChange={onInputChange}
                />
                <input type="submit" />
            </form>
        </section>

    )
}

export default AddGiphyCategory



// api.giphy.com/v1/gifs/search?api_key:aFyhDnITL60fRZ0m4MeB6xl3YwhQ5aVl=perritos&limit=10