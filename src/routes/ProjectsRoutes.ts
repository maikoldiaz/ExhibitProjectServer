import { Router } from 'express';
import projectController from '../controllers/ProjectController'

class ProjectsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', projectController.getAll);
        this.router.get('/:id', projectController.getId);
        this.router.post('/', projectController.create);
        this.router.put('/:id', projectController.update);
        this.router.delete('/:id', projectController.delete);
    }
}

const projectsRoutes = new ProjectsRoutes();
export default projectsRoutes.router;