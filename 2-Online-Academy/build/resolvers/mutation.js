"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_store_1 = require("../data/data.store");
const lodash_1 = __importDefault(require("lodash"));
const mutation = {
    Mutation: {
        newCourse(__, { course }) {
            const itemCurse = {
                id: String(data_store_1.database.courses.length + 1),
                title: course.title,
                description: course.description,
                clases: course.clases,
                time: course.time,
                level: course.level,
                logo: course.logo,
                path: course.path,
                teacher: course.teacher,
                reviews: []
            };
            if (data_store_1.database.courses.filter(course => course.title === itemCurse.title).length === 0) {
                data_store_1.database.courses.push(itemCurse);
                return itemCurse;
            }
            return {
                id: '-1',
                title: `There is already one with that title: ${itemCurse.title}`,
                description: '',
                clases: '-1',
                time: 0,
                level: "ALL",
                logo: '',
                path: '',
                teacher: '',
                reviews: []
            };
        },
        updateCourse(__, { course }) {
            const indexExist = lodash_1.default.findIndex(data_store_1.database.courses, function (o) {
                return o.id === course.id;
            });
            if (indexExist > -1) {
                const reviews = data_store_1.database.courses[indexExist].reviews;
                course.reviews = reviews;
                data_store_1.database.courses[indexExist] = course;
                return course;
            }
            return {
                id: '-1',
                title: `The course does not exist in the database: ${course.title}`,
                description: '',
                clases: '-1',
                time: 0,
                level: "ALL",
                logo: '',
                path: '',
                teacher: '',
                reviews: []
            };
        },
        deleteCourse(__, { id }) {
            const deleteCourse = lodash_1.default.remove(data_store_1.database.courses, function (course) {
                return course.id === id;
            });
            if (deleteCourse[0] === undefined) {
                return {
                    id: '-1',
                    title: `The course does not exist in the database: ${id}`,
                    description: '',
                    clases: '-1',
                    time: 0,
                    level: "ALL",
                    logo: '',
                    path: '',
                    teacher: '',
                    reviews: []
                };
            }
            return deleteCourse[0];
        }
    }
};
exports.default = mutation;
