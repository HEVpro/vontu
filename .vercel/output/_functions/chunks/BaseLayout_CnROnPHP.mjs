import { C as createAstro, _ as renderHead, a as renderComponent, f as renderTemplate, g as maybeRenderHead, l as renderSlot, v as addAttribute, w as createComponent } from "./server_CxqNCoH5.mjs";
import "./compiler_CpwG-MQt.mjs";
var ui = {
	es: {
		"nav.features": "Características",
		"nav.howItWorks": "Cómo Funciona",
		"nav.faq": "Preguntas Frecuentes",
		"nav.whitelist": "Unirse a la Whitelist",
		"hero.title": "Cambia lo que sabes hacer por lo que necesitas recibir. Cerca de ti.",
		"hero.subtitle": "Vontu es la aplicación de tu barrio donde cuidas el perro de un vecino y, a cambio, recibes clases de Excel de otro. Sin dinero de por medio, midiendo el valor en tiempo. ¿No tienes tiempo libre esta semana? También puedes adquirir créditos de tiempo de forma sencilla para resolver tus urgencias locales.",
		"hero.cta": "Reservar mi acceso prioritario",
		"hero.placeholder": "Tu correo electrónico",
		"features.title": "Todo lo que necesitas para intercambiar tiempo",
		"features.geo.title": "Servicios Geolocalizados",
		"features.geo.desc": "Encuentra ayuda en tu calle o barrio. La confianza empieza por la proximidad local.",
		"features.profiles.title": "Perfiles y Habilidades",
		"features.profiles.desc": "Muestra tus mejores habilidades y descubre el talento oculto de tus vecinos cercanos.",
		"features.reviews.title": "Confianza Comunitaria",
		"features.reviews.desc": "Valoraciones basadas en respeto y fiabilidad para interactuar con total seguridad.",
		"features.credits.title": "Créditos Flexibles",
		"features.credits.desc": "Cada hora de ayuda equivale a créditos. Úsalos o adquiere saldo si lo necesitas.",
		"how.title": "Cómo Funciona",
		"how.step1.title": "1. Publica u Ofrece",
		"how.step1.desc": "Di qué necesitas o en qué puedes echar una mano a la comunidad.",
		"how.step2.title": "2. Acumula o Intercambia",
		"how.step2.desc": "Realiza el favor, valida el tiempo dedicado y recibe tus créditos digitales de forma segura en tu perfil.",
		"how.step3.title": "3. Disfruta y Gestiona",
		"how.step3.desc": "Gasta tus créditos aprendiendo algo nuevo, solucionando una avería en casa o comprando saldo de tiempo si necesitas ayuda inmediata.",
		"whitelist.title": "Únete a la comunidad de intercambio de confianza local.",
		"whitelist.desc": "Regístrate hoy para recibir créditos de regalo en el lanzamiento y ser el primero en activar tu zona.",
		"whitelist.cta": "Unirme ahora",
		"whitelist.privacy": "He leído y acepto la",
		"whitelist.success": "¡Gracias por unirte! Te mantendremos informado.",
		"whitelist.error": "Hubo un error al registrarte. Inténtalo de nuevo.",
		"faq.title": "Preguntas Frecuentes",
		"faq.q1": "¿Qué es exactamente un Banco del Tiempo?",
		"faq.a1": "Es un sistema donde la moneda oficial no es el euro, sino tu tiempo. Ayudas a alguien durante una hora y ganas una hora de crédito para gastar en lo que tú elijas.",
		"faq.q2": "¿Tengo que hacerle el favor exactamente a la misma persona que me ayuda a mí?",
		"faq.a2": "No, los créditos se acumulan en tu monedero digital de Vontu. Puedes cuidar el gato del vecino del tercero y usar ese tiempo para que la vecina del quinto te ayude con la mudanza.",
		"faq.q3": "¿Qué pasa si necesito ayuda pero no tengo tiempo para trabajar primero?",
		"faq.a3": "Vontu te permite comprar créditos de tiempo de forma directa en la plataforma. De esta manera, apoyas el mantenimiento de la aplicación y consigues la ayuda que necesitas de inmediato, mientras el vecino que te ayuda sigue cobrando sus créditos de tiempo íntegros.",
		"faq.q4": "¿Es seguro meter a un vecino en casa?",
		"faq.a4": "La seguridad es nuestra prioridad. Todos los perfiles pasan por un proceso de verificación y cuentan con un sistema estricto de valoraciones comunitarias reales.",
		"footer.terms": "Términos y Condiciones",
		"footer.privacy": "Política de Privacidad",
		"footer.rights": "© 2026 Vontu. Todos los derechos reservados."
	},
	ca: {
		"nav.features": "Característiques",
		"nav.howItWorks": "Com Funciona",
		"nav.faq": "Preguntes Freqüents",
		"nav.whitelist": "Unir-se a la Whitelist",
		"hero.title": "Canvia el que saps fer pel que necessites rebre. A prop teu.",
		"hero.subtitle": "Vontu és l'aplicació del teu barri on cuides el gos d'un veí i, a canvi, reps classes d'Excel d'un altre. Sense diners pel mig, mesurant el valor en temps. No tens temps lliure aquesta setmana? També pots adquirir crèdits de temps de manera senzilla per resoldre les teves urgències locals.",
		"hero.cta": "Reservar el meu accés prioritari",
		"hero.placeholder": "El teu correu electrònic",
		"features.title": "Tot el que necessites per intercanviar temps",
		"features.geo.title": "Serveis Geolocalitzats",
		"features.geo.desc": "Troba ajuda al teu carrer o barri. La confiança comença per la proximitat local.",
		"features.profiles.title": "Perfils i Habilitats",
		"features.profiles.desc": "Mostra les teves millors habilitats i descobreix el talent ocult dels teus veïns propers.",
		"features.reviews.title": "Confiança Comunitària",
		"features.reviews.desc": "Valoracions basades en respecte i fiabilitat per interactuar amb total seguretat.",
		"features.credits.title": "Crèdits Flexibles",
		"features.credits.desc": "Cada hora d'ajuda equival a crèdits. Fes-los servir o adquireix saldo si ho necessites.",
		"how.title": "Com Funciona",
		"how.step1.title": "1. Publica o Ofereix",
		"how.step1.desc": "Digues què necessites o en què pots donar un cop de mà a la comunitat.",
		"how.step2.title": "2. Acumula o Intercanvia",
		"how.step2.desc": "Realitza el favor, valida el temps dedicat i rep els teus crèdits digitals de manera segura al teu perfil.",
		"how.step3.title": "3. Gaudeix i Gestiona",
		"how.step3.desc": "Gasta els teus crèdits aprenent una cosa nova, solucionant una avaria a casa o comprant saldo de temps si necessites ajuda immediata.",
		"whitelist.title": "Uneix-te a la comunitat d'intercanvi de confiança local.",
		"whitelist.desc": "Registra't avui per rebre crèdits de regal en el llançament i ser el primer a activar la teva zona.",
		"whitelist.cta": "Unir-me ara",
		"whitelist.privacy": "He llegit i accepto la",
		"whitelist.success": "Gràcies per unir-te! Et mantindrem informat.",
		"whitelist.error": "Hi ha hagut un error en registrar-te. Torna-ho a provar.",
		"faq.title": "Preguntes Freqüents",
		"faq.q1": "Què és exactament un Banc del Temps?",
		"faq.a1": "És un sistema on la moneda oficial no és l'euro, sinó el teu temps. Ajudes a algú durant una hora i guanyes una hora de crèdit per gastar en el que tu triïs.",
		"faq.q2": "He de fer-li el favor exactament a la mateixa persona que m'ajuda a mi?",
		"faq.a2": "No, els crèdits s'acumulen al teu moneder digital de Vontu. Pots cuidar el gat del veí del tercer i usar aquest temps perquè la veïna del cinquè t'ajudi amb el trasllat.",
		"faq.q3": "Què passa si necessito ajuda però no tinc temps per treballar primer?",
		"faq.a3": "Vontu et permet comprar crèdits de temps de forma directa a la plataforma. D'aquesta manera, dones suport al manteniment de l'aplicació i aconsegueixes l'ajuda que necessites d'immediat, mentre el veí que t'ajuda segueix cobrant els seus crèdits de temps íntegres.",
		"faq.q4": "És segur ficar un veí a casa?",
		"faq.a4": "La seguretat és la nostra prioritat. Tots els perfils passen per un procés de verificació i compten amb un sistema estricte de valoracions comunitàries reals.",
		"footer.terms": "Termes i Condicions",
		"footer.privacy": "Política de Privacitat",
		"footer.rights": "© 2026 Vontu. Tots els drets reservats."
	}
};
/**
* Get language from URL pathname
*/
function getLangFromUrl(url) {
	const [, lang] = url.pathname.split("/");
	if (lang in ui) return lang;
	return "es";
}
/**
* Returns a translation function for a specific language
*/
function useTranslations(lang) {
	return function t(key) {
		return ui[lang][key] || ui["es"][key];
	};
}
//#endregion
//#region src/components/ThemeToggle.astro
var $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<button id="theme-toggle" type="button" class="w-11 h-11 flex items-center justify-center rounded-2xl border-2 border-marron/20 dark:border-crema/20 hover:bg-marron/5 dark:hover:bg-crema/5 transition-colors" aria-label="Toggle Dark Mode"><svg id="theme-toggle-dark-icon" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg><svg id="theme-toggle-light-icon" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.366a1 1 0 011.415 0l.708.708a1 1 0 11-1.414 1.415l-.708-.708a1 1 0 010-1.415zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-2.366 4.22a1 1 0 010 1.415l-.708.708a1 1 0 11-1.415-1.414l.708-.708a1 1 0 011.415 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-2.366a1 1 0 010-1.415l-.708-.708a1 1 0 01-1.415 1.414l.708.708a1 1 0 011.415 0zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.366-4.22a1 1 0 011.415 0l.708.708a1 1 0 01-1.415 1.414l-.708-.708a1 1 0 010-1.415zM10 5a5 5 0 100 10 5 5 0 000-10z" clip-rule="evenodd"></path></svg></button><script>
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon?.classList.remove('hidden');
    document.documentElement.classList.add('dark');
  } else {
    themeToggleDarkIcon?.classList.remove('hidden');
    document.documentElement.classList.remove('dark');
  }

  const themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn?.addEventListener('click', function() {
    themeToggleDarkIcon?.classList.toggle('hidden');
    themeToggleLightIcon?.classList.toggle('hidden');

    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
  });
<\/script>`;
}, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/components/ThemeToggle.astro", void 0);
//#endregion
//#region src/components/LanguagePicker.astro
createAstro("https://astro.build");
var $$LanguagePicker = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LanguagePicker;
	const targetLang = getLangFromUrl(Astro.url) === "es" ? "ca" : "es";
	const targetPath = targetLang === "es" ? "/" : `/${targetLang}/`;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(targetPath, "href")} class="w-11 h-11 flex items-center justify-center text-sm font-bold hover:text-terracota dark:hover:text-turquesa transition-colors uppercase border-2 rounded-2xl border-marron/20 dark:border-crema/20 hover:border-terracota dark:hover:border-turquesa">${targetLang}</a>`;
}, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/components/LanguagePicker.astro", void 0);
//#endregion
//#region src/components/Button.astro
createAstro("https://astro.build");
var $$Button = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Button;
	const { href, variant = "primary", class: className, type, id } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Tag", href ? "a" : "button", {
		"href": href,
		"class": `inline-flex items-center justify-center h-11 px-6 font-bold rounded-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${{
			primary: "bg-terracota hover:bg-[#d94a27] text-crema shadow-sm",
			secondary: "bg-transparent border-2 border-marron/20 dark:border-crema/20 hover:border-terracota dark:hover:border-turquesa text-marron dark:text-crema"
		}[variant]} ${className || ""}`,
		"type": !href ? type || "button" : void 0,
		"id": id
	}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
}, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/components/Button.astro", void 0);
//#endregion
//#region src/components/Navbar.astro
createAstro("https://astro.build");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const lang = getLangFromUrl(Astro.url);
	const t = useTranslations(lang);
	return renderTemplate`${maybeRenderHead($$result)}<header class="fixed top-0 w-full bg-crema/90 dark:bg-petroleo/90 backdrop-blur-md z-50 border-b border-marron/10 dark:border-crema/10 transition-colors"><div class="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between"><a${addAttribute(lang === "es" ? "/" : `/${lang}/`, "href")} class="text-3xl font-black tracking-tight text-terracota dark:text-turquesa transition-colors">Vontu</a><nav class="hidden md:flex items-center gap-8 font-semibold text-marron dark:text-crema"><a href="#features" class="hover:text-terracota dark:hover:text-turquesa transition-colors">${t("nav.features")}</a><a href="#how-it-works" class="hover:text-terracota dark:hover:text-turquesa transition-colors">${t("nav.howItWorks")}</a><a href="#faq" class="hover:text-terracota dark:hover:text-turquesa transition-colors">${t("nav.faq")}</a></nav><div class="flex items-center gap-3">${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})}${renderComponent($$result, "LanguagePicker", $$LanguagePicker, {})}<div class="hidden sm:block ml-2">${renderComponent($$result, "Button", $$Button, {
		"href": "#whitelist",
		"variant": "primary",
		"class": "!px-5 text-sm"
	}, { "default": ($$result) => renderTemplate`${t("nav.whitelist")}` })}</div></div></div></header>`;
}, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Footer.astro
createAstro("https://astro.build");
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Footer;
	const lang = getLangFromUrl(Astro.url);
	const t = useTranslations(lang);
	lang === "es" || `${lang}`;
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-white dark:bg-petroleo border-t border-marron/10 dark:border-crema/10 py-12 mt-20 transition-colors"><div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-marron/70 dark:text-crema/70 font-medium"><div><span class="text-2xl font-black text-marron dark:text-crema mr-2">Vontu</span>${t("footer.rights")}</div><div class="flex gap-4 mt-4 md:mt-0"><a${addAttribute(lang === "es" ? "/terminos-condiciones" : "/ca/terminos-condiciones", "href")} class="hover:text-terracota dark:hover:text-turquesa transition-colors">${t("footer.terms")}</a><a${addAttribute(lang === "es" ? "/politica-privacidad" : "/ca/politica-privacidad", "href")} class="hover:text-terracota dark:hover:text-turquesa transition-colors">${t("footer.privacy")}</a></div></div></footer>`;
}, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/components/Footer.astro", void 0);
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://astro.build");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title, description } = Astro.props;
	const lang = getLangFromUrl(Astro.url);
	const siteUrl = Astro.site || Astro.url.origin;
	return renderTemplate`<html${addAttribute(lang, "lang")} class="scroll-smooth"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro.generator, "content")}><!-- SEO --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Hreflang --><link rel="alternate" hreflang="es"${addAttribute(`${siteUrl}/`, "href")}><link rel="alternate" hreflang="ca"${addAttribute(`${siteUrl}/ca/`, "href")}><link rel="alternate" hreflang="x-default"${addAttribute(`${siteUrl}/`, "href")}><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"><script>
      const theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    <\/script>${renderHead($$result)}</head><body class="font-['Inter'] antialiased min-h-screen flex flex-col pt-20 transition-colors bg-crema dark:bg-petroleo text-marron dark:text-crema">${renderComponent($$result, "Navbar", $$Navbar, {})}<main class="flex-grow">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Users/hectoresquerdovalverde/Desktop/Projects/poligens-trigens/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { useTranslations as i, $$Button as n, getLangFromUrl as r, $$BaseLayout as t };
