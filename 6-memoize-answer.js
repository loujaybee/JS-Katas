
const store = [];
const cacheResult = (args, result) => { store.push({ args, result }); return result; };
const findInStore = (props) => store.find( entry => entry.args.every( (arg, index) => arg == props[index]));
const memoize = (func) => (...props) => findInStore(props) ? findInStore(props).result : cacheResult(props, func(...props))

module.exports = memoize;