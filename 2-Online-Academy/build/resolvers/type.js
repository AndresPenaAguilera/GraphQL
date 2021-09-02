"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_store_1 = require("../data/data.store");
const lodash_1 = __importDefault(require("lodash"));
const type = {
    Student: {
        courses: parent => {
            const coursesList = [];
            parent.courses.map((course) => {
                coursesList.push(lodash_1.default.filter(data_store_1.database.courses, ['id', course])[0]);
            });
            return coursesList;
        }
    },
    Course: {
        students: parent => {
            const studentsList = [];
            const idCurse = parent.id;
            data_store_1.database.students.map((student) => {
                if (student.courses.filter((id) => id === idCurse) > 0) {
                    studentsList.push(student);
                }
            });
            return studentsList;
        },
        path: parent => `https://www.udemt.com${parent.path}`
    }
};
exports.default = type;
