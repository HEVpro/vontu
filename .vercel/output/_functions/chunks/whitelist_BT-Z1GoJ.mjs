import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/whitelist.ts
var whitelist_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	try {
		const email = (await request.formData()).get("email");
		if (!email || typeof email !== "string") return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
		const NOTION_API_KEY = process.env.NOTION_API_KEY;
		const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
		if (!NOTION_API_KEY || !NOTION_DATABASE_ID) return new Response(JSON.stringify({
			success: true,
			message: "Simulated success (missing Notion keys in env)"
		}), { status: 200 });
		const response = await fetch("https://api.notion.com/v1/pages", {
			method: "POST",
			headers: {
				"Authorization": `Bearer ${NOTION_API_KEY}`,
				"Content-Type": "application/json",
				"Notion-Version": "2022-06-28"
			},
			body: JSON.stringify({
				parent: { database_id: NOTION_DATABASE_ID },
				properties: { Email: { title: [{ text: { content: email } }] } }
			})
		});
		if (!response.ok) {
			const errorData = await response.json();
			console.error("Notion API error:", errorData);
			return new Response(JSON.stringify({ error: "Failed to save to Notion" }), { status: 500 });
		}
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/whitelist@_@ts
var page = () => whitelist_exports;
//#endregion
export { page };
