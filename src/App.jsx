import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  return (
    <>
   <ButtonComponent tag="Click"/>
   <ButtonComponent tag="Save"/>
   <ImageComponent src="https://placedog.net/400x200"  alt ="doggo"/>
   <ImageComponent src="https://placecats.com/400/200"  alt ="catto"/>
    </>
  )
}

export default App
