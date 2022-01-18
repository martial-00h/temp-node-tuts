//npm = global command, comes with node
//npm --version        (check if npm is installed)

//local depndency - use it only in this particular project
//npm i <packageName>


//global dependency - use it in any project
//npm install -g <packageName>


//package.json - manifest file (stores important info about project/package)
//WAYS of creating package.json
//1) manual approach (create package.json in the root, create properties etc)
//2) npm init (step by step, press enter to skio)
//3) npm init -y (everything default)
//
//

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(items)
console.log(newItems)
