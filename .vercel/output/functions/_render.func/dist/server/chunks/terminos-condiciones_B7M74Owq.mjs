import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, w as createComponent } from "./server_CxqNCoH5.mjs";
import "./compiler_CpwG-MQt.mjs";
import { i as useTranslations, t as $$BaseLayout } from "./BaseLayout_CnROnPHP.mjs";
//#region src/pages/terminos-condiciones.astro
var terminos_condiciones_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TerminosCondiciones,
	file: () => $$file,
	url: () => $$url
});
var $$TerminosCondiciones = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": `Vontu | ${useTranslations("es")("footer.terms")}`,
		"description": "Términos y Condiciones de Vontu"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-4xl mx-auto px-4 py-32"><div class="prose max-w-4xl mx-auto px-4 py-12 dark:prose-invert prose-marron"><h1>Términos y Condiciones de Uso</h1><p><strong>Última actualización:</strong> Julio 2026</p><p>Bienvenido a la landing page de prelanzamiento de Vontu. El acceso y uso de este sitio web le atribuye la condición de usuario e implica la aceptación total de estos términos.</p><h3>1. Objeto del Sitio Web</h3><p>Este sitio web es una página de captación y validación comercial ("whitelist") para el futuro proyecto Vontu, un ecosistema de banco del tiempo vecinal. En el estado actual de la plataforma, no existen registros de cuentas activos, no se realizan transacciones económicas, ni se procesan pagos de ningún tipo.</p><h3>2. Exención de Responsabilidad</h3><p>Vontu actúa exclusivamente como un escaparate informativo en esta fase de prelanzamiento.</p><ul><li>El titular no se hace responsable de las expectativas de lanzamiento ni de los malentendidos derivados del concepto teórico del software explicado en el sitio web.</li><li>El titular queda totalmente eximido de cualquier tipo de responsabilidad civil, penal o por daños derivados de un uso indebido de la landing page por parte de terceros.</li></ul><h3>3. Propiedad Intelectual</h3><p>Todos los contenidos explicativos, el diseño de la interfaz, el nombre "Vontu" y los códigos de la plataforma son propiedad exclusiva de Pol Mas Torné o de sus respectivos licenciantes. Queda prohibida la reproducción total o parcial sin autorización previa.</p><h3>4. Modificaciones</h3><p>El titular se reserva el derecho a modificar las presentes condiciones, así como el contenido del sitio web, en cualquier momento y sin previo aviso para adaptarlos a novedades legislativas o a la evolución técnica del proyecto.</p></div></div>` })}`;
}, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/pages/terminos-condiciones.astro", void 0);
var $$file = "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/pages/terminos-condiciones.astro";
var $$url = "/terminos-condiciones";
//#endregion
//#region \0virtual:astro:page:src/pages/terminos-condiciones@_@astro
var page = () => terminos_condiciones_exports;
//#endregion
export { page };
