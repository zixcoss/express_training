import type { Request,Response,Router } from "express";
import express from "express";

const router:Router = express.Router();
router.use('/',(req:Request, res:Response) =>{
    res.json({message: 'Home'});
});

export default router;