/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
 
const EditEmpresa = () => {
    const [companyname, setCompanyname] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    const { id } = useParams();
 
    const updateEmpresa = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/empresas/${id}`,{
            companyname: companyname,
            email: email
        });
        history.push("/");
    }
 
    useEffect(() => {
        getEmpresaById();
    }, []);
 
    const getEmpresaById = async () => {
        const response = await axios.get(`http://localhost:5000/empresas/${id}`);
        setCompanyname(response.data.companyname);
        setEmail(response.data.email);
    }
 
    return (
        <div>
            <form onSubmit={ updateEmpresa }>
                <div className="field">
                    <label className="label">Company Name:</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Company Name"
                        value={ companyname }
                        onChange={ (e) => setCompanyname(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditEmpresa