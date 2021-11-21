import express from "express";
 
import { 
    getAllEmpresas,
    createEmpresa,
    getEmpresaById,
    updateEmpresa,
    deleteEmpresa
} from "../controllers/Empresas.js";
 
const router = express.Router();
 
router.get('/', getAllEmpresas);
router.get('/:id', getEmpresaById);
router.post('/', createEmpresa);
router.patch('/:id', updateEmpresa);
router.delete('/:id', deleteEmpresa);
 
export default router;