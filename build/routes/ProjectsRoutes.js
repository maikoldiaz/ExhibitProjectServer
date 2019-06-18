"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectController_1 = __importDefault(require("../controllers/ProjectController"));
class ProjectsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ProjectController_1.default.getAll);
        this.router.get('/:id', ProjectController_1.default.getId);
        this.router.post('/', ProjectController_1.default.create);
        this.router.put('/:id', ProjectController_1.default.update);
        this.router.delete('/:id', ProjectController_1.default.delete);
    }
}
const projectsRoutes = new ProjectsRoutes();
exports.default = projectsRoutes.router;
