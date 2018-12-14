import bodyParser from 'body-parser';
import chalk from 'chalk';
import express, { Router } from 'express';
import morgan from 'morgan';

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

  // middleware & plugins
  private init() {
    this.server.use(morgan('dev'));
    this.server.use(bodyParser.json());
  }
}

export default App;
