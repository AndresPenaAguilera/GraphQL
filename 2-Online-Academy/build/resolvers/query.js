"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_store_1 = require("../data/data.store");
const query = {
    Query: {
        students() {
            return data_store_1.database.students;
        },
        student(__, { id }) {
            const result = data_store_1.database.students.filter(student => student.id === id)[0];
            if (result === undefined) {
                return {
                    id: '-1',
                    name: `Not found student with ID ${id}`,
                    email: '',
                    courses: []
                };
            }
            ;
            return result;
        },
        courses() {
            return data_store_1.database.courses;
        },
        course(__, { id }) {
            const result = data_store_1.database.courses.filter(course => course.id === id)[0];
            if (result === undefined) {
                return {
                    id: '-1',
                    title: `Not found course with ID ${id}`,
                    description: 'Not found',
                    clases: 0,
                    time: 0,
                    level: 'ALL',
                    logo: 'Not found',
                    path: 'Not found',
                    teacher: 'Not found',
                    students: [],
                    reviews: []
                };
            }
            ;
            return result;
        }
    }
};
exports.default = query;
