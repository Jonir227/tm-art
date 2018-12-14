import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import App from './App';
import routes from './routes';

const server = new App();

export let dbconn: Connection | null = null;
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
  dbconn = conn;
  server.start({ port: 8080, routes });
});
