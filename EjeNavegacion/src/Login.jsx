
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import { useSearchParams, Navigate, useNavigate } from "react-router-dom";



function Login() {

    const navigate = useNavigate();
    const [error, setError] = useState(""); // Estado para el error

    /*const [searchParams, setSearchParams] = useSearchParams();
    const auth = searchParams.get('auth');
    */

    function login(event) {
        event.preventDefault();
        //console.log(nombre, password);
        if (nombre === 'admin' && password === 'admin') {
            //setSearchParams({ auth: "true" });
            //<Navigate to="/admin?auth=true"" replace />
            navigate("/admin?auth=true");
        } else
            setError("Credenciales incorrectas");
    }



    const style = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "10px auto auto",
    };

    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');

    function cambiarNombre(event) {
        setNombre(event.target.value)
    }

    function cambiarPassword(event) {
        setPassword(event.target.value)
    }
    /*
    function validar() {
        event.preventDefault(); // Evita que se recargue la página
        if (props.nombre_correcto === nombre && props.password_correcto === password) {
            console.log("Bienvenido");
        } else {
            console.log("Sigue intentando");
        }
    }*/


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange={cambiarNombre}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={cambiarPassword}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={login}>
                Login
            </Button>
            {error && <p style={{ color: "red" }}>{error}</p>} {/*  Mostrar mensaje si hay error */}
        </Form >
    )
}

export default Login;