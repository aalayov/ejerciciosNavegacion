import React from 'react';
import cursos from "./data/cursos.js";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Outlet, Link, useSearchParams } from "react-router-dom";

function Cursos() {
    const [searchParams, setSearchParams] = useSearchParams();

    const filtroCategoria = searchParams.get("categoria") || "";
    const filtroNivel = searchParams.get("nivel") || "";

    //...new Set para eliminar duplicados
    const categoriasUnicas = [...new Set(cursos.map((c) => c.categoria))];
    const nivelesUnicos = [...new Set(cursos.map((c) => c.nivel))];

    const cursosFiltrados = cursos.filter((curso) => {
        return (
            (filtroCategoria === "" || curso.categoria === filtroCategoria) && (filtroNivel === "" || curso.nivel === filtroNivel)
        );
    });

    //URLSearchParams para modificar los parámetros y setSearchParams para reflejar esos cambios en la URL.
    const actualizarFiltro = (clave, valor) => {
        const nuevosParams = new URLSearchParams(searchParams);
        if (valor === "") {
            nuevosParams.delete(clave);
        } else {
            nuevosParams.set(clave, valor);
        }
        setSearchParams(nuevosParams);
    };

    return (
        <div>
            <h2>CURSOS</h2>

            <div style={{ marginBottom: "1rem" }}>
                <h5>Categoría</h5>
                <Button variant={filtroCategoria === "" ? "secondary" : "outline-secondary"} onClick={() => actualizarFiltro("categoria", "")}>
                    Todas
                </Button>{" "}
                {categoriasUnicas.map((cat) => (
                    <Button
                        key={cat}
                        variant={filtroCategoria === cat ? "primary" : "outline-primary"}
                        onClick={() => actualizarFiltro("categoria", cat)}
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
                        onClick={() => actualizarFiltro("nivel", nivel)}
                        style={{ marginRight: "0.5rem" }}
                    >
                        {nivel}
                    </Button>
                ))}
            </div>

            <hr />


            <Container className="mt-4">
                <Row xs={1} sm={2} md={3} className="g-4">
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
