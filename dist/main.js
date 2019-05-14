/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/crel/crel.js":
/*!***********************************!*\
  !*** ./node_modules/crel/crel.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* Copyright (C) 2012 Kory Nunn\r\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\r\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\r\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\nNOTE:\r\nThis code is formatted for run-speed and to assist compilers.\r\nThis might make it harder to read at times, but the code's intention should be transparent. */\r\n\r\n// IIFE our function\r\n((exporter) => {\r\n    // Define our function and its properties\r\n    // These strings are used multiple times, so this makes things smaller once compiled\r\n    const func = 'function',\r\n        isNodeString = 'isNode',\r\n        d = document,\r\n        // Helper functions used throughout the script\r\n        isType = (object, type) => typeof object === type,\r\n        isNode = (node) => node instanceof Node,\r\n        isElement = (object) => object instanceof Element,\r\n        // Recursively appends children to given element. As a text node if not already an element\r\n        appendChild = (element, child) => {\r\n            if (child !== null) {\r\n                if (Array.isArray(child)) { // Support (deeply) nested child elements\r\n                    child.map((subChild) => appendChild(element, subChild));\r\n                } else {\r\n                    if (!crel[isNodeString](child)) {\r\n                        child = d.createTextNode(child);\r\n                    }\r\n                    element.appendChild(child);\r\n                }\r\n            }\r\n        };\r\n    //\r\n    function crel (element, settings) {\r\n        // Define all used variables / shortcuts here, to make things smaller once compiled\r\n        let args = arguments, // Note: assigned to a variable to assist compilers.\r\n            index = 1,\r\n            key,\r\n            attribute;\r\n        // If first argument is an element, use it as is, otherwise treat it as a tagname\r\n        element = crel.isElement(element) ? element : d.createElement(element);\r\n        // Check if second argument is a settings object. Skip it if it's:\r\n        // - not an object (this includes `undefined`)\r\n        // - a Node\r\n        // - an array\r\n        if (!(!isType(settings, 'object') || crel[isNodeString](settings) || Array.isArray(settings))) {\r\n            // Don't treat settings as a child\r\n            index++;\r\n            // Go through settings / attributes object, if it exists\r\n            for (key in settings) {\r\n                // Store the attribute into a variable, before we potentially modify the key\r\n                attribute = settings[key];\r\n                // Get mapped key / function, if one exists\r\n                key = crel.attrMap[key] || key;\r\n                // Note: We want to prioritise mapping over properties\r\n                if (isType(key, func)) {\r\n                    key(element, attribute);\r\n                } else if (isType(attribute, func)) { // ex. onClick property\r\n                    element[key] = attribute;\r\n                } else {\r\n                    // Set the element attribute\r\n                    element.setAttribute(key, attribute);\r\n                }\r\n            }\r\n        }\r\n        // Loop through all arguments, if any, and append them to our element if they're not `null`\r\n        for (; index < args.length; index++) {\r\n            appendChild(element, args[index]);\r\n        }\r\n\r\n        return element;\r\n    }\r\n\r\n    // Used for mapping attribute keys to supported versions in bad browsers, or to custom functionality\r\n    crel.attrMap = {};\r\n    crel.isElement = isElement;\r\n    crel[isNodeString] = isNode;\r\n    // Expose proxy interface\r\n    crel.proxy = new Proxy(crel, {\r\n        get: (target, key) => {\r\n            !(key in crel) && (crel[key] = crel.bind(null, key));\r\n            return crel[key];\r\n        }\r\n    });\r\n    // Export crel\r\n    exporter(crel, func);\r\n})((product, func) => {\r\n    if (true) {\r\n        // Export for Browserify / CommonJS format\r\n        module.exports = product;\r\n    } else {}\r\n});\r\n\n\n//# sourceURL=webpack:///./node_modules/crel/crel.js?");

/***/ }),

/***/ "./node_modules/cross-domain-storage/getId.js":
/*!****************************************************!*\
  !*** ./node_modules/cross-domain-storage/getId.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var prefix = 'sessionAccessId-';\n\nfunction getId(data) {\n    var id;\n\n    if (data && data.id && ~data.id.indexOf(prefix)) {\n        id = data.id;\n    }\n\n    return id;\n}\n\nmodule.exports = getId;\n\n\n//# sourceURL=webpack:///./node_modules/cross-domain-storage/getId.js?");

/***/ }),

/***/ "./node_modules/cross-domain-storage/host/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/cross-domain-storage/host/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getId = __webpack_require__(/*! ../getId */ \"./node_modules/cross-domain-storage/getId.js\");\nvar methods = __webpack_require__(/*! ./methods */ \"./node_modules/cross-domain-storage/host/methods.js\");\n\nmodule.exports = function storageHost(allowedDomains) {\n    function handleMessage(event) {\n        var data = event.data;\n        var domain = allowedDomains.find(function (allowedDomain) {\n            return event.origin === allowedDomain.origin;\n        });\n        var id = getId(data);\n\n        if (!id) {\n            return;\n        }\n\n        if (!domain) {\n            event.source.postMessage({\n                id: id,\n                connectError: true,\n                error: event.origin + ' is not an allowed domain',\n            }, event.origin);\n\n            return;\n        }\n\n        var method = data.method;\n\n        if (!~domain.allowedMethods.indexOf(method) && method !== 'connect') {\n            event.source.postMessage({\n                id: id,\n                error: method + ' is not an allowed method from ' + event.origin,\n            }, event.origin);\n\n            return;\n        }\n\n        methods[method](event, data);\n    }\n\n    function close() {\n        window.removeEventListener('message', handleMessage);\n    }\n\n    window.addEventListener('message', handleMessage);\n\n    return {\n        close: close,\n    };\n};\n\n\n//# sourceURL=webpack:///./node_modules/cross-domain-storage/host/index.js?");

/***/ }),

/***/ "./node_modules/cross-domain-storage/host/methods.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-domain-storage/host/methods.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var connectId = 'sessionAccessId-connected',\n    parseJSON = __webpack_require__(/*! try-parse-json */ \"./node_modules/try-parse-json/index.js\");\n\nfunction parseJSONValue(value) {\n    if (value == null) {\n        return value;\n    }\n\n    var result = parseJSON(value);\n\n    if (result instanceof Error) {\n        result = null;\n    }\n\n    return result;\n}\n\nmodule.exports = {\n    get: function (event, data) {\n        event.source.postMessage({\n            id: data.id,\n            data: parseJSONValue(window.localStorage.getItem(data.key)),\n        }, event.origin);\n    },\n    set: function (event, data) {\n        window.localStorage.setItem(data.key, JSON.stringify(data.value));\n\n        event.source.postMessage({\n            id: data.id,\n        }, event.origin);\n    },\n    remove: function (event, data) {\n        window.localStorage.removeItem(data.key, data.value);\n\n        event.source.postMessage({\n            id: data.id,\n        }, event.origin);\n    },\n    connect: function (event) {\n        event.source.postMessage({\n            id: connectId,\n        }, event.origin);\n    },\n};\n\n\n//# sourceURL=webpack:///./node_modules/cross-domain-storage/host/methods.js?");

/***/ }),

/***/ "./node_modules/doc-js/doc.js":
/*!************************************!*\
  !*** ./node_modules/doc-js/doc.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var doc = {\r\n    document: typeof document !== 'undefined' ? document : null,\r\n    setDocument: function(d){\r\n        this.document = d;\r\n    }\r\n};\r\n\r\nvar arrayProto = [],\r\n    isList = __webpack_require__(/*! ./isList */ \"./node_modules/doc-js/isList.js\"),\r\n    getTargets = __webpack_require__(/*! ./getTargets */ \"./node_modules/doc-js/getTargets.js\")(doc.document),\r\n    getTarget = __webpack_require__(/*! ./getTarget */ \"./node_modules/doc-js/getTarget.js\")(doc.document),\r\n    space = ' ';\r\n\r\n\r\n///[README.md]\r\n\r\nfunction isIn(array, item){\r\n    for(var i = 0; i < array.length; i++) {\r\n        if(item === array[i]){\r\n            return true;\r\n        }\r\n    }\r\n}\r\n\r\n/**\r\n\r\n    ## .find\r\n\r\n    finds elements that match the query within the scope of target\r\n\r\n        //fluent\r\n        doc(target).find(query);\r\n\r\n        //legacy\r\n        doc.find(target, query);\r\n*/\r\n\r\nfunction find(target, query){\r\n    target = getTargets(target);\r\n    if(query == null){\r\n        return target;\r\n    }\r\n\r\n    if(isList(target)){\r\n        var results = [];\r\n        for (var i = 0; i < target.length; i++) {\r\n            var subResults = doc.find(target[i], query);\r\n            for(var j = 0; j < subResults.length; j++) {\r\n                if(!isIn(results, subResults[j])){\r\n                    results.push(subResults[j]);\r\n                }\r\n            }\r\n        }\r\n        return results;\r\n    }\r\n\r\n    return target ? target.querySelectorAll(query) : [];\r\n}\r\n\r\n/**\r\n\r\n    ## .findOne\r\n\r\n    finds the first element that matches the query within the scope of target\r\n\r\n        //fluent\r\n        doc(target).findOne(query);\r\n\r\n        //legacy\r\n        doc.findOne(target, query);\r\n*/\r\n\r\nfunction findOne(target, query){\r\n    target = getTarget(target);\r\n    if(query == null){\r\n        return target;\r\n    }\r\n\r\n    if(isList(target)){\r\n        var result;\r\n        for (var i = 0; i < target.length; i++) {\r\n            result = findOne(target[i], query);\r\n            if(result){\r\n                break;\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n\r\n    return target ? target.querySelector(query) : null;\r\n}\r\n\r\n/**\r\n\r\n    ## .closest\r\n\r\n    recurses up the DOM from the target node, checking if the current element matches the query\r\n\r\n        //fluent\r\n        doc(target).closest(query);\r\n\r\n        //legacy\r\n        doc.closest(target, query);\r\n*/\r\n\r\nfunction closest(target, query){\r\n    target = getTarget(target);\r\n\r\n    if(isList(target)){\r\n        target = target[0];\r\n    }\r\n\r\n    while(\r\n        target &&\r\n        target.ownerDocument &&\r\n        !is(target, query)\r\n    ){\r\n        target = target.parentNode;\r\n    }\r\n\r\n    return target === doc.document && target !== query ? null : target;\r\n}\r\n\r\n/**\r\n\r\n    ## .is\r\n\r\n    returns true if the target element matches the query\r\n\r\n        //fluent\r\n        doc(target).is(query);\r\n\r\n        //legacy\r\n        doc.is(target, query);\r\n*/\r\n\r\nfunction is(target, query){\r\n    target = getTarget(target);\r\n\r\n    if(isList(target)){\r\n        target = target[0];\r\n    }\r\n\r\n    if(!target.ownerDocument || typeof query !== 'string'){\r\n        return target === query;\r\n    }\r\n\r\n    if(target === query){\r\n        return true;\r\n    }\r\n\r\n    var parentless = !target.parentNode;\r\n\r\n    if(parentless){\r\n        // Give the element a parent so that .querySelectorAll can be used\r\n        document.createDocumentFragment().appendChild(target);\r\n    }\r\n\r\n    var result = arrayProto.indexOf.call(find(target.parentNode, query), target) >= 0;\r\n\r\n    if(parentless){\r\n        target.parentNode.removeChild(target);\r\n    }\r\n\r\n    return result;\r\n}\r\n\r\n/**\r\n\r\n    ## .addClass\r\n\r\n    adds classes to the target (space separated string or array)\r\n\r\n        //fluent\r\n        doc(target).addClass(query);\r\n\r\n        //legacy\r\n        doc.addClass(target, query);\r\n*/\r\n\r\nfunction addClass(target, classes){\r\n    target = getTargets(target);\r\n\r\n    if(isList(target)){\r\n        for (var i = 0; i < target.length; i++) {\r\n            addClass(target[i], classes);\r\n        }\r\n        return this;\r\n    }\r\n    if(!classes){\r\n        return this;\r\n    }\r\n\r\n    var classes = Array.isArray(classes) ? classes : classes.split(space),\r\n        currentClasses = target.classList ? null : target.className.split(space);\r\n\r\n    for(var i = 0; i < classes.length; i++){\r\n        var classToAdd = classes[i];\r\n        if(!classToAdd || classToAdd === space){\r\n            continue;\r\n        }\r\n        if(target.classList){\r\n            target.classList.add(classToAdd);\r\n        } else if(!currentClasses.indexOf(classToAdd)>=0){\r\n            currentClasses.push(classToAdd);\r\n        }\r\n    }\r\n    if(!target.classList){\r\n        target.className = currentClasses.join(space);\r\n    }\r\n    return this;\r\n}\r\n\r\n/**\r\n\r\n    ## .removeClass\r\n\r\n    removes classes from the target (space separated string or array)\r\n\r\n        //fluent\r\n        doc(target).removeClass(query);\r\n\r\n        //legacy\r\n        doc.removeClass(target, query);\r\n*/\r\n\r\nfunction removeClass(target, classes){\r\n    target = getTargets(target);\r\n\r\n    if(isList(target)){\r\n        for (var i = 0; i < target.length; i++) {\r\n            removeClass(target[i], classes);\r\n        }\r\n        return this;\r\n    }\r\n\r\n    if(!classes){\r\n        return this;\r\n    }\r\n\r\n    var classes = Array.isArray(classes) ? classes : classes.split(space),\r\n        currentClasses = target.classList ? null : target.className.split(space);\r\n\r\n    for(var i = 0; i < classes.length; i++){\r\n        var classToRemove = classes[i];\r\n        if(!classToRemove || classToRemove === space){\r\n            continue;\r\n        }\r\n        if(target.classList){\r\n            target.classList.remove(classToRemove);\r\n            continue;\r\n        }\r\n        var removeIndex = currentClasses.indexOf(classToRemove);\r\n        if(removeIndex >= 0){\r\n            currentClasses.splice(removeIndex, 1);\r\n        }\r\n    }\r\n    if(!target.classList){\r\n        target.className = currentClasses.join(space);\r\n    }\r\n    return this;\r\n}\r\n\r\nfunction addEvent(settings){\r\n    var target = getTarget(settings.target);\r\n    if(target){\r\n        target.addEventListener(settings.event, settings.callback, false);\r\n    }else{\r\n        console.warn('No elements matched the selector, so no events were bound.');\r\n    }\r\n}\r\n\r\n/**\r\n\r\n    ## .on\r\n\r\n    binds a callback to a target when a DOM event is raised.\r\n\r\n        //fluent\r\n        doc(target/proxy).on(events, target[optional], callback);\r\n\r\n    note: if a target is passed to the .on function, doc's target will be used as the proxy.\r\n\r\n        //legacy\r\n        doc.on(events, target, query, proxy[optional]);\r\n*/\r\n\r\nfunction on(events, target, callback, proxy){\r\n\r\n    proxy = getTargets(proxy);\r\n\r\n    if(!proxy){\r\n        target = getTargets(target);\r\n        // handles multiple targets\r\n        if(isList(target)){\r\n            var multiRemoveCallbacks = [];\r\n            for (var i = 0; i < target.length; i++) {\r\n                multiRemoveCallbacks.push(on(events, target[i], callback, proxy));\r\n            }\r\n            return function(){\r\n                while(multiRemoveCallbacks.length){\r\n                    multiRemoveCallbacks.pop();\r\n                }\r\n            };\r\n        }\r\n    }\r\n\r\n    // handles multiple proxies\r\n    // Already handles multiple proxies and targets,\r\n    // because the target loop calls this loop.\r\n    if(isList(proxy)){\r\n        var multiRemoveCallbacks = [];\r\n        for (var i = 0; i < proxy.length; i++) {\r\n            multiRemoveCallbacks.push(on(events, target, callback, proxy[i]));\r\n        }\r\n        return function(){\r\n            while(multiRemoveCallbacks.length){\r\n                multiRemoveCallbacks.pop();\r\n            }\r\n        };\r\n    }\r\n\r\n    var removeCallbacks = [];\r\n\r\n    if(typeof events === 'string'){\r\n        events = events.split(space);\r\n    }\r\n\r\n    for(var i = 0; i < events.length; i++){\r\n        var eventSettings = {};\r\n        if(proxy){\r\n            if(proxy === true){\r\n                proxy = doc.document;\r\n            }\r\n            eventSettings.target = proxy;\r\n            eventSettings.callback = function(event){\r\n                var closestTarget = closest(event.target, target);\r\n                if(closestTarget){\r\n                    callback(event, closestTarget);\r\n                }\r\n            };\r\n        }else{\r\n            eventSettings.target = target;\r\n            eventSettings.callback = callback;\r\n        }\r\n\r\n        eventSettings.event = events[i];\r\n\r\n        addEvent(eventSettings);\r\n\r\n        removeCallbacks.push(eventSettings);\r\n    }\r\n\r\n    return function(){\r\n        while(removeCallbacks.length){\r\n            var removeCallback = removeCallbacks.pop();\r\n            getTarget(removeCallback.target).removeEventListener(removeCallback.event, removeCallback.callback);\r\n        }\r\n    }\r\n}\r\n\r\n/**\r\n\r\n    ## .off\r\n\r\n    removes events assigned to a target.\r\n\r\n        //fluent\r\n        doc(target/proxy).off(events, target[optional], callback);\r\n\r\n    note: if a target is passed to the .on function, doc's target will be used as the proxy.\r\n\r\n        //legacy\r\n        doc.off(events, target, callback, proxy);\r\n*/\r\n\r\nfunction off(events, target, callback, proxy){\r\n    if(isList(target)){\r\n        for (var i = 0; i < target.length; i++) {\r\n            off(events, target[i], callback, proxy);\r\n        }\r\n        return this;\r\n    }\r\n    if(proxy instanceof Array){\r\n        for (var i = 0; i < proxy.length; i++) {\r\n            off(events, target, callback, proxy[i]);\r\n        }\r\n        return this;\r\n    }\r\n\r\n    if(typeof events === 'string'){\r\n        events = events.split(space);\r\n    }\r\n\r\n    if(typeof callback !== 'function'){\r\n        proxy = callback;\r\n        callback = null;\r\n    }\r\n\r\n    proxy = proxy ? getTarget(proxy) : doc.document;\r\n\r\n    var targets = typeof target === 'string' ? find(target, proxy) : [target];\r\n\r\n    for(var targetIndex = 0; targetIndex < targets.length; targetIndex++){\r\n        var currentTarget = targets[targetIndex];\r\n\r\n        for(var i = 0; i < events.length; i++){\r\n            currentTarget.removeEventListener(events[i], callback);\r\n        }\r\n    }\r\n    return this;\r\n}\r\n\r\n/**\r\n\r\n    ## .append\r\n\r\n    adds elements to a target\r\n\r\n        //fluent\r\n        doc(target).append(children);\r\n\r\n        //legacy\r\n        doc.append(target, children);\r\n*/\r\n\r\nfunction append(target, children){\r\n    var target = getTarget(target),\r\n        children = getTarget(children);\r\n\r\n    if(isList(target)){\r\n        target = target[0];\r\n    }\r\n\r\n    if(isList(children)){\r\n        for (var i = 0; i < children.length; i++) {\r\n            append(target, children[i]);\r\n        }\r\n        return;\r\n    }\r\n\r\n    target.appendChild(children);\r\n}\r\n\r\n/**\r\n\r\n    ## .prepend\r\n\r\n    adds elements to the front of a target\r\n\r\n        //fluent\r\n        doc(target).prepend(children);\r\n\r\n        //legacy\r\n        doc.prepend(target, children);\r\n*/\r\n\r\nfunction prepend(target, children){\r\n    var target = getTarget(target),\r\n        children = getTarget(children);\r\n\r\n    if(isList(target)){\r\n        target = target[0];\r\n    }\r\n\r\n    if(isList(children)){\r\n        //reversed because otherwise the would get put in in the wrong order.\r\n        for (var i = children.length -1; i; i--) {\r\n            prepend(target, children[i]);\r\n        }\r\n        return;\r\n    }\r\n\r\n    target.insertBefore(children, target.firstChild);\r\n}\r\n\r\n/**\r\n\r\n    ## .isVisible\r\n\r\n    checks if an element or any of its parents display properties are set to 'none'\r\n\r\n        //fluent\r\n        doc(target).isVisible();\r\n\r\n        //legacy\r\n        doc.isVisible(target);\r\n*/\r\n\r\nfunction isVisible(target){\r\n    var target = getTarget(target);\r\n    if(!target){\r\n        return;\r\n    }\r\n    if(isList(target)){\r\n        var i = -1;\r\n\r\n        while (target[i++] && isVisible(target[i])) {}\r\n        return target.length >= i;\r\n    }\r\n    while(target.parentNode && target.style.display !== 'none'){\r\n        target = target.parentNode;\r\n    }\r\n\r\n    return target === doc.document;\r\n}\r\n\r\n/**\r\n\r\n    ## .indexOfElement\r\n\r\n    returns the index of the element within it's parent element.\r\n\r\n        //fluent\r\n        doc(target).indexOfElement();\r\n\r\n        //legacy\r\n        doc.indexOfElement(target);\r\n\r\n*/\r\n\r\nfunction indexOfElement(target) {\r\n    target = getTargets(target);\r\n    if(!target){\r\n        return;\r\n    }\r\n\r\n    if(isList(target)){\r\n        target = target[0];\r\n    }\r\n\r\n    var i = -1;\r\n\r\n    var parent = target.parentElement;\r\n\r\n    if(!parent){\r\n        return i;\r\n    }\r\n\r\n    while(parent.children[++i] !== target){}\r\n\r\n    return i;\r\n}\r\n\r\n\r\n/**\r\n\r\n    ## .ready\r\n\r\n    call a callback when the document is ready.\r\n\r\n    returns -1 if there is no parentElement on the target.\r\n\r\n        //fluent\r\n        doc().ready(callback);\r\n\r\n        //legacy\r\n        doc.ready(callback);\r\n*/\r\n\r\nfunction ready(callback){\r\n    if(doc.document && (doc.document.readyState === 'complete' || doc.document.readyState === 'interactive')){\r\n        callback();\r\n    }else if(window.attachEvent){\r\n        document.attachEvent(\"onreadystatechange\", callback);\r\n        window.attachEvent(\"onLoad\",callback);\r\n    }else if(document.addEventListener){\r\n        document.addEventListener(\"DOMContentLoaded\",callback,false);\r\n    }\r\n}\r\n\r\ndoc.find = find;\r\ndoc.findOne = findOne;\r\ndoc.closest = closest;\r\ndoc.is = is;\r\ndoc.addClass = addClass;\r\ndoc.removeClass = removeClass;\r\ndoc.off = off;\r\ndoc.on = on;\r\ndoc.append = append;\r\ndoc.prepend = prepend;\r\ndoc.isVisible = isVisible;\r\ndoc.ready = ready;\r\ndoc.indexOfElement = indexOfElement;\r\n\r\nmodule.exports = doc;\n\n//# sourceURL=webpack:///./node_modules/doc-js/doc.js?");

/***/ }),

/***/ "./node_modules/doc-js/fluent.js":
/*!***************************************!*\
  !*** ./node_modules/doc-js/fluent.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var doc = __webpack_require__(/*! ./doc */ \"./node_modules/doc-js/doc.js\"),\r\n    isList = __webpack_require__(/*! ./isList */ \"./node_modules/doc-js/isList.js\"),\r\n    getTargets = __webpack_require__(/*! ./getTargets */ \"./node_modules/doc-js/getTargets.js\")(doc.document),\r\n    flocProto = [];\r\n\r\nfunction Floc(items){\r\n    this.push.apply(this, items);\r\n}\r\nFloc.prototype = flocProto;\r\nflocProto.constructor = Floc;\r\n\r\nfunction floc(target){\r\n    var instance = getTargets(target);\r\n\r\n    if(!isList(instance)){\r\n        if(instance){\r\n            instance = [instance];\r\n        }else{\r\n            instance = [];\r\n        }\r\n    }\r\n    return new Floc(instance);\r\n}\r\n\r\nvar returnsSelf = 'addClass removeClass append prepend'.split(' ');\r\n\r\nfor(var key in doc){\r\n    if(typeof doc[key] === 'function'){\r\n        floc[key] = doc[key];\r\n        flocProto[key] = (function(key){\r\n            var instance = this;\r\n            // This is also extremely dodgy and fast\r\n            return function(a,b,c,d,e,f){\r\n                var result = doc[key](this, a,b,c,d,e,f);\r\n\r\n                if(result !== doc && isList(result)){\r\n                    return floc(result);\r\n                }\r\n                if(returnsSelf.indexOf(key) >=0){\r\n                    return instance;\r\n                }\r\n                return result;\r\n            };\r\n        }(key));\r\n    }\r\n}\r\nflocProto.on = function(events, target, callback){\r\n    var proxy = this;\r\n    if(typeof target === 'function'){\r\n        callback = target;\r\n        target = this;\r\n        proxy = null;\r\n    }\r\n    doc.on(events, target, callback, proxy);\r\n    return this;\r\n};\r\n\r\nflocProto.off = function(events, target, callback){\r\n    var reference = this;\r\n    if(typeof target === 'function'){\r\n        callback = target;\r\n        target = this;\r\n        reference = null;\r\n    }\r\n    doc.off(events, target, callback, reference);\r\n    return this;\r\n};\r\n\r\nflocProto.ready = function(callback){\r\n    doc.ready(callback);\r\n    return this;\r\n};\r\n\r\nflocProto.addClass = function(className){\r\n    doc.addClass(this, className);\r\n    return this;\r\n};\r\n\r\nflocProto.removeClass = function(className){\r\n    doc.removeClass(this, className);\r\n    return this;\r\n};\r\n\r\nmodule.exports = floc;\n\n//# sourceURL=webpack:///./node_modules/doc-js/fluent.js?");

/***/ }),

/***/ "./node_modules/doc-js/getTarget.js":
/*!******************************************!*\
  !*** ./node_modules/doc-js/getTarget.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var singleId = /^#\\w+$/;\n\nmodule.exports = function(document){\n    return function getTarget(target){\n        if(typeof target === 'string'){\n            if(singleId.exec(target)){\n                return document.getElementById(target.slice(1));\n            }\n            return document.querySelector(target);\n        }\n\n        return target;\n    };\n};\n\n//# sourceURL=webpack:///./node_modules/doc-js/getTarget.js?");

/***/ }),

/***/ "./node_modules/doc-js/getTargets.js":
/*!*******************************************!*\
  !*** ./node_modules/doc-js/getTargets.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nvar singleClass = /^\\.\\w+$/,\n    singleId = /^#\\w+$/,\n    singleTag = /^\\w+$/;\n\nmodule.exports = function(document){\n    return function getTargets(target){\n        if(typeof target === 'string'){\n            if(singleId.exec(target)){\n                // If you have more than 1 of the same id in your page,\n                // thats your own stupid fault.\n                return [document.getElementById(target.slice(1))];\n            }\n            if(singleTag.exec(target)){\n                return document.getElementsByTagName(target);\n            }\n            if(singleClass.exec(target)){\n                return document.getElementsByClassName(target.slice(1));\n            }\n            return document.querySelectorAll(target);\n        }\n\n        return target;\n    };\n};\n\n//# sourceURL=webpack:///./node_modules/doc-js/getTargets.js?");

/***/ }),

/***/ "./node_modules/doc-js/isList.js":
/*!***************************************!*\
  !*** ./node_modules/doc-js/isList.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function isList(object){\r\n    return object != null && typeof object === 'object' && 'length' in object && !('nodeType' in object) && object.self != object; // in IE8, window.self is window, but it is not === window, but it is == window......... WTF!?\r\n}\n\n//# sourceURL=webpack:///./node_modules/doc-js/isList.js?");

/***/ }),

/***/ "./node_modules/try-parse-json/index.js":
/*!**********************************************!*\
  !*** ./node_modules/try-parse-json/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (json, reviver){\n    try {\n        return JSON.parse(json, reviver);\n    } catch(error){\n        return error;\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/try-parse-json/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const crel = __webpack_require__(/*! crel */ \"./node_modules/crel/crel.js\");\nconst doc = __webpack_require__(/*! doc-js */ \"./node_modules/doc-js/fluent.js\");\nconst createStorageHost = __webpack_require__(/*! cross-domain-storage/host */ \"./node_modules/cross-domain-storage/host/index.js\");\n\nconst instructions = crel('div', {\n    class: 'instructions',\n},\n    crel('h3', 'cross-domain-storage host')\n);\n\ndoc.ready(function () {\n    crel(document.body,\n        instructions\n    );\n\n    window.localStorage.setItem('foo', JSON.stringify('ezpzls'));\n\n    const storageHost = createStorageHost([\n        {\n            origin: 'http://localhost:8080',\n            allowedMethods: ['get', 'set', 'remove'],\n        },\n    ]);\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });