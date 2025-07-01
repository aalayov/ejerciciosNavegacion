import { Navigate, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

// /admin: sólo debe mostrarse si la URL incluye ?auth=true, en caso contrario redirige automáticamente a /login usando <Navigate />.

function Admin() {
    //const [searchParams, setSearchParams] = useSearchParams();
    const [searchParams] = useSearchParams();
    const auth = searchParams.get('auth');

    return (
        <div>
            {auth ? <h1>Bienvenido Admin</h1> :
                <Navigate to="/login" replace />
            }
        </div>
    )
}

export default Admin;