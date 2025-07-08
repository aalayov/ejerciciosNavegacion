import { createContext, useState, useContext } from "react";

export const translations = {
    es: {
        home: "Inicio",
        courses: "Cursos",
        admin: "Administración",
        login: "Iniciar sesión",
        welcome: "Bienvenido al portal de cursos",
        courseList: "Lista de cursos",
    },
    en: {
        home: "Home",
        courses: "Courses",
        admin: "Admin",
        login: "Login",
        welcome: "Welcome to the course portal",
        courseList: "Course List",
    },
};

export const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('es');
    const initialValue = { // variable que contiene idioma seleccionado y la funcion para poder modificarla
        lang, // idioma actual
        setLang,// cambiamos el idioma seleccionado
    };
    return (
        <LanguageContext.Provider value={initialValue}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook personalizado para traducciones
export const useTranslation = () => {
    const { lang } = useContext(LanguageContext);
    const t = (key) => translations[lang][key] || key;
    return { t, lang };
};