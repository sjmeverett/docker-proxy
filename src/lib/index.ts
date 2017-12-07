import * as rc from 'rc-yaml';
import * as commandLineArgs from 'command-line-args';
import * as Dolphin from 'dolphin';

const config = rc('docker-proxy');

const options = commandLineArgs([
  {name: 'listen', alias: 'l', description: 'the port or socket file to listen on', defaultValue: config.listen},
  {name: 'docker', alias: 'D', description: 'the docker instance to use', defaultValue: config.docker}
]);

async function run(options) {
  const dolphin = Dolphin({url: options.docker});
  const dockerVersion = await dolphin.version();
  console.log(dockerVersion);
}

run(options).catch(console.error);
