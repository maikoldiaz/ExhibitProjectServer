"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProjectsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send("Hello exhibitProjects"));
    }
}
const projectsRoutes = new ProjectsRoutes();
exports.default = projectsRoutes.router;
