"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = __importDefault(require("./schema"));
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
const app = (0, express_1.default)();
app.use('*', (0, cors_1.default)());
app.use((0, compression_1.default)());
const server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    introspection: true
});
server.start().then(res => {
    server.applyMiddleware({ app });
    app.get('/', (0, graphql_playground_middleware_express_1.default)({
        endpoint: '/graphql'
    }));
    const httpServer = (0, http_1.createServer)(app);
    const PORT = 5200;
    httpServer.listen({
        port: PORT
    }, () => console.log(`Hello world API GraphQL http://localhost:${PORT}`));
});
