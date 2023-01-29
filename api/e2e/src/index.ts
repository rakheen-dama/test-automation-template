const common = './src/features/**/*.feature \
    --require-module ts-node/register \
    --require ./src/step_definitions/**/**/*.ts \
    -f json:./reports/report.json \
    --format progress-bar';

//cucumber-js src/features/**/*.feature --require-module ts-node/register --require src/step-definitions/**/**/*.ts

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

console.log(`\n ☮︎ ☮︎ ☮︎ ☮︎ ☮︎ ☮︎ ☮︎ ☮︎ \n`);

export { dev, smoke, regression };
