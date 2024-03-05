import express, { Application } from 'express';
import fs from 'node:fs';
import https from 'node:https';
import commandLineArgs, {
  CommandLineOptions,
  OptionDefinition,
} from 'command-line-args';
import { readAllLessons } from './read-all-lessons.route';

const app: Application = express();
app.use(express.json());
app.route('/api/lessons').get(readAllLessons);

const optionDefinitions: OptionDefinition[] = [
  { name: 'secure', type: Boolean },
];
const options: CommandLineOptions = commandLineArgs(optionDefinitions);
if (options['secure']) {
  // launch an HTTPS Server. Note: this does NOT mean that the application is secure
  https
    .createServer(
      {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem'),
      },
      app
    )
    .listen(9000, () =>
      console.log('HTTPS Secure Server running at https://localhost:9000')
    );
} else {
  // launch an HTTP Server
  app.listen(9000, () => {
    console.log('HTTP Server running at https://localhost:9000');
  });
}
