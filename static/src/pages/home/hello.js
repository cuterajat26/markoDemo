$rmod.def("/src/pages/home/hello", function(require, exports, module, __filename, __dirname) { module.exports = function(name){
    return 'hello ' + name
}
});