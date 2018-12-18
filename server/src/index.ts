import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import App from './App';
import routes from './routes';

const server = new App();

createConnection({
  database: 'mandalart',
  entities: [__dirname + '/entities/**/*.ts'],
  host: 'localhost',
  logging: true,
  multipleStatements: true,
  port: 3306,
  synchronize: true,
  type: 'mariadb',
  username: 'root',
}).then(conn => {
  server.start({ port: 8080, routes });
});
