import React, { useState } from 'react'
import "../App.css"
import AddGiphyCategory from './AddGiphyCategory'
import GiphyGrid from './GiphyGrid'


const GiphyMainApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory))return
        setCategories([newCategory,...categories])

    }
    // const [inputValue, setInputValue] = useState("")
  

    // const onFormSubmit = (event) => {
    //     event.preventDefault();
    //     if (inputValue.trim().length < 2) return////el trim es para quitar espacios en blanco
    //     if (categories.includes(inputValue)) return
    //     setCategories([inputValue, ...categories]);
    //     setInputValue("");

    // }

    // const onInputChange = (event) => {
    //     setInputValue(event.target.value)
    // }

    return (
        <main className='App'>
            <section>
                <h1>
                    GiphyMainApp
                </h1>
            </section>
            {/* section addGiphyCategrory */}
            <section>
                {/* <form onSubmit={onFormSubmit} >
                    <input
                        type="text"
                        placeholder='ingrese la categoria'
                        value={inputValue}
                        onChange={onInputChange}
                    />
                </form> */}

                <AddGiphyCategory onNewCategory = { (inputvalue) => onAddCategory(inputvalue) } />
            </section>

            {/* section GiphyGrid */}
            <section>
                {
                    categories.map((category) => {
                        return (
                            <GiphyGrid key={category} category = {category}/>
                            
                        )
                    })
                }
            </section>
        </main>
    )
}

export default GiphyMainApp