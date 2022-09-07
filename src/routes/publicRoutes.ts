import {Router} from "express";
import PublicController from '../controller/publicController';
import MiddleWare from "../middleware/middleware";
const router: Router = Router();
const {middleFunction} = new MiddleWare();
const controller = new PublicController()
router.get('/', middleFunction, controller.indexController);
router.post('/post', middleFunction, controller.someController);

export default router;