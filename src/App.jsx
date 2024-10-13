
import styles from  './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'

function App() {

  let [calVal,setCalVal]= useState("");

  let getButtonName=(buttonText) => {

    console.log(buttonText)
   let typedValue=calVal+buttonText
   setCalVal(typedValue);

   if(buttonText==='C') {

    setCalVal("")

   }
   if(buttonText==='=') {
    let ans=eval(calVal);
    setCalVal(ans);
   }



  }
 
 
  return (
    <>
    <h1 style={{margin:'auto'}}>Calculator</h1>
    <div className={styles.container}>
     
     <Display displayValue={calVal}></Display>
     <ButtonsContainer onButtonClick={getButtonName}></ButtonsContainer>
     
    </div>
      
    </>
  )
}

export default App
