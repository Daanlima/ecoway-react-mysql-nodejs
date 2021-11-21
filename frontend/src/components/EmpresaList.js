import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const EmpresaList = () => {
    const [empresas, setEmpresa] = useState([]);
 
    useEffect(() => {
        getEmpresas();
    }, []);
 
    const getEmpresas = async () => {
        const response = await axios.get('http://localhost:5000/empresas');
        setEmpresa(response.data);
    }
 
    const deleteEmpresa = async (id) => {
        await axios.delete(`http://localhost:5000/empresas/${id}`);
        getEmpresas();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Empresa</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { empresas.map((empresa, index) => (
                        <tr key={ empresa.id }>
                            <td>{ index + 1 }</td>
                            <td>{ empresa.companyname }</td>
                            <td>{ empresa.email }</td>
                            <td>
                                <Link to={`/edit/${empresa.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteEmpresa(empresa.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default EmpresaList