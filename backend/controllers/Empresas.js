import Empresa from "../models/empresaModel.js";
 
export const getAllEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.findAll();
        res.json(empresas);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getEmpresaById = async (req, res) => {
    try {
        const empresa = await Empresa.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(empresa[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createEmpresa = async (req, res) => {
    try {
        await Empresa.create(req.body);
        res.json({
            "message": "Empresa Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateEmpresa = async (req, res) => {
    try {
        await Empresa.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Empresa Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteEmpresa = async (req, res) => {
    try {
        await Empresa.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Empresa Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}