import dotenv from 'dotenv';
import {env, getJsonFromFile} from "./env/parseEnv";
import {GlobalConfig, HostsConfig} from "./env/global";

dotenv.config({ path: env('COMMON_CONFIG_FILE') });

const hostsConfig: HostsConfig = getJsonFromFile(env('HOSTS_URLS_PATH'));

const worldParameters: GlobalConfig = {
    hostsConfig
}

const common = `./src/features/**/*.feature \
    --require-module ts-node/register \
    --require ./src/step-definitions/**/*.ts \
    --world-parameters ${JSON.stringify(worldParameters)} \
    -f json:./reports/report.json \
    --format progress-bar`;

//cucumber-js src/features/**/*.feature --require-module ts-node/register --require src/step-definitions/**/**/*.ts

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

console.log(`\n 🙏 🙏 🙏 🙏 🙏 🙏 🙏 🙏 🙏 🙏 🙏 🙏 🙏 🙏\n`);

export { dev, smoke, regression };
