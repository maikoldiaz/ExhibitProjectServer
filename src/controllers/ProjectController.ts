import {Request, Response} from 'express';
import pool from '../dataBase';

class ProjectController{
    public async getAll(req: Request, res: Response): Promise<void>{
        const projects = await pool.query("SELECT * FROM Projects");
        res.json(projects);
    }
    public async getId(req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const projects = await pool.query("SELECT * FROM Projects WHERE id = ?",[id]);
        if(projects.length > 0){
            return res.json(projects[0]);
        }
        res.status(404).json({ message: "the project doesn't exists"})
    }
    public async create (req: Request, res : Response): Promise<void> {
        await pool.query('INSERT INTO Projects set ?', [req.body]);
        res.send({ message: "project saved"});
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query("UPDATE Projects set ? WHERE id = ?", [req.body,id]);
        res.json({ message: `update project ${req.params.id}` });
    } 
    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query("DELETE FROM Projects WHERE id = ?", [id]);
        res.json({ message: `deleted project ${id}`});
    } 
}
const projectController = new ProjectController();
export default projectController;