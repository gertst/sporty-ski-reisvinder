import { t as trapUnhandledNodeErrors, b as useNitroApp } from '../_/nitro.mjs';

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

const client_manifest = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

export { client_manifest as a, closePrerenderer as c, localFetch as l };
//# sourceMappingURL=client.manifest.mjs.map
