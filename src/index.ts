#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');
const { exec } = require('child_process');
//clear();
console.log(
  chalk.blue(
    figlet.textSync('neil-cli', { horizontalLayout: 'full' })
  )
);
program
  .version('0.0.1')
  .description("An example CLI for Say hello world")
  .option('-f, --force', 'Hello World!!!')
  .option('-r, --russel', 'Russel BOY!!!')
  .option('-l, --list', 'list dir!!!')
  .option('-d, --dockerps', 'docker ps !!!')
  .parse(process.argv);

console.log('you want to say:');


if (program.force) console.log('  - Force Hello World!!!');
if (program.russel) console.log('  - Russel BOY!!!');
if (program.list){
  console.log('  - List all!!!');
  console.log('\n');
  exec('ls',
        (error: any, stdout: any , stderr: any) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
}
if (program.dockerps){
  console.log('- List all container !!!');
  console.log('\n');
  exec('docker ps',
        (error: any, stdout: any , stderr: any) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
}
if (!process.argv.slice(2).length) {
  program.outputHelp();
}