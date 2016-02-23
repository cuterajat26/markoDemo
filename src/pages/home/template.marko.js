function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      _________node_modules_lasso_taglib_page_tag_js = __renderer(require("lasso/taglib/page-tag")),
      __tag = __helpers.t,
      _________node_modules_lasso_taglib_head_tag_js = __renderer(require("lasso/taglib/head-tag")),
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      _________node_modules_lasso_taglib_body_tag_js = __renderer(require("lasso/taglib/body-tag"));

  return function render(data, out) {
    __tag(out,
      _________node_modules_lasso_taglib_page_tag_js,
      {
        "packagePath": "./browser.json",
        "dirname": __dirname,
        "filename": __filename
      });

    out.w(' <!DOCTYPE html> <html><head><meta charset="UTF-8"><title>Marko Demo</title>');
    __tag(out,
      _________node_modules_lasso_taglib_head_tag_js,
      {});

    out.w('</head><body><h1>Marko Demo</h1> Hello ' +
      escapeXml(data.name));

    if (notEmpty(data.colors)) {
      out.w('<ul>');

      forEach(data.colors, function(color) {
        out.w('<li>' +
          escapeXml(color) +
          '</li>');
      });

      out.w('</ul>');
    }
    else {
      out.w('<div>There are no colors</div>');
    }
    __tag(out,
      _________node_modules_lasso_taglib_body_tag_js,
      {});

    out.w('</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);