import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import { useTranslation } from "./context/LanguageContext.jsx";

// /admin: sólo debe mostrarse si la URL incluye ?auth=true, en caso contrario redirige automáticamente a /login usando <Navigate />.

function Admin() {
    //const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const auth = searchParams.get('auth');

    const { t } = useTranslation()

    return (
        <div>

            {auth ?
                <div>
                    <h1>{t('welcome')} </h1>
                    <h2>User : Admin</h2>
                    <Button variant="danger" onClick={() => navigate("/")}>Cerrar Sesion </Button>
                </div>
                :
                <Navigate to="/login" replace />
            }
        </div >
    )
}

export default Admin;