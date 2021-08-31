import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";


const query : IResolvers = {
    Query:{
        students(): any{
            return database.students;
        },

        student(__: void, { id }): any{
            const result = database.students.filter(student=>student.id ===id)[0];
            if (result === undefined){
                return { 
                    id:'-1',
                    name: `Not found student with ID ${id}`,
                    email:'',
                    courses: []

                };
            };

            return result;
        },

        courses(): any{
            return database.courses;
        },

        course(__:void, { id }): any{
            const result = database.courses.filter(course=> course.id === id)[0];
            if (result === undefined){
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
            };
            return result;
        }
    }
}

export default query;