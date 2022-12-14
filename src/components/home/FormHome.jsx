import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setUserNameGlobal} from '../../store/slices/userName.slice'

const FormHome = () => {

  //Cada vez que se usa un actions va useDispatch 
  const dispatch = useDispatch()
  //Hooks para navegar en rutas protegidas
  const navigate = useNavigate()


  const submit = e =>{
    e.preventDefault()

    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
    navigate('/pokedex')//Navega hacia pokedex

  }

  return (
    <form onSubmit={submit}
    className='pokedex__form'>
        <input 
        className ='pokedex__input' 
        type="text"
        placeholder='Enter your name here' 
        />
        <button className='pokedex__btn' >Catch them all</button>
      </form>
  )
}

export default FormHome