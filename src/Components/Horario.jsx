import React from "react";
import "./Horario.css";

const Horario = (props) => {
    return (
        <>
            <div className="materias-container">
                {props.horario.length === 0 ? (
                    <h2 className="materias-header">No tienes materias</h2>
                ) : (
                    <>
                        <h2 className="materias-header">
                          Mi Horario: {props.horario.length} materias
                        </h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Clave</th>
                                    <th>Materia</th>
                                    <th>Hora</th>
                                    <th>Grupo</th>
                                </tr>
                            </thead>
                            {props.horario.map((e, index) => (
                                <tbody>
                                    <tr key={index}>
                                        <td>{e.clave}</td>
                                        <td>{e.materia}</td>
                                        <td>{e.hors}</td>
                                        <td>{e.serie}</td>
                                        <td>
                                            <button
                                                onClick={() => props.eliminar(e)}
                                                className="horario-button"
                                            >
                                             -
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </>
                )}

            </div>

        </>
    );
};

export default Horario;