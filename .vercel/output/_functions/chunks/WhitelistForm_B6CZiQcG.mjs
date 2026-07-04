import { C as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, n as renderScript, o as Fragment, v as addAttribute, w as createComponent, x as unescapeHTML } from "./server_CxqNCoH5.mjs";
import "./compiler_CpwG-MQt.mjs";
import { i as useTranslations, n as $$Button, r as getLangFromUrl } from "./BaseLayout_CnROnPHP.mjs";
//#region src/components/FeatureCard.astro
createAstro("https://astro.build");
var $$FeatureCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FeatureCard;
	const { title, description, icon } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="p-8 bg-white dark:bg-black/20 border-2 border-marron/20 dark:border-crema/20 rounded-2xl shadow-sm hover:shadow-md transition-all h-full flex flex-col items-start"><div class="w-14 h-14 flex items-center justify-center rounded-2xl bg-terracota/10 dark:bg-turquesa/10 text-terracota dark:text-turquesa mb-6 shrink-0 border border-terracota/20 dark:border-turquesa/20">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(icon)}` })}</div><h3 class="text-xl font-bold mb-3 text-marron dark:text-crema">${title}</h3><p class="text-marron/80 dark:text-crema/80 leading-relaxed">${description}</p></div>`;
}, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/components/FeatureCard.astro", void 0);
//#endregion
//#region src/components/FAQItem.astro
createAstro("https://astro.build");
var $$FAQItem = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FAQItem;
	const { question, answer, id } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="border-b border-marron/10 dark:border-crema/10 last:border-0 py-4"><button class="w-full flex justify-between items-center text-left font-semibold text-lg py-2 focus:outline-none text-marron dark:text-crema faq-button" aria-expanded="false"${addAttribute(`faq-answer-${id}`, "aria-controls")}><span>${question}</span><svg class="w-5 h-5 transform transition-transform faq-icon text-terracota dark:text-turquesa" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div${addAttribute(`faq-answer-${id}`, "id")} class="hidden mt-2 text-marron/70 dark:text-crema/70 faq-content"><p class="pb-2">${answer}</p></div></div>${renderScript($$result, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/components/FAQItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/components/FAQItem.astro", void 0);
//#endregion
//#region src/components/WhitelistForm.astro
createAstro("https://astro.build");
var $$WhitelistForm = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$WhitelistForm;
	const lang = getLangFromUrl(Astro.url);
	const t = useTranslations(lang);
	return renderTemplate`${maybeRenderHead($$result)}<div class="bg-white dark:bg-black/20 border-2 border-terracota/20 dark:border-turquesa/20 p-8 md:p-10 rounded-2xl max-w-2xl mx-auto shadow-sm transition-colors relative z-10 text-center md:text-left"><h3 class="text-3xl font-black mb-4 text-marron dark:text-crema">${t("whitelist.title")}</h3><p class="text-marron/80 dark:text-crema/80 mb-8 text-lg leading-relaxed">${t("whitelist.desc")}</p><form id="whitelist-form" class="flex flex-col gap-4"><div class="flex flex-col sm:flex-row gap-3 w-full"><input type="email" id="email" name="email" required pattern="[a-zA-Z0-9._%+\\\\-]+@[a-zA-Z0-9.\\\\-]+\\\\.[a-zA-Z]{2,}" title="Valid email required"${addAttribute(t("hero.placeholder"), "placeholder")} class="w-full sm:flex-1 h-11 px-5 rounded-2xl border-2 border-marron/20 dark:border-crema/20 bg-crema/30 dark:bg-black/20 focus:border-terracota dark:focus:border-turquesa focus:ring-0 outline-none text-marron dark:text-crema placeholder-marron/50 dark:placeholder-crema/50 transition-colors font-medium">${renderComponent($$result, "Button", $$Button, {
		"type": "submit",
		"variant": "primary",
		"class": "w-full sm:w-auto"
	}, { "default": ($$result) => renderTemplate`${t("whitelist.cta")}` })}</div><div class="flex items-start gap-3 mt-1"><input type="checkbox" id="privacy-consent" name="privacy-consent" required class="mt-1 w-4 h-4 rounded border-marron/20 text-terracota focus:ring-terracota bg-crema/30 dark:bg-black/20 dark:border-crema/20 cursor-pointer"><label for="privacy-consent" class="text-sm text-marron/80 dark:text-crema/80 leading-tight cursor-pointer">${t("whitelist.privacy")} <a${addAttribute(lang === "es" ? "/politica-privacidad" : "/ca/politica-privacidad", "href")} class="underline hover:text-terracota dark:hover:text-turquesa" target="_blank">${t("footer.privacy")}</a>.</label></div></form><div id="form-message" class="hidden mt-4 font-semibold text-center py-3 rounded-xl"></div></div>${renderScript($$result, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/components/WhitelistForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/components/WhitelistForm.astro", void 0);
//#endregion
export { $$FAQItem as n, $$FeatureCard as r, $$WhitelistForm as t };
