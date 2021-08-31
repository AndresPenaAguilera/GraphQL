import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";
import _ from "lodash";
import { cursorTo } from "readline";


const mutation : IResolvers = {
   Mutation:{
        newCourse(__:void,{ course }): any{
            const itemCurse ={
                id: String(database.courses.length + 1),
                title: course.title,
                description: course.description,
                clases: course.clases,
                time: course.time,
                level: course.level,
                logo: course.logo,
                path: course.path,
                teacher: course.teacher,
                reviews: []
            }

            if(database.courses.filter(course => course.title === itemCurse.title).length ===0)
            {
                database.courses.push(itemCurse);
                return itemCurse;
            }

            return {
                id: '-1',
                title: `There is already one with that title: ${ itemCurse.title }`,
                description: '',
                clases: '-1',
                time: 0,
                level: "ALL",
                logo: '',
                path: '',
                teacher: '',
                reviews: []
            }
        },
        updateCourse(__:void, { course }): any{
            const indexExist = _.findIndex(database.courses, function(o){
                return o.id === course.id;
            });

            if (indexExist>-1){

                const reviews = database.courses[indexExist].reviews;
                course.reviews = reviews;
                database.courses[indexExist] = course;
                
                return course;
            }

            return {
                id: '-1',
                title: `The course does not exist in the database: ${ course.title }`,
                description: '',
                clases: '-1',
                time: 0,
                level: "ALL",
                logo: '',
                path: '',
                teacher: '',
                reviews: []
            }
        },

        deleteCourse(__:void, { id }): any{
            const deleteCourse = _.remove(database.courses, function(course){
                return course.id === id;
            });

            if (deleteCourse[0] === undefined){
                return {
                    id: '-1',
                    title: `The course does not exist in the database: ${ id }`,
                    description: '',
                    clases: '-1',
                    time: 0,
                    level: "ALL",
                    logo: '',
                    path: '',
                    teacher: '',
                    reviews: []
                }
            }
            return deleteCourse[0];
        }

   }
}

export default mutation;