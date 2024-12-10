import download from 'download-git-repo';
import chalk from 'chalk';
import ora from 'ora';

export default (remote, name, option) => {
  const downSpinner = ora('正在下载模板...').start();
  console.log('remote', remote);
  console.log('option', option);
  return new Promise((resolve, reject) => {
    download(remote, name, option, (err) => {
      if (err) {                               
        downSpinner.fail();
        console.log('err', chalk.red(err));
        reject(err);
        return;
      }
      downSpinner.succeed(chalk.green('模板下载成功！'));
      console.log(chalk.green(`cd ${name}\r\n`));
      console.log(chalk.blue('pnpm install\r\n'));
      console.log('pnpm run build:apui2\r\n');
      console.log('pnpm run apui2:dev\r\n');
      resolve();
    });
  });
};
