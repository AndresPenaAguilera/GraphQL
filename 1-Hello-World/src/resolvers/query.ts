import { IResolvers } from "@graphql-tools/utils";

const query : IResolvers ={
    Query:{
        hola(): String{
            return 'Hello world';
        },
        holaConNombre(__: void, { nombre }): String{
            return `Hello world ${nombre}`;
        },
        holaAlCursoGraphQL():String{
            return 'Hello world GraphQ'; 
        }
    }
}

export default query;