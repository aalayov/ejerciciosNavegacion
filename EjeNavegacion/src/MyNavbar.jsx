import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { ThemeContext, themes } from './context/ThemeContext.jsx';
import { useEffect, useContext } from "react";
import { LanguageContext, useTranslation } from "./context/LanguageContext.jsx";

function MyNavbar() {

    //const [count, setCount] = useState(0)
    /*const [searchParams] = useSearchParams();
    const auth = searchParams.get('auth'); */
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation()


    const { theme, setTheme } = useContext(ThemeContext); //themeContext viene de la clase themeContext


    //const [currentTheme, setcurrentTheme] = useState("light"); // state para variar el idioma
    const currentTheme = theme === themes.dark ? "dark" : "light";


    const changeTheme = () => {
        /*console.log(thm);
        setcurrentTheme(thm);*/
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(themes[newTheme]); // themes(diccionario) viene de la clase themeContext
    };

    // Cambia clase del <body> cada vez que cambia el tema
    useEffect(() => {
        document.body.className = ''; // limpia cualquier clase previa
        document.body.classList.add(`theme-${currentTheme}`);
    }, [currentTheme]);


    return (
        <>
            <div
                className="position-absolute top-0 start-0 m-3"
                style={{ zIndex: 1000 }}
            >
                <select
                    id="languageSelect"
                    className="form-select"
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </div>
            <Navbar expand="lg" className={`custom-navbar theme-${currentTheme}`} >
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">
                                {t('home')}
                            </Link>
                            <Link to="/cursos" className="nav-link">
                                {t('courses')}
                            </Link>
                            <Link to="/admin" className="nav-link">
                                {t('admin')}
                            </Link>
                            <Link to="/login" className="nav-link">
                                {t('login')}
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div style={{ marginBottom: "20px" }}>
                    <Button
                        variant="success"
                        onClick={changeTheme}
                        style={{
                            backgroundColor: currentTheme === "dark" ? "#646cff" : "#333",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "14px"
                        }}
                    >
                        {currentTheme === 'light' ? 'Dark' : 'Light'}
                    </Button>
                </div>
            </Navbar >
        </>
    );
}

export default MyNavbar;