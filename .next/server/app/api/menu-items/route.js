"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/menu-items/route";
exports.ids = ["app/api/menu-items/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=%2Fhome%2Fazizul%2FDesktop%2Ffood-app-kubernetes%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fazizul%2FDesktop%2Ffood-app-kubernetes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=%2Fhome%2Fazizul%2FDesktop%2Ffood-app-kubernetes%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fazizul%2FDesktop%2Ffood-app-kubernetes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_azizul_Desktop_food_app_kubernetes_src_app_api_menu_items_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/menu-items/route.js */ \"(rsc)/./src/app/api/menu-items/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/menu-items/route\",\n        pathname: \"/api/menu-items\",\n        filename: \"route\",\n        bundlePath: \"app/api/menu-items/route\"\n    },\n    resolvedPagePath: \"/home/azizul/Desktop/food-app-kubernetes/src/app/api/menu-items/route.js\",\n    nextConfigOutput,\n    userland: _home_azizul_Desktop_food_app_kubernetes_src_app_api_menu_items_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/menu-items/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZW51LWl0ZW1zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZtZW51LWl0ZW1zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbWVudS1pdGVtcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGYXppenVsJTJGRGVza3RvcCUyRmZvb2QtYXBwLWt1YmVybmV0ZXMlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZheml6dWwlMkZEZXNrdG9wJTJGZm9vZC1hcHAta3ViZXJuZXRlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0I7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLz82MDY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL2F6aXp1bC9EZXNrdG9wL2Zvb2QtYXBwLWt1YmVybmV0ZXMvc3JjL2FwcC9hcGkvbWVudS1pdGVtcy9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbWVudS1pdGVtcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL21lbnUtaXRlbXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL21lbnUtaXRlbXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9heml6dWwvRGVza3RvcC9mb29kLWFwcC1rdWJlcm5ldGVzL3NyYy9hcHAvYXBpL21lbnUtaXRlbXMvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL21lbnUtaXRlbXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=%2Fhome%2Fazizul%2FDesktop%2Ffood-app-kubernetes%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fazizul%2FDesktop%2Ffood-app-kubernetes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/menu-items/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/menu-items/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _utils_isAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isAdmin */ \"(rsc)/./src/app/utils/isAdmin.js\");\n/* harmony import */ var _models_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/MenuItem */ \"(rsc)/./src/models/MenuItem.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function POST(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    const data = await req.json();\n    if (await (0,_utils_isAdmin__WEBPACK_IMPORTED_MODULE_0__.isAdmin)()) {\n        const menuItemDoc = await _models_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem.create(data);\n        return Response.json(menuItemDoc);\n    } else {\n        return Response.json({});\n    }\n}\nasync function PUT(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    if (await (0,_utils_isAdmin__WEBPACK_IMPORTED_MODULE_0__.isAdmin)()) {\n        const { _id, ...data } = await req.json();\n        await _models_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem.findByIdAndUpdate(_id, data);\n    }\n    return Response.json(true);\n}\nasync function GET() {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    return Response.json(await _models_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem.find());\n}\nasync function DELETE(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    const url = new URL(req.url);\n    const _id = url.searchParams.get(\"_id\");\n    if (await (0,_utils_isAdmin__WEBPACK_IMPORTED_MODULE_0__.isAdmin)()) {\n        await _models_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem.deleteOne({\n            _id\n        });\n    }\n    return Response.json(true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9tZW51LWl0ZW1zL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ007QUFDbEI7QUFFekIsZUFBZUcsS0FBS0MsR0FBRztJQUM1QkYsdURBQWdCLENBQUNJLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztJQUN0QyxNQUFNQyxPQUFPLE1BQU1MLElBQUlNLElBQUk7SUFDM0IsSUFBSSxNQUFNVix1REFBT0EsSUFBSTtRQUNuQixNQUFNVyxjQUFjLE1BQU1WLHNEQUFRQSxDQUFDVyxNQUFNLENBQUNIO1FBQzFDLE9BQU9JLFNBQVNILElBQUksQ0FBQ0M7SUFDdkIsT0FBTztRQUNMLE9BQU9FLFNBQVNILElBQUksQ0FBQyxDQUFDO0lBQ3hCO0FBQ0Y7QUFFTyxlQUFlSSxJQUFJVixHQUFHO0lBQzNCRix1REFBZ0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQ3RDLElBQUksTUFBTVIsdURBQU9BLElBQUk7UUFDbkIsTUFBTSxFQUFDZSxHQUFHLEVBQUUsR0FBR04sTUFBSyxHQUFHLE1BQU1MLElBQUlNLElBQUk7UUFDckMsTUFBTVQsc0RBQVFBLENBQUNlLGlCQUFpQixDQUFDRCxLQUFLTjtJQUN4QztJQUNBLE9BQU9JLFNBQVNILElBQUksQ0FBQztBQUN2QjtBQUVPLGVBQWVPO0lBQ3BCZix1REFBZ0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQ3RDLE9BQU9LLFNBQVNILElBQUksQ0FDbEIsTUFBTVQsc0RBQVFBLENBQUNpQixJQUFJO0FBRXZCO0FBRU8sZUFBZUMsT0FBT2YsR0FBRztJQUM5QkYsdURBQWdCLENBQUNJLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztJQUN0QyxNQUFNWSxNQUFNLElBQUlDLElBQUlqQixJQUFJZ0IsR0FBRztJQUMzQixNQUFNTCxNQUFNSyxJQUFJRSxZQUFZLENBQUNDLEdBQUcsQ0FBQztJQUNqQyxJQUFJLE1BQU12Qix1REFBT0EsSUFBSTtRQUNuQixNQUFNQyxzREFBUUEsQ0FBQ3VCLFNBQVMsQ0FBQztZQUFDVDtRQUFHO0lBQy9CO0lBQ0EsT0FBT0YsU0FBU0gsSUFBSSxDQUFDO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC8uL3NyYy9hcHAvYXBpL21lbnUtaXRlbXMvcm91dGUuanM/ZTcwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzQWRtaW59IGZyb20gXCIuLi8uLi91dGlscy9pc0FkbWluXCI7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL01lbnVJdGVtXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xuICBpZiAoYXdhaXQgaXNBZG1pbigpKSB7XG4gICAgY29uc3QgbWVudUl0ZW1Eb2MgPSBhd2FpdCBNZW51SXRlbS5jcmVhdGUoZGF0YSk7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24obWVudUl0ZW1Eb2MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHt9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcSkge1xuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XG4gIGlmIChhd2FpdCBpc0FkbWluKCkpIHtcbiAgICBjb25zdCB7X2lkLCAuLi5kYXRhfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgYXdhaXQgTWVudUl0ZW0uZmluZEJ5SWRBbmRVcGRhdGUoX2lkLCBkYXRhKTtcbiAgfVxuICByZXR1cm4gUmVzcG9uc2UuanNvbih0cnVlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xuICByZXR1cm4gUmVzcG9uc2UuanNvbihcbiAgICBhd2FpdCBNZW51SXRlbS5maW5kKClcbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXEpIHtcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xuICBjb25zdCBfaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnX2lkJyk7XG4gIGlmIChhd2FpdCBpc0FkbWluKCkpIHtcbiAgICBhd2FpdCBNZW51SXRlbS5kZWxldGVPbmUoe19pZH0pO1xuICB9XG4gIHJldHVybiBSZXNwb25zZS5qc29uKHRydWUpO1xufVxuXG4iXSwibmFtZXMiOlsiaXNBZG1pbiIsIk1lbnVJdGVtIiwibW9uZ29vc2UiLCJQT1NUIiwicmVxIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJkYXRhIiwianNvbiIsIm1lbnVJdGVtRG9jIiwiY3JlYXRlIiwiUmVzcG9uc2UiLCJQVVQiLCJfaWQiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIkdFVCIsImZpbmQiLCJERUxFVEUiLCJ1cmwiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/menu-items/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/utils/authOptions.js":
/*!**************************************!*\
  !*** ./src/app/utils/authOptions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/mongoConnect */ \"(rsc)/./src/libs/mongoConnect.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n// import clientPromise from \"../../libs/mongoConnect\"; \n// import {UserInfo} from \"../../models/UserInfo\";\n// import bcrypt from \"bcrypt\";\n// import * as mongoose from \"mongoose\";\n// import {User} from '../../models/User';\n// import NextAuth, {getServerSession} from \"next-auth\";\n// import CredentialsProvider from \"next-auth/providers/credentials\";\n// import GoogleProvider from \"next-auth/providers/google\";\n// import { MongoDBAdapter } from \"@auth/mongodb-adapter\"\n// export const authOptions = {\n//   secret: process.env.SECRET,\n//   adapter: MongoDBAdapter(clientPromise),\n//   providers: [\n//     GoogleProvider({\n//       clientId: process.env.GOOGLE_CLIENT_ID,\n//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n//     }),\n//     CredentialsProvider({\n//       name: 'Credentials',\n//       id: 'credentials',\n//       credentials: {\n//         username: { label: \"Email\", type: \"email\", placeholder: \"test@example.com\" },\n//         password: { label: \"Password\", type: \"password\" },\n//       },\n//       async authorize(credentials, req) {\n//         const email = credentials?.email;\n//         const password = credentials?.password;\n//         mongoose.connect(process.env.MONGO_URL);\n//         const user = await User.findOne({email});\n//         const passwordOk = user && bcrypt.compareSync(password, user.password);\n//         if (passwordOk) {\n//           return user;\n//         }\n//         return null\n//       }\n//     })\n//   ],\n// };\n\n\n\n\n\n\n\nconst authOptions = {\n    secret: process.env.SECRET,\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_6__.MongoDBAdapter)(_libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"test@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                await mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(process.env.MONGO_URL);\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findOne({\n                    email\n                });\n                if (user && bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.password)) {\n                    // Returning a user object with the necessary fields\n                    return {\n                        id: user._id.toString(),\n                        name: user.name,\n                        email: user.email\n                    };\n                }\n                return null;\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            // If user object is provided (during sign-in), add user properties to the token\n            if (user) {\n                token.id = user.id;\n                token.name = user.name;\n                token.email = user.email;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            // Add token properties to session\n            session.user.id = token.id;\n            session.user.name = token.name;\n            session.user.email = token.email;\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLy4vc3JjL2FwcC91dGlscy9hdXRoT3B0aW9ucy5qcz83MDc1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi9saWJzL21vbmdvQ29ubmVjdFwiOyBcbi8vIGltcG9ydCB7VXNlckluZm99IGZyb20gXCIuLi8uLi9tb2RlbHMvVXNlckluZm9cIjtcbi8vIGltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuLy8gaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG4vLyBpbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uL21vZGVscy9Vc2VyJztcbi8vIGltcG9ydCBOZXh0QXV0aCwge2dldFNlcnZlclNlc3Npb259IGZyb20gXCJuZXh0LWF1dGhcIjtcbi8vIGltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG4vLyBpbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG4vLyBpbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIlxuXG4vLyBleHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4vLyAgIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxuLy8gICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcbi8vICAgcHJvdmlkZXJzOiBbXG4vLyAgICAgR29vZ2xlUHJvdmlkZXIoe1xuLy8gICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4vLyAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuLy8gICAgIH0pLFxuLy8gICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuLy8gICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbi8vICAgICAgIGlkOiAnY3JlZGVudGlhbHMnLFxuLy8gICAgICAgY3JlZGVudGlhbHM6IHtcbi8vICAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJ0ZXN0QGV4YW1wbGUuY29tXCIgfSxcbi8vICAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbi8vICAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscz8uZW1haWw7XG4vLyAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY3JlZGVudGlhbHM/LnBhc3N3b3JkO1xuXG4vLyAgICAgICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKTtcbi8vICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ZW1haWx9KTtcbi8vICAgICAgICAgY29uc3QgcGFzc3dvcmRPayA9IHVzZXIgJiYgYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcblxuLy8gICAgICAgICBpZiAocGFzc3dvcmRPaykge1xuLy8gICAgICAgICAgIHJldHVybiB1c2VyO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgcmV0dXJuIG51bGxcbi8vICAgICAgIH1cbi8vICAgICB9KVxuLy8gICBdLFxuLy8gfTtcblxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uL2xpYnMvbW9uZ29Db25uZWN0XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgaWQ6ICdjcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcInRlc3RAZXhhbXBsZS5jb21cIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscz8uZW1haWw7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY3JlZGVudGlhbHM/LnBhc3N3b3JkO1xuXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XG5cbiAgICAgICAgaWYgKHVzZXIgJiYgYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xuICAgICAgICAgIC8vIFJldHVybmluZyBhIHVzZXIgb2JqZWN0IHdpdGggdGhlIG5lY2Vzc2FyeSBmaWVsZHNcbiAgICAgICAgICByZXR1cm4geyBpZDogdXNlci5faWQudG9TdHJpbmcoKSwgbmFtZTogdXNlci5uYW1lLCBlbWFpbDogdXNlci5lbWFpbCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICAvLyBJZiB1c2VyIG9iamVjdCBpcyBwcm92aWRlZCAoZHVyaW5nIHNpZ24taW4pLCBhZGQgdXNlciBwcm9wZXJ0aWVzIHRvIHRoZSB0b2tlblxuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICB0b2tlbi5uYW1lID0gdXNlci5uYW1lO1xuICAgICAgICB0b2tlbi5lbWFpbCA9IHVzZXIuZW1haWw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgLy8gQWRkIHRva2VuIHByb3BlcnRpZXMgdG8gc2Vzc2lvblxuICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XG4gICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLm5hbWU7XG4gICAgICBzZXNzaW9uLnVzZXIuZW1haWwgPSB0b2tlbi5lbWFpbDtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH1cbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsIlVzZXIiLCJiY3J5cHQiLCJtb25nb29zZSIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiYXV0aE9wdGlvbnMiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwibmFtZSIsImlkIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJjb25uZWN0IiwiTU9OR09fVVJMIiwidXNlciIsImZpbmRPbmUiLCJjb21wYXJlU3luYyIsIl9pZCIsInRvU3RyaW5nIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/utils/authOptions.js\n");

/***/ }),

/***/ "(rsc)/./src/app/utils/isAdmin.js":
/*!**********************************!*\
  !*** ./src/app/utils/isAdmin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAdmin: () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_UserInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/UserInfo */ \"(rsc)/./src/models/UserInfo.js\");\n/* harmony import */ var _authOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authOptions */ \"(rsc)/./src/app/utils/authOptions.js\");\n\n\n\nasync function isAdmin() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_authOptions__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    const userEmail = session?.user?.email;\n    if (!userEmail) {\n        return false;\n    }\n    const userInfo = await _models_UserInfo__WEBPACK_IMPORTED_MODULE_1__.UserInfo.findOne({\n        email: userEmail\n    });\n    if (!userInfo) {\n        return false;\n    }\n    return userInfo.admin;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3V0aWxzL2lzQWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkM7QUFDSTtBQUNMO0FBRXJDLGVBQWVHO0lBQ3BCLE1BQU1DLFVBQVUsTUFBTUosMkRBQWdCQSxDQUFDRSxxREFBV0E7SUFDbEQsTUFBTUcsWUFBWUQsU0FBU0UsTUFBTUM7SUFDakMsSUFBSSxDQUFDRixXQUFXO1FBQ2QsT0FBTztJQUNUO0lBQ0EsTUFBTUcsV0FBVyxNQUFNUCxzREFBUUEsQ0FBQ1EsT0FBTyxDQUFDO1FBQUVGLE9BQU9GO0lBQVU7SUFDM0QsSUFBSSxDQUFDRyxVQUFVO1FBQ2IsT0FBTztJQUNUO0lBQ0EsT0FBT0EsU0FBU0UsS0FBSztBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9zcmMvYXBwL3V0aWxzL2lzQWRtaW4uanM/ZGViMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1VzZXJJbmZvXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuL2F1dGhPcHRpb25zXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0FkbWluKCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGNvbnN0IHVzZXJFbWFpbCA9IHNlc3Npb24/LnVzZXI/LmVtYWlsO1xuICBpZiAoIXVzZXJFbWFpbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IFVzZXJJbmZvLmZpbmRPbmUoeyBlbWFpbDogdXNlckVtYWlsIH0pO1xuICBpZiAoIXVzZXJJbmZvKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB1c2VySW5mby5hZG1pbjtcbn1cbiJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiVXNlckluZm8iLCJhdXRoT3B0aW9ucyIsImlzQWRtaW4iLCJzZXNzaW9uIiwidXNlckVtYWlsIiwidXNlciIsImVtYWlsIiwidXNlckluZm8iLCJmaW5kT25lIiwiYWRtaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/utils/isAdmin.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/mongoConnect.js":
/*!**********************************!*\
  !*** ./src/libs/mongoConnect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGO_URL) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGO_URL;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0dBQWtHO0FBQzdEO0FBRXJDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLEVBQUU7SUFDMUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBQ2pDLE1BQU1HLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVAsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JILFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNLLEtBQUtDO1FBQzlCRyxPQUFPQyxtQkFBbUIsR0FBR0gsT0FBT0ksT0FBTztJQUM3QztJQUNBSCxnQkFBZ0JDLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlRixhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC8uL3NyYy9saWJzL21vbmdvQ29ubmVjdC5qcz9jNDA2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT19VUkwpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpXG59XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPX1VSTFxuY29uc3Qgb3B0aW9ucyA9IHt9XG5cbmxldCBjbGllbnRcbmxldCBjbGllbnRQcm9taXNlO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXG59IGVsc2Uge1xuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/mongoConnect.js\n");

/***/ }),

/***/ "(rsc)/./src/models/MenuItem.js":
/*!********************************!*\
  !*** ./src/models/MenuItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuItem: () => (/* binding */ MenuItem)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ExtraPriceSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: String,\n    price: Number\n});\nconst MenuItemSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    image: {\n        type: String\n    },\n    name: {\n        type: String\n    },\n    description: {\n        type: String\n    },\n    category: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId\n    },\n    basePrice: {\n        type: Number\n    },\n    sizes: {\n        type: [\n            ExtraPriceSchema\n        ]\n    },\n    extraIngredientPrices: {\n        type: [\n            ExtraPriceSchema\n        ]\n    }\n}, {\n    timestamps: true\n});\nconst MenuItem = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.MenuItem || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"MenuItem\", MenuItemSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL01lbnVJdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5RDtBQUV6RCxNQUFNSSxtQkFBbUIsSUFBSUQsNENBQU1BLENBQUM7SUFDbENFLE1BQU1DO0lBQ05DLE9BQU9DO0FBQ1Q7QUFFQSxNQUFNQyxpQkFBaUIsSUFBSU4sNENBQU1BLENBQUM7SUFDaENPLE9BQU87UUFBQ0MsTUFBTUw7SUFBTTtJQUNwQkQsTUFBTTtRQUFDTSxNQUFNTDtJQUFNO0lBQ25CTSxhQUFhO1FBQUNELE1BQU1MO0lBQU07SUFDMUJPLFVBQVU7UUFBQ0YsTUFBTVgsdURBQWMsQ0FBQ2UsUUFBUTtJQUFBO0lBQ3hDQyxXQUFXO1FBQUNMLE1BQU1IO0lBQU07SUFDeEJTLE9BQU87UUFBQ04sTUFBSztZQUFDUDtTQUFpQjtJQUFBO0lBQy9CYyx1QkFBdUI7UUFBQ1AsTUFBSztZQUFDUDtTQUFpQjtJQUFBO0FBQ2pELEdBQUc7SUFBQ2UsWUFBWTtBQUFJO0FBRWIsTUFBTUMsV0FBV2xCLDRDQUFNQSxFQUFFa0IsWUFBWW5CLCtDQUFLQSxDQUFDLFlBQVlRLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9zcmMvbW9kZWxzL01lbnVJdGVtLmpzPzIzMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7bW9kZWwsIG1vZGVscywgU2NoZW1hfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgRXh0cmFQcmljZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIHByaWNlOiBOdW1iZXIsXG59KTtcblxuY29uc3QgTWVudUl0ZW1TY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgaW1hZ2U6IHt0eXBlOiBTdHJpbmd9LFxuICBuYW1lOiB7dHlwZTogU3RyaW5nfSxcbiAgZGVzY3JpcHRpb246IHt0eXBlOiBTdHJpbmd9LFxuICBjYXRlZ29yeToge3R5cGU6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkfSxcbiAgYmFzZVByaWNlOiB7dHlwZTogTnVtYmVyfSxcbiAgc2l6ZXM6IHt0eXBlOltFeHRyYVByaWNlU2NoZW1hXX0sXG4gIGV4dHJhSW5ncmVkaWVudFByaWNlczoge3R5cGU6W0V4dHJhUHJpY2VTY2hlbWFdfSxcbn0sIHt0aW1lc3RhbXBzOiB0cnVlfSk7XG5cbmV4cG9ydCBjb25zdCBNZW51SXRlbSA9IG1vZGVscz8uTWVudUl0ZW0gfHwgbW9kZWwoJ01lbnVJdGVtJywgTWVudUl0ZW1TY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiRXh0cmFQcmljZVNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJwcmljZSIsIk51bWJlciIsIk1lbnVJdGVtU2NoZW1hIiwiaW1hZ2UiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJiYXNlUHJpY2UiLCJzaXplcyIsImV4dHJhSW5ncmVkaWVudFByaWNlcyIsInRpbWVzdGFtcHMiLCJNZW51SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/MenuItem.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    image: {\n        type: String\n    },\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    phone: {\n        type: String\n    },\n    streetAddress: {\n        type: String\n    },\n    postalCode: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    Country: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUNyQjtBQUNGO0FBRTFCLE1BQU1LLGFBQWEsSUFBSUgsNENBQU1BLENBQUM7SUFDMUJJLE9BQU87UUFBQ0YsTUFBTUc7SUFBTTtJQUNwQkMsTUFBTTtRQUFDSixNQUFNRztJQUFNO0lBQ25CRSxPQUFPO1FBQUNMLE1BQU1HO1FBQVFHLFVBQVU7UUFBTUMsUUFBUTtJQUFJO0lBQ2xEQyxVQUFVO1FBQUVSLE1BQU1HO0lBQU87SUFDekJNLE9BQU87UUFBQ1QsTUFBTUc7SUFBTTtJQUNwQk8sZUFBZTtRQUFDVixNQUFNRztJQUFNO0lBQzVCUSxZQUFZO1FBQUNYLE1BQU1HO0lBQU07SUFDekJTLE1BQU07UUFBQ1osTUFBTUc7SUFBTTtJQUNuQlUsU0FBUztRQUFDYixNQUFNRztJQUFNO0FBQzFCLEdBQUU7SUFBQ1csWUFBWTtBQUFJO0FBRVosTUFBTUMsT0FBT2xCLDRDQUFNQSxFQUFFa0IsUUFBUW5CLCtDQUFLQSxDQUFDLFFBQVFLLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLy4vc3JjL21vZGVscy9Vc2VyLmpzPzdkMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kZWwsIG1vZGVscywgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgeyB0eXBlIH0gZnJvbSBcIm9zXCI7XG4gXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgaW1hZ2U6IHt0eXBlOiBTdHJpbmd9LFxuICAgIG5hbWU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGVtYWlsOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlfSxcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsfSxcbiAgICBwaG9uZToge3R5cGU6IFN0cmluZ30sXG4gICAgc3RyZWV0QWRkcmVzczoge3R5cGU6IFN0cmluZ30sXG4gICAgcG9zdGFsQ29kZToge3R5cGU6IFN0cmluZ30sXG4gICAgY2l0eToge3R5cGU6IFN0cmluZ30sXG4gICAgQ291bnRyeToge3R5cGU6IFN0cmluZ30sXG59LHt0aW1lc3RhbXBzOiB0cnVlfSk7XG5cbmV4cG9ydCBjb25zdCBVc2VyID0gbW9kZWxzPy5Vc2VyIHx8IG1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiYmNyeXB0IiwidHlwZSIsIlVzZXJTY2hlbWEiLCJpbWFnZSIsIlN0cmluZyIsIm5hbWUiLCJlbWFpbCIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJwaG9uZSIsInN0cmVldEFkZHJlc3MiLCJwb3N0YWxDb2RlIiwiY2l0eSIsIkNvdW50cnkiLCJ0aW1lc3RhbXBzIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/models/UserInfo.js":
/*!********************************!*\
  !*** ./src/models/UserInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserInfo: () => (/* binding */ UserInfo)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserInfoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true\n    },\n    streetAddress: {\n        type: String\n    },\n    postalCode: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    country: {\n        type: String\n    },\n    phone: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst UserInfo = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.UserInfo || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"UserInfo\", UserInfoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXJJbmZvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUUvQyxNQUFNRyxpQkFBaUIsSUFBSUQsNENBQU1BLENBQUM7SUFDaENFLE9BQU87UUFBQ0MsTUFBTUM7UUFBUUMsVUFBVTtJQUFJO0lBQ3BDQyxlQUFlO1FBQUNILE1BQU1DO0lBQU07SUFDNUJHLFlBQVk7UUFBQ0osTUFBTUM7SUFBTTtJQUN6QkksTUFBTTtRQUFDTCxNQUFNQztJQUFNO0lBQ25CSyxTQUFTO1FBQUNOLE1BQU1DO0lBQU07SUFDdEJNLE9BQU87UUFBQ1AsTUFBTUM7SUFBTTtJQUNwQk8sT0FBTztRQUFDUixNQUFNUztRQUFTQyxTQUFTO0lBQUs7QUFDdkMsR0FBRztJQUFDQyxZQUFZO0FBQUk7QUFFYixNQUFNQyxXQUFXaEIsNENBQU1BLEVBQUVnQixZQUFZakIsK0NBQUtBLENBQUMsWUFBWUcsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC8uL3NyYy9tb2RlbHMvVXNlckluZm8uanM/ZGUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vZGVsLCBtb2RlbHMsIFNjaGVtYX0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFVzZXJJbmZvU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGVtYWlsOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXG4gIHN0cmVldEFkZHJlc3M6IHt0eXBlOiBTdHJpbmd9LFxuICBwb3N0YWxDb2RlOiB7dHlwZTogU3RyaW5nfSxcbiAgY2l0eToge3R5cGU6IFN0cmluZ30sXG4gIGNvdW50cnk6IHt0eXBlOiBTdHJpbmd9LFxuICBwaG9uZToge3R5cGU6IFN0cmluZ30sXG4gIGFkbWluOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2V9LFxufSwge3RpbWVzdGFtcHM6IHRydWV9KTtcblxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvID0gbW9kZWxzPy5Vc2VySW5mbyB8fCBtb2RlbCgnVXNlckluZm8nLCBVc2VySW5mb1NjaGVtYSk7Il0sIm5hbWVzIjpbIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiVXNlckluZm9TY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInN0cmVldEFkZHJlc3MiLCJwb3N0YWxDb2RlIiwiY2l0eSIsImNvdW50cnkiLCJwaG9uZSIsImFkbWluIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwiVXNlckluZm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/UserInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/@auth","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=%2Fhome%2Fazizul%2FDesktop%2Ffood-app-kubernetes%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fazizul%2FDesktop%2Ffood-app-kubernetes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();