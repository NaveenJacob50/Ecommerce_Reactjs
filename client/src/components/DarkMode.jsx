import React, { useState } from 'react'
import LightButton from '../assets/website/light-mode-button.png'
import DarkButton from '../assets/website/dark-mode-button.png'

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    //access to html element
    const element=document.documentElement

    //set theme to localStorage and html element
    React.useEffect(()=>{
        localStorage.setItem("theme",theme)
        if(theme==="dark"){
            element.classList.add("dark")
        }
        else{
            element.classList.remove("dark")
        }
    })

    return (
        <div className='relative'>
            <img 
                src={LightButton} 
                alt="Light Mode Button" 
                onClick={toggleTheme} 
                className={`w-12 cursor-pointer absolute right-0 
                    z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}
                    transition-all duration-300`}
            />
            <img 
                src={DarkButton} 
                alt="Dark Mode Button" 
                onClick={toggleTheme} 
                className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    );
}

export default DarkMode;
