"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query = {
    Query: {
        hola() {
            return 'Hello world';
        },
        holaConNombre(__, { nombre }) {
            return `Hello world ${nombre}`;
        },
        holaAlCursoGraphQL() {
            return 'Hello world GraphQ';
        }
    }
};
exports.default = query;
