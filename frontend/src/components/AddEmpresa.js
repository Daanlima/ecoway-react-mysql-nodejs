import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const AddEmpresa = () => {
    const [companyname, setCompanyname] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
 
    const saveEmpresa = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/empresas',{
            companyname: companyname,
            email: email
        });
        history.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveEmpresa }>
                <div className="field">
                    <label className="label">Company name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Company name"
                        value={ companyname }
                        onChange={ (e) => setCompanyname(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">E-mail</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Emmail"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddEmpresa