import cursos from "./data/cursos.js";
import { useParams } from 'react-router-dom';

function CursoDetalle() {
    const parametros = useParams();
    const id = parseInt(parametros.id, 10); // Convertir a número

    const curso = cursos.find((curso) => curso.id === id);

    return (
        <>
            <div className="container mt-5">
                {curso ? (
                    <div key={curso.id} className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="card-title text-primary">{curso.titulo}</h1>
                            <p className="card-text">{curso.descripcion}</p>
                            <p className="badge bg-secondary me-2">{curso.categoria}</p>
                            <p className="badge bg-info text-dark">{curso.nivel}</p>
                        </div>
                    </div>
                ) : (
                    <div className="alert alert-danger text-center" role="alert">
                        Curso no encontrado
                    </div>
                )}
            </div>
        </>
    )

}


export default CursoDetalle;