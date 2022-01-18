
// CommonJS, Every file in node is module, by default
// Modules = Encapsulated Code

//this how u import
//note: the result of this depends on what u export from these modules
const names = require('./4-names-module');
const sayHi = require('./5-utils-module')
const alt = require('./6-alternative-flavor')
console.log(names)
console.log(alt)

//mind-grenade
//it invoked the function you called inside the module
require('./7-mind-grenade')

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);


