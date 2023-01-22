import { Router } from 'express';
import{obtenerCRespuesta} from "../controllers/respuestaController.js";

export const routerR = Router();

routerR.post("/respuestas/", crearCRespuesta);

export default routerR;