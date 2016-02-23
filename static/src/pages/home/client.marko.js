$rmod.def("/src/pages/home/client.marko", function(require, exports, module, __filename, __dirname) { function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<div style="border: 1px solid red;padding: 15px;">Hello ' +
      escapeXml(data.name) +
      '!</div>');
  };
}
(module.exports = require('/$/marko'/*"marko"*/).c(__filename)).c(create);
});