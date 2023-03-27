import PropTypes from "prop-types";
import "./Materias.css";

const Materias = (props) => {
    return (
        <>
            <div className="materias-container">
                <h2 className="materias-header">Materias</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Clave</th>
                            <th>Materia</th>
                            <th>Hora</th>
                            <th>Grupo</th>
                        </tr>
                    </thead>
                    {props.materias.map((n, id) => (
                        <tbody key={id}>
                            <tr>
                                <td>{n.clave}</td>
                                <td>{n.materia}</td>
                                <td>{n.hors}</td>
                                <td>{n.serie}</td>
                                <td>
                                    <button
                                        onClick={() => props.agregar(n)}
                                        className="materias-button"
                                    >
                                        +
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    );
};

export default Materias;

Materias.propTypes = {
    clave: PropTypes.string,
    materia: PropTypes.string,
    hors: PropTypes.string,
    serie: PropTypes.string,
};
