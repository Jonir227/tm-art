import chalk from 'chalk';
import express, { Router } from 'express';
import morgan from 'morgan';
import { createConnection } from 'typeorm';

export interface IServerSettings {
  port: string | number;
  routes: Router;
}

class App {
  private server = express();

  public async start({ port, routes }: IServerSettings) {
    console.log(chalk.blue('Starting Server ....'));
    try {
      this.init();
      // db conn
      console.log(chalk.blue('connecting DB....'));
      await this.connectDB();
      // server start
      this.server.listen(port, () => {
        console.log(chalk.green(`listening on port ${port}`));
      });
      this.server.use('/api', routes);
    } catch (err) {
      console.error(err);
      console.log(chalk.red('Server Start Failed!'));
    }
  }

  private connectDB = async () => {
    try {
    await createConnection({
      host: 'localhost',
      port: 27017,
      type: 'mongodb',
    });
    } catch(err) {
      throw new Error(err);
    }
  };

  // middleware & plugins
  private init() {
    this.server.use(morgan('dev'));
  }
}

export default App;
