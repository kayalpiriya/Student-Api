import { Router } from "express";
import { getStudents, postStudent } from
"../controllers/students.controller.js";

const r = Router();
r.get("/", getStudents);
r.post("/", postStudent);
export default r;