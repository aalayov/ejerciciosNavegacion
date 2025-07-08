import React from 'react';
import cursos from "./data/data.js";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

import { useTranslation } from "./context/LanguageContext.jsx";
//import { useContext } from "react";

function Cursos() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { t } = useTranslation()

    const filtroCategoria = searchParams.get("categoria") || "sinFiltro"; //si no contiene categoria lo deja en sinFiltro
    const filtroNivel = searchParams.get("nivel") || "sinFiltro";

    //...new Set para eliminar duplicados
    const categoriasUnicas = [...new Set(cursos.map((c) => c.categoria))];
    const nivelesUnicos = [...new Set(cursos.map((c) => c.nivel))];

    /*
    Si filtroCategoria o filtroNivel están vacíos (""), no filtra por ese campo.
    Si no están vacíos, filtra por coincidencia exacta en curso.categoria y curso.nivel.
 */

    const cursosFiltrados = cursos.filter((curso) => {
        return (
            (filtroCategoria === "sinFiltro" || curso.categoria === filtroCategoria) && (filtroNivel === "sinFiltro" || curso.nivel === filtroNivel)
        );
    });

    //URLSearchParams para modificar los parámetros y setSearchParams para reflejar esos cambios en la URL.
    /* 
    clave: el nombre del parámetro (por ejemplo, "categoria" o "nivel").
    valor: el nuevo valor para ese parámetro.
    */
    const actualizarFiltro = (clave, valor) => {
        const nuevosParams = new URLSearchParams(searchParams);
        if (valor === "") { //si no hau valor entonces no se considera en la URL
            nuevosParams.delete(clave); //eliminamos la clave de la url
        } else {
            nuevosParams.set(clave, valor); // si hay valor entonces en la url se modifica cursos?clave=valor / cursos?categoria=frontend 
            //en nuestro caso tenemos dos claves (categoria y nivel), por lo tanto comprueba si se utiliza ambas, una o ninguna
        }
        setSearchParams(nuevosParams);
    };

    return (
        <div>
            <h2>{t('courseList')}</h2>

            <div style={{ marginBottom: "1rem" }}>
                <h5>Categoría</h5>
                <Button variant={filtroCategoria === "" ? "secondary" : "outline-secondary"} onClick={() => actualizarFiltro("categoria", "")}>
                    Todas
                </Button>{" "}
                {categoriasUnicas.map((cat) => (
                    <Button
                        key={cat}
                        variant={filtroCategoria === cat ? "primary" : "outline-primary"}
                        onClick={() => actualizarFiltro("categoria", cat)}  //mandamos en la url /cursos?categoria=frontend
                        style={{ marginRight: "0.5rem" }}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            <div style={{ marginBottom: "1rem" }}>
                <h5>Nivel</h5>
                <Button variant={filtroNivel === "" ? "secondary" : "outline-secondary"} onClick={() => actualizarFiltro("nivel", "")}>
                    Todos
                </Button>{" "}
                {nivelesUnicos.map((nivel) => (
                    <Button
                        key={nivel}
                        variant={filtroNivel === nivel ? "success" : "outline-success"}
                        onClick={() => actualizarFiltro("nivel", nivel)} //mandamos en la url /cursos?nivel=intermedio
                        style={{ marginRight: "0.5rem" }} //si se utiliza ambas quedaria la url  /cursos?categoria=frontend&nivel=intermedio
                    >
                        {nivel}
                    </Button>
                ))}
            </div>

            <hr />


            <Container className="mt-4">
                <Row xs={1} sm={1} md={2} className="g-3">
                    {cursosFiltrados.map((curso) => (
                        <Col key={curso.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{curso.titulo}</Card.Title>
                                    <Link to={`/curso/${curso.id}`}>
                                        <Button variant="primary">Ver curso</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Cursos;
