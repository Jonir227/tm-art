import App from "./App";
import routes from "./routes";

const server = new App();

server.start({ port: 8080, routes });
