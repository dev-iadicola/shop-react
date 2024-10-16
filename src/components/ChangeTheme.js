import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';


const getValueFromLocalStorage = () =>{
    if(localStorage.getItem('theme')){
      return localStorage.getItem('theme');
    }else{
      return 'light-mode';
    }
  }
const ChangeTheme = () => {
    
    const [theme, setTheme] = useState(getValueFromLocalStorage());

  // theme change in html change classname (dark o light)
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);

  }, [theme])


  // fun arrow change tehme 
  const chagneTheme = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  }

  
  return (

    

    <button className="btn my-5  mx-5" style={{width:'100px'}} onClick={chagneTheme}>
    Change
  </button>
)
}

export default ChangeTheme