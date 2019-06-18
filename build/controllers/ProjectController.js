"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataBase_1 = __importDefault(require("../dataBase"));
class ProjectController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield dataBase_1.default.query("SELECT * FROM Projects");
            res.json(projects);
        });
    }
    getId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const projects = yield dataBase_1.default.query("SELECT * FROM Projects WHERE id = ?", [id]);
            if (projects.length > 0) {
                return res.json(projects[0]);
            }
            res.status(404).json({ message: "the project doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dataBase_1.default.query('INSERT INTO Projects set ?', [req.body]);
            res.send({ message: "project saved" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield dataBase_1.default.query("UPDATE Projects set ? WHERE id = ?", [req.body, id]);
            res.json({ message: `update project ${req.params.id}` });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield dataBase_1.default.query("DELETE FROM Projects WHERE id = ?", [id]);
            res.json({ message: `deleted project ${id}` });
        });
    }
}
const projectController = new ProjectController();
exports.default = projectController;
