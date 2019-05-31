import { Router } from 'express';

class ProjectsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', (req, res) => res.send("Hello exhibitProjects"));
    }
}

const projectsRoutes = new ProjectsRoutes();
export default projectsRoutes.router;