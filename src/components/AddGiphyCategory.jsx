import React, { useState } from 'react'


const AddGiphyCategory = ({ onNewCategory,reset }) => {
    const [inputValue, setInputValue] = useState("")
   let errorForm= document.querySelector("#errorForm")

   
    


    const onFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 2) {return}////el trim es para quitar espacios en blanco
        onNewCategory(inputValue.trim());
        setInputValue("");
        
    }
    const onFormKeyUp = (event) =>{
        if(inputValue.trim().length < 2){
            errorForm.classList.remove('none')
            errorForm.classList.add('show')
            
        } else{
            errorForm.classList.add('none')
            errorForm.classList.remove('show')
            
        }
    }

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    
    return (
        <section>
            <form className='gif-form' onSubmit={onFormSubmit} onKeyPress={ onFormKeyUp }  >
                <label htmlFor="completa" >Ingrese la categoria</label>
                <input
                name='completa'
                    type="text"
                    placeholder='ingrese la categoria'
                    value={inputValue}
                    onChange={onInputChange}
                />
                <div id='errorForm' className='none errorText'>Debe ingresar minimo 2 letras</div>
                
                <input name='enviar' type="submit" />
                <input name='borrar' type="submit" onClick={reset} value="Restablecer"/>
            </form>
        </section>

    )
}

export default AddGiphyCategory



// api.giphy.com/v1/gifs/search?api_key:aFyhDnITL60fRZ0m4MeB6xl3YwhQ5aVl=perritos&limit=10