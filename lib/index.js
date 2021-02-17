#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
var exec = require('child_process').exec;
//clear();
console.log(chalk.blue(figlet.textSync('neil-cli', { horizontalLayout: 'full' })));
program
    .version('0.0.1')
    .description("An example CLI for Say hello world")
    .option('-f, --force', 'Hello World!!!')
    .option('-r, --russel', 'Russel BOY!!!')
    .option('-l, --list', 'list dir!!!')
    .option('-d, --dockerps', 'docker ps !!!')
    .parse(process.argv);
console.log('you want to say:');
if (program.force)
    console.log('  - Force Hello World!!!');
if (program.russel)
    console.log('  - Russel BOY!!!');
if (program.list) {
    console.log('  - List all!!!');
    console.log('\n');
    exec('ls', function (error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log("exec error: " + error);
        }
    });
}
if (program.dockerps) {
    console.log('- List all container !!!');
    console.log('\n');
    exec('docker ps -a', function (error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log("exec error: " + error);
        }
    });
}
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
