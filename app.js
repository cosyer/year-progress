#!/usr/bin/env node
"use strict";

const chalk = require("chalk");

function getDate() {
  const initialDate = new Date(new Date().getFullYear(), 0, 1);
  return (
    (((new Date() - initialDate) / (1000 * 60 * 60 * 24)) * 100) /
    365
  ).toFixed(2);
}

function yearProgress() {
  let year = getDate();
  let yearBarInit = "Year Progress --> [";
  let yearBar = "";
  for (let i = 5; i <= 100; i += 5) {
    yearBar = i < year ? yearBar + "▓" : yearBar + "░";
  }
  let result =
    chalk.green(yearBarInit) +
    chalk.gray(yearBar) +
    chalk.green(`]-[${year}%]`);
  console.log(result);
  return result;
}

yearProgress();
