import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
function NotFound() {
    const navigate = useNavigate();

    function regresarInicio() {
        navigate("/")
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="display-1 fw-bold text-danger">404</h1>
                    <p className="fs-3">
                        {" "}
                        <span className="text-danger">Oops!</span> Página no encontrada.
                    </p>
                    <p className="lead">
                        La página que estás buscando no existe o fue movida.
                    </p>
                    <Button
                        className="btn btn-primary btn-lg mt-3"
                        onClick={regresarInicio}
                    >
                        Volver al Inicio
                    </Button>

                </div>
            </div>
        </div>
    );

}

export default NotFound;