import { createContext, useState, useEffect } from "react";

export const themes = {
    light: {
        background: "white",
        color: "black"
    },
    dark: {
        background: "black",
        color: "white"
    },
};

/* 
Este contexto sirve para compartir información entre componentes sin necesidad de pasarla por props.
Aquí lo usaremos para compartir el idioma seleccionado y su contenido traducido.
*/
export const ThemeContext = createContext(); //contexto que contiene el idioma

export const ThemeProvider = ({ children }) => { //Su trabajo es proveer el contexto a los componentes hijos que estén dentro de él.

    // Solo se ejecuta una vez al inicio
    const getInitialTheme = () => {
        const storedTheme = localStorage.getItem("app-theme");
        return storedTheme === "dark" ? themes.dark : themes.light;
    };

    const [theme, setTheme] = useState(getInitialTheme); //use State para almacenar el idioma actual seleccionado y el texto en ese idioma

    useEffect(() => {
        const themeName = theme === themes.dark ? "dark" : "light";
        localStorage.setItem("app-theme", themeName);
    }, [theme]);

    const initialValue = { // variable que contiene idioma seleccionado y la funcion para poder modificarla
        theme, // idioma actual
        setTheme,// cambiamos el idioma seleccionado
    };

    return (
        /*entrega el valor del contexto (theme y settheme) a todos los componentes hijos que estén dentro del themeProvider.
        Esto permite que todos los componentes hijos puedan acceder a los valores del contexto y utilizarlos sin necesidad de pasarlos por props. */
        <ThemeContext.Provider value={initialValue}>
            {children}
        </ThemeContext.Provider>
    );
};

/* Themes: contiene los textos en varios idiomas.

ThemeContext: contexto para compartir el idioma.

ThemeProvider: componente que maneja y comparte el idioma actual.

useState: guarda y cambia el idioma actual.

settheme: cambia el idioma cuando el usuario lo elige.*/
