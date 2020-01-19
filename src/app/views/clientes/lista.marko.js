// Compiled using marko@4.18.34 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/perolacabelosafro$1.0.0/src/app/views/clientes/lista.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Bootstrap 101 Template</title><meta name=\"viewport\" content=\"width = device-width, initial-scale = 1.0\"><link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"><!--[if lt IE 9]>\r\n      <script src = \"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\r\n      <script src = \"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\r\n      <![endif]--></head><body>");

  component_globals_tag({}, out);

  out.w("<script src=\"https://code.jquery.com/jquery.js\"></script><script src=\"js/bootstrap.min.js\"></script><h1> Listagem de Clientes de Pérola Cabelos Afro </h1><table><tr><td>Id</td><td>Nome</td><td>Idade</td><td>WhatsApp</td><td>Facebook</td><td>Instagram</td><td>CPF</td><td>Endereço</td></tr>");

  var $for$0 = 0;

  marko_forOf(data.clientes, function(cliente) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(cliente.id) +
      "</td><td>" +
      marko_escapeXml(cliente.nome) +
      "</td><td>" +
      marko_escapeXml(cliente.idade) +
      "</td><td>" +
      marko_escapeXml(cliente.telefone) +
      "</td><td>" +
      marko_escapeXml(cliente.facebook) +
      "</td><td>" +
      marko_escapeXml(cliente.instagram) +
      "</td><td>" +
      marko_escapeXml(cliente.cpf) +
      "</td><td>" +
      marko_escapeXml(cliente.endereco) +
      "</td></tr>");
  });

  out.w("</table> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/perolacabelosafro$1.0.0/src/app/views/clientes/lista.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
