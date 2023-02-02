/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 553:
/***/ ((module) => {

(function(){
"use strict";
var doc = document;
var win = window;
var docEle = doc.documentElement;
var createElement = doc.createElement.bind(doc);
var div = createElement('div');
var table = createElement('table');
var tbody = createElement('tbody');
var tr = createElement('tr');
var isArray = Array.isArray, ArrayPrototype = Array.prototype;
var concat = ArrayPrototype.concat, filter = ArrayPrototype.filter, indexOf = ArrayPrototype.indexOf, map = ArrayPrototype.map, push = ArrayPrototype.push, slice = ArrayPrototype.slice, some = ArrayPrototype.some, splice = ArrayPrototype.splice;
var idRe = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/;
var classRe = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/;
var htmlRe = /<.+>/;
var tagRe = /^\w+$/;
// @require ./variables.ts
function find(selector, context) {
    var isFragment = isDocumentFragment(context);
    return !selector || (!isFragment && !isDocument(context) && !isElement(context))
        ? []
        : !isFragment && classRe.test(selector)
            ? context.getElementsByClassName(selector.slice(1).replace(/\\/g, ''))
            : !isFragment && tagRe.test(selector)
                ? context.getElementsByTagName(selector)
                : context.querySelectorAll(selector);
}
// @require ./find.ts
// @require ./variables.ts
var Cash = /** @class */ (function () {
    function Cash(selector, context) {
        if (!selector)
            return;
        if (isCash(selector))
            return selector;
        var eles = selector;
        if (isString(selector)) {
            var ctx = (isCash(context) ? context[0] : context) || doc;
            eles = idRe.test(selector) && 'getElementById' in ctx
                ? ctx.getElementById(selector.slice(1).replace(/\\/g, ''))
                : htmlRe.test(selector)
                    ? parseHTML(selector)
                    : find(selector, ctx);
            if (!eles)
                return;
        }
        else if (isFunction(selector)) {
            return this.ready(selector); //FIXME: `fn.ready` is not included in `core`, but it's actually a core functionality
        }
        if (eles.nodeType || eles === win)
            eles = [eles];
        this.length = eles.length;
        for (var i = 0, l = this.length; i < l; i++) {
            this[i] = eles[i];
        }
    }
    Cash.prototype.init = function (selector, context) {
        return new Cash(selector, context);
    };
    return Cash;
}());
var fn = Cash.prototype;
var cash = fn.init;
cash.fn = cash.prototype = fn; // Ensuring that `cash () instanceof cash`
fn.length = 0;
fn.splice = splice; // Ensuring a cash collection gets printed as array-like in Chrome's devtools
if (typeof Symbol === 'function') { // Ensuring a cash collection is iterable
    fn[Symbol['iterator']] = ArrayPrototype[Symbol['iterator']];
}
function isCash(value) {
    return value instanceof Cash;
}
function isWindow(value) {
    return !!value && value === value.window;
}
function isDocument(value) {
    return !!value && value.nodeType === 9;
}
function isDocumentFragment(value) {
    return !!value && value.nodeType === 11;
}
function isElement(value) {
    return !!value && value.nodeType === 1;
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isFunction(value) {
    return typeof value === 'function';
}
function isString(value) {
    return typeof value === 'string';
}
function isUndefined(value) {
    return value === undefined;
}
function isNull(value) {
    return value === null;
}
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
function isPlainObject(value) {
    if (typeof value !== 'object' || value === null)
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype;
}
cash.isWindow = isWindow;
cash.isFunction = isFunction;
cash.isArray = isArray;
cash.isNumeric = isNumeric;
cash.isPlainObject = isPlainObject;
function each(arr, callback, _reverse) {
    if (_reverse) {
        var i = arr.length;
        while (i--) {
            if (callback.call(arr[i], i, arr[i]) === false)
                return arr;
        }
    }
    else if (isPlainObject(arr)) {
        var keys = Object.keys(arr);
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            if (callback.call(arr[key], key, arr[key]) === false)
                return arr;
        }
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(arr[i], i, arr[i]) === false)
                return arr;
        }
    }
    return arr;
}
cash.each = each;
fn.each = function (callback) {
    return each(this, callback);
};
fn.empty = function () {
    return this.each(function (i, ele) {
        while (ele.firstChild) {
            ele.removeChild(ele.firstChild);
        }
    });
};
function text(text) {
    if (isUndefined(text))
        return this[0] ? this[0].textContent : '';
    return this.each(function (i, ele) {
        if (!isElement(ele))
            return;
        ele.textContent = text;
    });
}
;
fn.text = text;
function extend() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var deep = isBoolean(sources[0]) ? sources.shift() : false;
    var target = sources.shift();
    var length = sources.length;
    if (!target)
        return {};
    if (!length)
        return extend(deep, cash, target);
    for (var i = 0; i < length; i++) {
        var source = sources[i];
        for (var key in source) {
            if (deep && (isArray(source[key]) || isPlainObject(source[key]))) {
                if (!target[key] || target[key].constructor !== source[key].constructor)
                    target[key] = new source[key].constructor();
                extend(deep, target[key], source[key]);
            }
            else {
                target[key] = source[key];
            }
        }
    }
    return target;
}
cash.extend = extend;
fn.extend = function (plugins) {
    return extend(fn, plugins);
};
// @require ./type_checking.ts
var splitValuesRe = /\S+/g;
function getSplitValues(str) {
    return isString(str) ? str.match(splitValuesRe) || [] : [];
}
fn.toggleClass = function (cls, force) {
    var classes = getSplitValues(cls);
    var isForce = !isUndefined(force);
    return this.each(function (i, ele) {
        if (!isElement(ele))
            return;
        each(classes, function (i, c) {
            if (isForce) {
                force ? ele.classList.add(c) : ele.classList.remove(c);
            }
            else {
                ele.classList.toggle(c);
            }
        });
    });
};
fn.addClass = function (cls) {
    return this.toggleClass(cls, true);
};
fn.removeAttr = function (attr) {
    var attrs = getSplitValues(attr);
    return this.each(function (i, ele) {
        if (!isElement(ele))
            return;
        each(attrs, function (i, a) {
            ele.removeAttribute(a);
        });
    });
};
function attr(attr, value) {
    if (!attr)
        return;
    if (isString(attr)) {
        if (arguments.length < 2) {
            if (!this[0] || !isElement(this[0]))
                return;
            var value_1 = this[0].getAttribute(attr);
            return isNull(value_1) ? undefined : value_1;
        }
        if (isUndefined(value))
            return this;
        if (isNull(value))
            return this.removeAttr(attr);
        return this.each(function (i, ele) {
            if (!isElement(ele))
                return;
            ele.setAttribute(attr, value);
        });
    }
    for (var key in attr) {
        this.attr(key, attr[key]);
    }
    return this;
}
fn.attr = attr;
fn.removeClass = function (cls) {
    if (arguments.length)
        return this.toggleClass(cls, false);
    return this.attr('class', '');
};
fn.hasClass = function (cls) {
    return !!cls && some.call(this, function (ele) { return isElement(ele) && ele.classList.contains(cls); });
};
fn.get = function (index) {
    if (isUndefined(index))
        return slice.call(this);
    index = Number(index);
    return this[index < 0 ? index + this.length : index];
};
fn.eq = function (index) {
    return cash(this.get(index));
};
fn.first = function () {
    return this.eq(0);
};
fn.last = function () {
    return this.eq(-1);
};
// @require core/type_checking.ts
// @require core/variables.ts
function computeStyle(ele, prop, isVariable) {
    if (!isElement(ele))
        return;
    var style = win.getComputedStyle(ele, null);
    return isVariable ? style.getPropertyValue(prop) || undefined : style[prop] || ele.style[prop];
}
// @require ./compute_style.ts
function computeStyleInt(ele, prop) {
    return parseInt(computeStyle(ele, prop), 10) || 0;
}
// @require css/helpers/compute_style_int.ts
function getExtraSpace(ele, xAxis) {
    return computeStyleInt(ele, "border".concat(xAxis ? 'Left' : 'Top', "Width")) + computeStyleInt(ele, "padding".concat(xAxis ? 'Left' : 'Top')) + computeStyleInt(ele, "padding".concat(xAxis ? 'Right' : 'Bottom')) + computeStyleInt(ele, "border".concat(xAxis ? 'Right' : 'Bottom', "Width"));
}
// @require css/helpers/compute_style.ts
var defaultDisplay = {};
function getDefaultDisplay(tagName) {
    if (defaultDisplay[tagName])
        return defaultDisplay[tagName];
    var ele = createElement(tagName);
    doc.body.insertBefore(ele, null);
    var display = computeStyle(ele, 'display');
    doc.body.removeChild(ele);
    return defaultDisplay[tagName] = display !== 'none' ? display : 'block';
}
// @require css/helpers/compute_style.ts
function isHidden(ele) {
    return computeStyle(ele, 'display') === 'none';
}
// @require ./cash.ts
function matches(ele, selector) {
    var matches = ele && (ele['matches'] || ele['webkitMatchesSelector'] || ele['msMatchesSelector']);
    return !!matches && !!selector && matches.call(ele, selector);
}
// @require ./matches.ts
// @require ./type_checking.ts
function getCompareFunction(comparator) {
    return isString(comparator)
        ? function (i, ele) { return matches(ele, comparator); }
        : isFunction(comparator)
            ? comparator
            : isCash(comparator)
                ? function (i, ele) { return comparator.is(ele); }
                : !comparator
                    ? function () { return false; }
                    : function (i, ele) { return ele === comparator; };
}
fn.filter = function (comparator) {
    var compare = getCompareFunction(comparator);
    return cash(filter.call(this, function (ele, i) { return compare.call(ele, i, ele); }));
};
// @require collection/filter.ts
function filtered(collection, comparator) {
    return !comparator ? collection : collection.filter(comparator);
}
fn.detach = function (comparator) {
    filtered(this, comparator).each(function (i, ele) {
        if (ele.parentNode) {
            ele.parentNode.removeChild(ele);
        }
    });
    return this;
};
var fragmentRe = /^\s*<(\w+)[^>]*>/;
var singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
var containers = {
    '*': div,
    tr: tbody,
    td: tr,
    th: tr,
    thead: table,
    tbody: table,
    tfoot: table
};
//TODO: Create elements inside a document fragment, in order to prevent inline event handlers from firing
//TODO: Ensure the created elements have the fragment as their parent instead of null, this also ensures we can deal with detatched nodes more reliably
function parseHTML(html) {
    if (!isString(html))
        return [];
    if (singleTagRe.test(html))
        return [createElement(RegExp.$1)];
    var fragment = fragmentRe.test(html) && RegExp.$1;
    var container = containers[fragment] || containers['*'];
    container.innerHTML = html;
    return cash(container.childNodes).detach().get();
}
cash.parseHTML = parseHTML;
fn.has = function (selector) {
    var comparator = isString(selector)
        ? function (i, ele) { return find(selector, ele).length; }
        : function (i, ele) { return ele.contains(selector); };
    return this.filter(comparator);
};
fn.not = function (comparator) {
    var compare = getCompareFunction(comparator);
    return this.filter(function (i, ele) { return (!isString(comparator) || isElement(ele)) && !compare.call(ele, i, ele); });
};
function pluck(arr, prop, deep, until) {
    var plucked = [];
    var isCallback = isFunction(prop);
    var compare = until && getCompareFunction(until);
    for (var i = 0, l = arr.length; i < l; i++) {
        if (isCallback) {
            var val_1 = prop(arr[i]);
            if (val_1.length)
                push.apply(plucked, val_1);
        }
        else {
            var val_2 = arr[i][prop];
            while (val_2 != null) {
                if (until && compare(-1, val_2))
                    break;
                plucked.push(val_2);
                val_2 = deep ? val_2[prop] : null;
            }
        }
    }
    return plucked;
}
// @require core/pluck.ts
// @require core/variables.ts
function getValue(ele) {
    if (ele.multiple && ele.options)
        return pluck(filter.call(ele.options, function (option) { return option.selected && !option.disabled && !option.parentNode.disabled; }), 'value');
    return ele.value || '';
}
function val(value) {
    if (!arguments.length)
        return this[0] && getValue(this[0]);
    return this.each(function (i, ele) {
        var isSelect = ele.multiple && ele.options;
        if (isSelect || checkableRe.test(ele.type)) {
            var eleValue_1 = isArray(value) ? map.call(value, String) : (isNull(value) ? [] : [String(value)]);
            if (isSelect) {
                each(ele.options, function (i, option) {
                    option.selected = eleValue_1.indexOf(option.value) >= 0;
                }, true);
            }
            else {
                ele.checked = eleValue_1.indexOf(ele.value) >= 0;
            }
        }
        else {
            ele.value = isUndefined(value) || isNull(value) ? '' : value;
        }
    });
}
fn.val = val;
fn.is = function (comparator) {
    var compare = getCompareFunction(comparator);
    return some.call(this, function (ele, i) { return compare.call(ele, i, ele); });
};
cash.guid = 1;
function unique(arr) {
    return arr.length > 1 ? filter.call(arr, function (item, index, self) { return indexOf.call(self, item) === index; }) : arr;
}
cash.unique = unique;
fn.add = function (selector, context) {
    return cash(unique(this.get().concat(cash(selector, context).get())));
};
fn.children = function (comparator) {
    return filtered(cash(unique(pluck(this, function (ele) { return ele.children; }))), comparator);
};
fn.parent = function (comparator) {
    return filtered(cash(unique(pluck(this, 'parentNode'))), comparator);
};
fn.index = function (selector) {
    var child = selector ? cash(selector)[0] : this[0];
    var collection = selector ? this : cash(child).parent().children();
    return indexOf.call(collection, child);
};
fn.closest = function (comparator) {
    var filtered = this.filter(comparator);
    if (filtered.length)
        return filtered;
    var $parent = this.parent();
    if (!$parent.length)
        return filtered;
    return $parent.closest(comparator);
};
fn.siblings = function (comparator) {
    return filtered(cash(unique(pluck(this, function (ele) { return cash(ele).parent().children().not(ele); }))), comparator);
};
fn.find = function (selector) {
    return cash(unique(pluck(this, function (ele) { return find(selector, ele); })));
};
// @require core/variables.ts
// @require collection/filter.ts
// @require traversal/find.ts
var HTMLCDATARe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
var scriptTypeRe = /^$|^module$|\/(java|ecma)script/i;
var scriptAttributes = ['type', 'src', 'nonce', 'noModule'];
function evalScripts(node, doc) {
    var collection = cash(node);
    collection.filter('script').add(collection.find('script')).each(function (i, ele) {
        if (scriptTypeRe.test(ele.type) && docEle.contains(ele)) { // The script type is supported // The element is attached to the DOM // Using `documentElement` for broader browser support
            var script_1 = createElement('script');
            script_1.text = ele.textContent.replace(HTMLCDATARe, '');
            each(scriptAttributes, function (i, attr) {
                if (ele[attr])
                    script_1[attr] = ele[attr];
            });
            doc.head.insertBefore(script_1, null);
            doc.head.removeChild(script_1);
        }
    });
}
// @require ./eval_scripts.ts
function insertElement(anchor, target, left, inside, evaluate) {
    if (inside) { // prepend/append
        anchor.insertBefore(target, left ? anchor.firstChild : null);
    }
    else { // before/after
        if (anchor.nodeName === 'HTML') {
            anchor.parentNode.replaceChild(target, anchor);
        }
        else {
            anchor.parentNode.insertBefore(target, left ? anchor : anchor.nextSibling);
        }
    }
    if (evaluate) {
        evalScripts(target, anchor.ownerDocument);
    }
}
// @require ./insert_element.ts
function insertSelectors(selectors, anchors, inverse, left, inside, reverseLoop1, reverseLoop2, reverseLoop3) {
    each(selectors, function (si, selector) {
        each(cash(selector), function (ti, target) {
            each(cash(anchors), function (ai, anchor) {
                var anchorFinal = inverse ? target : anchor;
                var targetFinal = inverse ? anchor : target;
                var indexFinal = inverse ? ti : ai;
                insertElement(anchorFinal, !indexFinal ? targetFinal : targetFinal.cloneNode(true), left, inside, !indexFinal);
            }, reverseLoop3);
        }, reverseLoop2);
    }, reverseLoop1);
    return anchors;
}
fn.after = function () {
    return insertSelectors(arguments, this, false, false, false, true, true);
};
fn.append = function () {
    return insertSelectors(arguments, this, false, false, true);
};
function html(html) {
    if (!arguments.length)
        return this[0] && this[0].innerHTML;
    if (isUndefined(html))
        return this;
    var hasScript = /<script[\s>]/.test(html);
    return this.each(function (i, ele) {
        if (!isElement(ele))
            return;
        if (hasScript) {
            cash(ele).empty().append(html);
        }
        else {
            ele.innerHTML = html;
        }
    });
}
fn.html = html;
fn.appendTo = function (selector) {
    return insertSelectors(arguments, this, true, false, true);
};
fn.wrapInner = function (selector) {
    return this.each(function (i, ele) {
        var $ele = cash(ele);
        var contents = $ele.contents();
        contents.length ? contents.wrapAll(selector) : $ele.append(selector);
    });
};
fn.before = function () {
    return insertSelectors(arguments, this, false, true);
};
fn.wrapAll = function (selector) {
    var structure = cash(selector);
    var wrapper = structure[0];
    while (wrapper.children.length)
        wrapper = wrapper.firstElementChild;
    this.first().before(structure);
    return this.appendTo(wrapper);
};
fn.wrap = function (selector) {
    return this.each(function (i, ele) {
        var wrapper = cash(selector)[0];
        cash(ele).wrapAll(!i ? wrapper : wrapper.cloneNode(true));
    });
};
fn.insertAfter = function (selector) {
    return insertSelectors(arguments, this, true, false, false, false, false, true);
};
fn.insertBefore = function (selector) {
    return insertSelectors(arguments, this, true, true);
};
fn.prepend = function () {
    return insertSelectors(arguments, this, false, true, true, true, true);
};
fn.prependTo = function (selector) {
    return insertSelectors(arguments, this, true, true, true, false, false, true);
};
fn.contents = function () {
    return cash(unique(pluck(this, function (ele) { return ele.tagName === 'IFRAME' ? [ele.contentDocument] : (ele.tagName === 'TEMPLATE' ? ele.content.childNodes : ele.childNodes); })));
};
fn.next = function (comparator, _all, _until) {
    return filtered(cash(unique(pluck(this, 'nextElementSibling', _all, _until))), comparator);
};
fn.nextAll = function (comparator) {
    return this.next(comparator, true);
};
fn.nextUntil = function (until, comparator) {
    return this.next(comparator, true, until);
};
fn.parents = function (comparator, _until) {
    return filtered(cash(unique(pluck(this, 'parentElement', true, _until))), comparator);
};
fn.parentsUntil = function (until, comparator) {
    return this.parents(comparator, until);
};
fn.prev = function (comparator, _all, _until) {
    return filtered(cash(unique(pluck(this, 'previousElementSibling', _all, _until))), comparator);
};
fn.prevAll = function (comparator) {
    return this.prev(comparator, true);
};
fn.prevUntil = function (until, comparator) {
    return this.prev(comparator, true, until);
};
fn.map = function (callback) {
    return cash(concat.apply([], map.call(this, function (ele, i) { return callback.call(ele, i, ele); })));
};
fn.clone = function () {
    return this.map(function (i, ele) { return ele.cloneNode(true); });
};
fn.offsetParent = function () {
    return this.map(function (i, ele) {
        var offsetParent = ele.offsetParent;
        while (offsetParent && computeStyle(offsetParent, 'position') === 'static') {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || docEle;
    });
};
fn.slice = function (start, end) {
    return cash(slice.call(this, start, end));
};
// @require ./cash.ts
var dashAlphaRe = /-([a-z])/g;
function camelCase(str) {
    return str.replace(dashAlphaRe, function (match, letter) { return letter.toUpperCase(); });
}
fn.ready = function (callback) {
    var cb = function () { return setTimeout(callback, 0, cash); };
    if (doc.readyState !== 'loading') {
        cb();
    }
    else {
        doc.addEventListener('DOMContentLoaded', cb);
    }
    return this;
};
fn.unwrap = function () {
    this.parent().each(function (i, ele) {
        if (ele.tagName === 'BODY')
            return;
        var $ele = cash(ele);
        $ele.replaceWith($ele.children());
    });
    return this;
};
fn.offset = function () {
    var ele = this[0];
    if (!ele)
        return;
    var rect = ele.getBoundingClientRect();
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
};
fn.position = function () {
    var ele = this[0];
    if (!ele)
        return;
    var isFixed = (computeStyle(ele, 'position') === 'fixed');
    var offset = isFixed ? ele.getBoundingClientRect() : this.offset();
    if (!isFixed) {
        var doc_1 = ele.ownerDocument;
        var offsetParent = ele.offsetParent || doc_1.documentElement;
        while ((offsetParent === doc_1.body || offsetParent === doc_1.documentElement) && computeStyle(offsetParent, 'position') === 'static') {
            offsetParent = offsetParent.parentNode;
        }
        if (offsetParent !== ele && isElement(offsetParent)) {
            var parentOffset = cash(offsetParent).offset();
            offset.top -= parentOffset.top + computeStyleInt(offsetParent, 'borderTopWidth');
            offset.left -= parentOffset.left + computeStyleInt(offsetParent, 'borderLeftWidth');
        }
    }
    return {
        top: offset.top - computeStyleInt(ele, 'marginTop'),
        left: offset.left - computeStyleInt(ele, 'marginLeft')
    };
};
var propMap = {
    /* GENERAL */
    class: 'className',
    contenteditable: 'contentEditable',
    /* LABEL */
    for: 'htmlFor',
    /* INPUT */
    readonly: 'readOnly',
    maxlength: 'maxLength',
    tabindex: 'tabIndex',
    /* TABLE */
    colspan: 'colSpan',
    rowspan: 'rowSpan',
    /* IMAGE */
    usemap: 'useMap'
};
fn.prop = function (prop, value) {
    if (!prop)
        return;
    if (isString(prop)) {
        prop = propMap[prop] || prop;
        if (arguments.length < 2)
            return this[0] && this[0][prop];
        return this.each(function (i, ele) { ele[prop] = value; });
    }
    for (var key in prop) {
        this.prop(key, prop[key]);
    }
    return this;
};
fn.removeProp = function (prop) {
    return this.each(function (i, ele) { delete ele[propMap[prop] || prop]; });
};
var cssVariableRe = /^--/;
// @require ./variables.ts
function isCSSVariable(prop) {
    return cssVariableRe.test(prop);
}
// @require core/camel_case.ts
// @require core/cash.ts
// @require core/each.ts
// @require core/variables.ts
// @require ./is_css_variable.ts
var prefixedProps = {};
var style = div.style;
var vendorsPrefixes = ['webkit', 'moz', 'ms'];
function getPrefixedProp(prop, isVariable) {
    if (isVariable === void 0) { isVariable = isCSSVariable(prop); }
    if (isVariable)
        return prop;
    if (!prefixedProps[prop]) {
        var propCC = camelCase(prop);
        var propUC = "".concat(propCC[0].toUpperCase()).concat(propCC.slice(1));
        var props = ("".concat(propCC, " ").concat(vendorsPrefixes.join("".concat(propUC, " "))).concat(propUC)).split(' ');
        each(props, function (i, p) {
            if (p in style) {
                prefixedProps[prop] = p;
                return false;
            }
        });
    }
    return prefixedProps[prop];
}
// @require core/type_checking.ts
// @require ./is_css_variable.ts
var numericProps = {
    animationIterationCount: true,
    columnCount: true,
    flexGrow: true,
    flexShrink: true,
    fontWeight: true,
    gridArea: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnStart: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowStart: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    widows: true,
    zIndex: true
};
function getSuffixedValue(prop, value, isVariable) {
    if (isVariable === void 0) { isVariable = isCSSVariable(prop); }
    return !isVariable && !numericProps[prop] && isNumeric(value) ? "".concat(value, "px") : value;
}
function css(prop, value) {
    if (isString(prop)) {
        var isVariable_1 = isCSSVariable(prop);
        prop = getPrefixedProp(prop, isVariable_1);
        if (arguments.length < 2)
            return this[0] && computeStyle(this[0], prop, isVariable_1);
        if (!prop)
            return this;
        value = getSuffixedValue(prop, value, isVariable_1);
        return this.each(function (i, ele) {
            if (!isElement(ele))
                return;
            if (isVariable_1) {
                ele.style.setProperty(prop, value);
            }
            else {
                ele.style[prop] = value;
            }
        });
    }
    for (var key in prop) {
        this.css(key, prop[key]);
    }
    return this;
}
;
fn.css = css;
function attempt(fn, arg) {
    try {
        return fn(arg);
    }
    catch (_a) {
        return arg;
    }
}
// @require core/attempt.ts
// @require core/camel_case.ts
var JSONStringRe = /^\s+|\s+$/;
function getData(ele, key) {
    var value = ele.dataset[key] || ele.dataset[camelCase(key)];
    if (JSONStringRe.test(value))
        return value;
    return attempt(JSON.parse, value);
}
// @require core/attempt.ts
// @require core/camel_case.ts
function setData(ele, key, value) {
    value = attempt(JSON.stringify, value);
    ele.dataset[camelCase(key)] = value;
}
function data(name, value) {
    if (!name) {
        if (!this[0])
            return;
        var datas = {};
        for (var key in this[0].dataset) {
            datas[key] = getData(this[0], key);
        }
        return datas;
    }
    if (isString(name)) {
        if (arguments.length < 2)
            return this[0] && getData(this[0], name);
        if (isUndefined(value))
            return this;
        return this.each(function (i, ele) { setData(ele, name, value); });
    }
    for (var key in name) {
        this.data(key, name[key]);
    }
    return this;
}
fn.data = data;
function getDocumentDimension(doc, dimension) {
    var docEle = doc.documentElement;
    return Math.max(doc.body["scroll".concat(dimension)], docEle["scroll".concat(dimension)], doc.body["offset".concat(dimension)], docEle["offset".concat(dimension)], docEle["client".concat(dimension)]);
}
each([true, false], function (i, outer) {
    each(['Width', 'Height'], function (i, prop) {
        var name = "".concat(outer ? 'outer' : 'inner').concat(prop);
        fn[name] = function (includeMargins) {
            if (!this[0])
                return;
            if (isWindow(this[0]))
                return outer ? this[0]["inner".concat(prop)] : this[0].document.documentElement["client".concat(prop)];
            if (isDocument(this[0]))
                return getDocumentDimension(this[0], prop);
            return this[0]["".concat(outer ? 'offset' : 'client').concat(prop)] + (includeMargins && outer ? computeStyleInt(this[0], "margin".concat(i ? 'Top' : 'Left')) + computeStyleInt(this[0], "margin".concat(i ? 'Bottom' : 'Right')) : 0);
        };
    });
});
each(['Width', 'Height'], function (index, prop) {
    var propLC = prop.toLowerCase();
    fn[propLC] = function (value) {
        if (!this[0])
            return isUndefined(value) ? undefined : this;
        if (!arguments.length) {
            if (isWindow(this[0]))
                return this[0].document.documentElement["client".concat(prop)];
            if (isDocument(this[0]))
                return getDocumentDimension(this[0], prop);
            return this[0].getBoundingClientRect()[propLC] - getExtraSpace(this[0], !index);
        }
        var valueNumber = parseInt(value, 10);
        return this.each(function (i, ele) {
            if (!isElement(ele))
                return;
            var boxSizing = computeStyle(ele, 'boxSizing');
            ele.style[propLC] = getSuffixedValue(propLC, valueNumber + (boxSizing === 'border-box' ? getExtraSpace(ele, !index) : 0));
        });
    };
});
var displayProperty = '___cd';
fn.toggle = function (force) {
    return this.each(function (i, ele) {
        if (!isElement(ele))
            return;
        var show = isUndefined(force) ? isHidden(ele) : force;
        if (show) {
            ele.style.display = ele[displayProperty] || '';
            if (isHidden(ele)) {
                ele.style.display = getDefaultDisplay(ele.tagName);
            }
        }
        else {
            ele[displayProperty] = computeStyle(ele, 'display');
            ele.style.display = 'none';
        }
    });
};
fn.hide = function () {
    return this.toggle(false);
};
fn.show = function () {
    return this.toggle(true);
};
var eventsNamespace = '___ce';
var eventsNamespacesSeparator = '.';
var eventsFocus = { focus: 'focusin', blur: 'focusout' };
var eventsHover = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
var eventsMouseRe = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
// @require ./variables.ts
function getEventNameBubbling(name) {
    return eventsHover[name] || eventsFocus[name] || name;
}
// @require ./variables.ts
function parseEventName(eventName) {
    var parts = eventName.split(eventsNamespacesSeparator);
    return [parts[0], parts.slice(1).sort()]; // [name, namespace[]]
}
fn.trigger = function (event, data) {
    if (isString(event)) {
        var _a = parseEventName(event), nameOriginal = _a[0], namespaces = _a[1];
        var name_1 = getEventNameBubbling(nameOriginal);
        if (!name_1)
            return this;
        var type = eventsMouseRe.test(name_1) ? 'MouseEvents' : 'HTMLEvents';
        event = doc.createEvent(type);
        event.initEvent(name_1, true, true);
        event.namespace = namespaces.join(eventsNamespacesSeparator);
        event.___ot = nameOriginal;
    }
    event.___td = data;
    var isEventFocus = (event.___ot in eventsFocus);
    return this.each(function (i, ele) {
        if (isEventFocus && isFunction(ele[event.___ot])) {
            ele["___i".concat(event.type)] = true; // Ensuring the native event is ignored
            ele[event.___ot]();
            ele["___i".concat(event.type)] = false; // Ensuring the custom event is not ignored
        }
        ele.dispatchEvent(event);
    });
};
// @require ./variables.ts
function getEventsCache(ele) {
    return ele[eventsNamespace] = (ele[eventsNamespace] || {});
}
// @require core/guid.ts
// @require events/helpers/get_events_cache.ts
function addEvent(ele, name, namespaces, selector, callback) {
    var eventCache = getEventsCache(ele);
    eventCache[name] = (eventCache[name] || []);
    eventCache[name].push([namespaces, selector, callback]);
    ele.addEventListener(name, callback);
}
function hasNamespaces(ns1, ns2) {
    return !ns2 || !some.call(ns2, function (ns) { return ns1.indexOf(ns) < 0; });
}
// @require ./get_events_cache.ts
// @require ./has_namespaces.ts
// @require ./parse_event_name.ts
function removeEvent(ele, name, namespaces, selector, callback) {
    var cache = getEventsCache(ele);
    if (!name) {
        for (name in cache) {
            removeEvent(ele, name, namespaces, selector, callback);
        }
    }
    else if (cache[name]) {
        cache[name] = cache[name].filter(function (_a) {
            var ns = _a[0], sel = _a[1], cb = _a[2];
            if ((callback && cb.guid !== callback.guid) || !hasNamespaces(ns, namespaces) || (selector && selector !== sel))
                return true;
            ele.removeEventListener(name, cb);
        });
    }
}
fn.off = function (eventFullName, selector, callback) {
    var _this = this;
    if (isUndefined(eventFullName)) {
        this.each(function (i, ele) {
            if (!isElement(ele) && !isDocument(ele) && !isWindow(ele))
                return;
            removeEvent(ele);
        });
    }
    else if (!isString(eventFullName)) {
        for (var key in eventFullName) {
            this.off(key, eventFullName[key]);
        }
    }
    else {
        if (isFunction(selector)) {
            callback = selector;
            selector = '';
        }
        each(getSplitValues(eventFullName), function (i, eventFullName) {
            var _a = parseEventName(eventFullName), nameOriginal = _a[0], namespaces = _a[1];
            var name = getEventNameBubbling(nameOriginal);
            _this.each(function (i, ele) {
                if (!isElement(ele) && !isDocument(ele) && !isWindow(ele))
                    return;
                removeEvent(ele, name, namespaces, selector, callback);
            });
        });
    }
    return this;
};
fn.remove = function (comparator) {
    filtered(this, comparator).detach().off();
    return this;
};
fn.replaceWith = function (selector) {
    return this.before(selector).remove();
};
fn.replaceAll = function (selector) {
    cash(selector).replaceWith(this);
    return this;
};
function on(eventFullName, selector, data, callback, _one) {
    var _this = this;
    if (!isString(eventFullName)) {
        for (var key in eventFullName) {
            this.on(key, selector, data, eventFullName[key], _one);
        }
        return this;
    }
    if (!isString(selector)) {
        if (isUndefined(selector) || isNull(selector)) {
            selector = '';
        }
        else if (isUndefined(data)) {
            data = selector;
            selector = '';
        }
        else {
            callback = data;
            data = selector;
            selector = '';
        }
    }
    if (!isFunction(callback)) {
        callback = data;
        data = undefined;
    }
    if (!callback)
        return this;
    each(getSplitValues(eventFullName), function (i, eventFullName) {
        var _a = parseEventName(eventFullName), nameOriginal = _a[0], namespaces = _a[1];
        var name = getEventNameBubbling(nameOriginal);
        var isEventHover = (nameOriginal in eventsHover);
        var isEventFocus = (nameOriginal in eventsFocus);
        if (!name)
            return;
        _this.each(function (i, ele) {
            if (!isElement(ele) && !isDocument(ele) && !isWindow(ele))
                return;
            var finalCallback = function (event) {
                if (event.target["___i".concat(event.type)])
                    return event.stopImmediatePropagation(); // Ignoring native event in favor of the upcoming custom one
                if (event.namespace && !hasNamespaces(namespaces, event.namespace.split(eventsNamespacesSeparator)))
                    return;
                if (!selector && ((isEventFocus && (event.target !== ele || event.___ot === name)) || (isEventHover && event.relatedTarget && ele.contains(event.relatedTarget))))
                    return;
                var thisArg = ele;
                if (selector) {
                    var target = event.target;
                    while (!matches(target, selector)) {
                        if (target === ele)
                            return;
                        target = target.parentNode;
                        if (!target)
                            return;
                    }
                    thisArg = target;
                }
                Object.defineProperty(event, 'currentTarget', {
                    configurable: true,
                    get: function () {
                        return thisArg;
                    }
                });
                Object.defineProperty(event, 'delegateTarget', {
                    configurable: true,
                    get: function () {
                        return ele;
                    }
                });
                Object.defineProperty(event, 'data', {
                    configurable: true,
                    get: function () {
                        return data;
                    }
                });
                var returnValue = callback.call(thisArg, event, event.___td);
                if (_one) {
                    removeEvent(ele, name, namespaces, selector, finalCallback);
                }
                if (returnValue === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
            finalCallback.guid = callback.guid = (callback.guid || cash.guid++);
            addEvent(ele, name, namespaces, selector, finalCallback);
        });
    });
    return this;
}
fn.on = on;
function one(eventFullName, selector, data, callback) {
    return this.on(eventFullName, selector, data, callback, true);
}
;
fn.one = one;
var queryEncodeSpaceRe = /%20/g;
var queryEncodeCRLFRe = /\r?\n/g;
function queryEncode(prop, value) {
    return "&".concat(encodeURIComponent(prop), "=").concat(encodeURIComponent(value.replace(queryEncodeCRLFRe, '\r\n')).replace(queryEncodeSpaceRe, '+'));
}
var skippableRe = /file|reset|submit|button|image/i;
var checkableRe = /radio|checkbox/i;
fn.serialize = function () {
    var query = '';
    this.each(function (i, ele) {
        each(ele.elements || [ele], function (i, ele) {
            if (ele.disabled || !ele.name || ele.tagName === 'FIELDSET' || skippableRe.test(ele.type) || (checkableRe.test(ele.type) && !ele.checked))
                return;
            var value = getValue(ele);
            if (!isUndefined(value)) {
                var values = isArray(value) ? value : [value];
                each(values, function (i, value) {
                    query += queryEncode(ele.name, value);
                });
            }
        });
    });
    return query.slice(1);
};
// @require core/types.ts
// @require core/cash.ts
// @require core/type_checking.ts
// @require core/variables.ts
// @require core/each.ts
// @require core/extend.ts
// @require core/find.ts
// @require core/get_compare_function.ts
// @require core/get_split_values.ts
// @require core/guid.ts
// @require core/parse_html.ts
// @require core/unique.ts
// @require attributes/add_class.ts
// @require attributes/attr.ts
// @require attributes/has_class.ts
// @require attributes/prop.ts
// @require attributes/remove_attr.ts
// @require attributes/remove_class.ts
// @require attributes/remove_prop.ts
// @require attributes/toggle_class.ts
// @require collection/add.ts
// @require collection/each.ts
// @require collection/eq.ts
// @require collection/filter.ts
// @require collection/first.ts
// @require collection/get.ts
// @require collection/index.ts
// @require collection/last.ts
// @require collection/map.ts
// @require collection/slice.ts
// @require css/css.ts
// @require data/data.ts
// @require dimensions/inner_outer.ts
// @require dimensions/normal.ts
// @require effects/hide.ts
// @require effects/show.ts
// @require effects/toggle.ts
// @require events/off.ts
// @require events/on.ts
// @require events/one.ts
// @require events/ready.ts
// @require events/trigger.ts
// @require forms/serialize.ts
// @require forms/val.ts
// @require manipulation/after.ts
// @require manipulation/append.ts
// @require manipulation/append_to.ts
// @require manipulation/before.ts
// @require manipulation/clone.ts
// @require manipulation/detach.ts
// @require manipulation/empty.ts
// @require manipulation/html.ts
// @require manipulation/insert_after.ts
// @require manipulation/insert_before.ts
// @require manipulation/prepend.ts
// @require manipulation/prepend_to.ts
// @require manipulation/remove.ts
// @require manipulation/replace_all.ts
// @require manipulation/replace_with.ts
// @require manipulation/text.ts
// @require manipulation/unwrap.ts
// @require manipulation/wrap.ts
// @require manipulation/wrap_all.ts
// @require manipulation/wrap_inner.ts
// @require offset/offset.ts
// @require offset/offset_parent.ts
// @require offset/position.ts
// @require traversal/children.ts
// @require traversal/closest.ts
// @require traversal/contents.ts
// @require traversal/find.ts
// @require traversal/has.ts
// @require traversal/is.ts
// @require traversal/next.ts
// @require traversal/next_all.ts
// @require traversal/next_until.ts
// @require traversal/not.ts
// @require traversal/parent.ts
// @require traversal/parents.ts
// @require traversal/parents_until.ts
// @require traversal/prev.ts
// @require traversal/prev_all.ts
// @require traversal/prev_until.ts
// @require traversal/siblings.ts
// @no-require extras/get_script.ts
// @no-require extras/shorthands.ts
// @require methods.ts
if (true) { // Node.js
    module.exports = cash;
}
else {}
})();

/***/ }),

/***/ 423:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Area = void 0;
var pt_json_1 = __importDefault(__webpack_require__(82));
var question_1 = __webpack_require__(967);
var relations_1 = __importDefault(__webpack_require__(432));
var Area = /** @class */ (function () {
    function Area(id, lang) {
        this._lang = pt_json_1.default;
        this._id = id;
        this._lang = lang;
    }
    Object.defineProperty(Area.prototype, "porcent", {
        get: function () {
            return this._porcent;
        },
        set: function (porcent) {
            this._porcent = porcent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "description", {
        get: function () {
            var _this = this;
            return this._lang.areas.filter(function (area) { return area.id === _this._id; })[0].description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "carreras", {
        get: function () {
            return this._lang.carreras[this._id - 1].description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "questions", {
        get: function () {
            var _this = this;
            var questions = [];
            var questionsIds = relations_1.default.questionsInAreas().filter(function (relation) { return relation.areaId === _this._id; })[0].questionsId;
            questionsIds.forEach(function (questionId) {
                questions.push(new question_1.Question(questionId, _this._lang));
            });
            return questions;
        },
        enumerable: false,
        configurable: true
    });
    return Area;
}());
exports.Area = Area;


/***/ }),

/***/ 967:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Question = void 0;
var area_1 = __webpack_require__(423);
var pt_json_1 = __importDefault(__webpack_require__(82));
var relations_1 = __importDefault(__webpack_require__(432));
var Question = /** @class */ (function () {
    function Question(id, lang) {
        this._lang = pt_json_1.default;
        this._id = id;
        this._lang = lang;
    }
    Object.defineProperty(Question.prototype, "id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "description", {
        get: function () {
            var _this = this;
            return this._lang.questions.filter(function (question) { return question.id === _this._id; })[0].description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "area", {
        get: function () {
            var _this = this;
            return new area_1.Area(relations_1.default.questionsInAreas().filter(function (relation) { return relation.questionsId.includes(_this._id); })[0].areaId, this._lang);
        },
        enumerable: false,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;


/***/ }),

/***/ 9:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var cash_dom_1 = __importDefault(__webpack_require__(553));
var table_1 = __importDefault(__webpack_require__(900));
var pt_json_1 = __importDefault(__webpack_require__(82));
var es_json_1 = __importDefault(__webpack_require__(905));
var en_json_1 = __importDefault(__webpack_require__(7));
var relations_1 = __importDefault(__webpack_require__(432));
var question_1 = __webpack_require__(967);
var area_1 = __webpack_require__(423);
var lang = pt_json_1.default;
function areasCount() {
    var areasCount = [0, 0, 0, 0, 0];
    var questionCheckboxes = Array.from(document.querySelectorAll('input[name^="question"]'));
    questionCheckboxes.forEach(function (checkbox, i) {
        if ((0, cash_dom_1.default)(checkbox).is(":checked")) {
            relations_1.default.questionsInAreas().forEach(function (area, j) {
                if (area.questionsId.includes(i + 1)) {
                    areasCount[j]++;
                }
            });
        }
    });
    return areasCount;
}
function porcent(x, area) {
    var sum = area.reduce(function (a, b) { return a + b; }, 0);
    return Math.floor((x * 100) / sum);
}
function process() {
    if (radios_ok(lang.questions.length)) {
        var counts_1 = areasCount();
        var porcents = counts_1.map(function (areaCount) { return porcent(areaCount, counts_1); });
        writeAreas(porcents);
    }
}
function radios_ok(questions_size) {
    for (var i = 0; i <= questions_size - 1; i++) {
        var radiogroup = document.getElementsByName("question".concat(i));
        var check_yes = radiogroup[0];
        var check_not = radiogroup[1];
        if (!(check_yes.checked || check_not.checked)) {
            check_yes.focus();
            check_yes.parentElement.parentElement.style.background = 'lightcoral';
            alert("".concat(lang.labels.AllQuestionsNeedToBeAnswered, " ").concat(i + 1));
            return false;
        }
    }
    return true;
}
function setQuestions(lang) {
    var questions = document.querySelectorAll('tr:not(:first-child) td:nth-child(2)');
    document.getElementById('Activity').innerHTML = lang.labels.Activity;
    questions.forEach(function (q, i) {
        var question = new question_1.Question(i + 1, lang);
        q.innerHTML = question.description;
    });
}
function writeQuestions() {
    (0, cash_dom_1.default)("#btn_procesar").on('click', function () { return process(); });
    (0, cash_dom_1.default)('#lang').on('change', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if ((0, cash_dom_1.default)('#lang').val() === "es")
                    lang = es_json_1.default;
                else if ((0, cash_dom_1.default)('#lang').val() === "pt")
                    lang = pt_json_1.default;
                else if ((0, cash_dom_1.default)('#lang').val() === "en")
                    lang = en_json_1.default;
                setQuestions(lang);
                return [2 /*return*/];
            });
        });
    });
    lang.questions.forEach(function (q, i) { return table_1.default.addRow(i); });
    setQuestions(lang);
}
function writeAreas(areasPorcent) {
    var results = document.getElementsByClassName('areas')[0];
    var areas = [];
    for (var i = 1; i < lang.areas.length; i++) {
        var area = new area_1.Area(i, lang);
        area.porcent = areasPorcent[i];
        areas.push(area);
    }
    areas.sort(function (a, b) { return (b.porcent > a.porcent) ? 1 : -1; });
    areas.forEach(function (area) {
        var h1 = document.createElement('h1');
        var p = document.createElement('p');
        h1.innerText = "".concat(area.description, " ").concat(area.porcent, " %");
        p.innerText = area.carreras;
        results.appendChild(h1);
        results.appendChild(p);
    });
    var table = document.getElementsByTagName("table")[0];
    table.innerHTML = "";
    var button = document.getElementById("btn_procesar");
    button.style.display = "none";
}
window.onload = writeQuestions;


/***/ }),

/***/ 432:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Relations = /** @class */ (function () {
    function Relations() {
    }
    Relations.questionsInAreas = function () {
        return [
            { "areaId": 1, "questionsId": [4, 9, 12, 20, 28, 31, 35, 39, 43, 46, 50, 65, 67, 68, 75, 77] },
            { "areaId": 2, "questionsId": [6, 13, 23, 25, 34, 37, 38, 42, 49, 52, 55, 63, 66, 70, 72, 78] },
            { "areaId": 3, "questionsId": [5, 10, 15, 19, 21, 26, 29, 33, 36, 44, 53, 56, 59, 62, 71, 80] },
            { "areaId": 4, "questionsId": [1, 7, 11, 17, 18, 24, 30, 41, 48, 51, 58, 60, 61, 64, 73, 79] },
            { "areaId": 5, "questionsId": [2, 3, 8, 14, 16, 22, 27, 32, 40, 45, 47, 54, 57, 69, 74, 76] }
        ];
    };
    return Relations;
}());
exports["default"] = Relations;


/***/ }),

/***/ 900:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Table = /** @class */ (function () {
    function Table() {
    }
    Table.addRow = function (i) {
        var _this = this;
        var _a;
        var tbody = (_a = document.getElementById("table")) === null || _a === void 0 ? void 0 : _a.getElementsByTagName("tbody")[0];
        if (!tbody)
            return;
        var tr = document.createElement("tr");
        var cells = [
            i + 1,
            '',
            Table.createRadio(i),
            Table.createRadio(i)
        ];
        cells.forEach(function (cell) {
            var td = document.createElement("td");
            _this.addCellContent(cell, td);
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    };
    Table.addCellContent = function (cell, td) {
        if (cell instanceof HTMLInputElement) {
            td.appendChild(cell);
        }
        else {
            td.textContent = cell.toString();
        }
    };
    ;
    Table.createRadio = function (i) {
        var radio = document.createElement("input");
        radio.type = 'radio';
        radio.name = "question".concat((i));
        radio.checked = true;
        return radio;
    };
    return Table;
}());
exports["default"] = Table;


/***/ }),

/***/ 7:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"questions":[{"id":1,"description":"Design computer programs and explore new technology applications for internet use."},{"id":2,"description":"Raise, care for, and treat domestic and field animals."},{"id":3,"description":"Research green areas, the environment, and climate change."},{"id":4,"description":"Illustrate, draw, and digitally animate."},{"id":5,"description":"Select, train, and motivate an organization/company\'s personnel."},{"id":6,"description":"Conduct excavations to discover past remains."},{"id":7,"description":"Solve calculus problems to build structures."},{"id":8,"description":"Design courses to teach people about health and hygiene topics."},{"id":9,"description":"Play an instrument, compose music, and be part of a musical group or orchestra."},{"id":10,"description":"Plan medium and long-term goals for a public or private organization."},{"id":11,"description":"Design and plan the mass production of items such as furniture, cars, office equipment, food packaging and others."},{"id":12,"description":"Design logos and magazine covers."},{"id":13,"description":"Organize events and attend to attendees."},{"id":14,"description":"Take care of the health of sick people."},{"id":15,"description":"Control income and expenses of funds and present the final balance of an institution."},{"id":16,"description":"Conduct experiments with plants (fruits, trees, flowers)"},{"id":17,"description":"Conceive plans for housing, buildings, and fortifications."},{"id":18,"description":"Research and test new pharmaceutical products."},{"id":19,"description":"Make proposals and formulate strategies to take advantage of economic relationships between two countries."},{"id":20,"description":"Paint, make sculptures, illustrate art books, etc."},{"id":21,"description":"Develop campaigns to introduce a new product to the market."},{"id":22,"description":"Examine and treat visual problems."},{"id":23,"description":"Defend individual clients or companies in various legal proceedings."},{"id":24,"description":"Design machines that can simulate human activities."},{"id":25,"description":"Investigate the causes and effects of emotional disorders."},{"id":26,"description":"Supervise sales at a shopping center."},{"id":27,"description":"Attend and perform exercises for people with physical limitations, language problems, etc."},{"id":28,"description":"Prepare to become a professional model."},{"id":29,"description":"Advise people on saving and investment plans."},{"id":30,"description":"Develop maps, plans, and images for the study and analysis of geographic data."},{"id":31,"description":"Design interactive electronic computer games."},{"id":32,"description":"Perform food quality control."},{"id":33,"description":"Own a commercial type of business."},{"id":34,"description":"Analyze political phenomena and actively participate in them."},{"id":35,"description":"Write television scripts, stories, novels, and journalistic articles."},{"id":36,"description":"Organize a distribution and sales plan for a large store."},{"id":37,"description":"Study the customs and way of life of rural and urban communities."},{"id":38,"description":"Manage and evaluate international cooperation agreements for social development."},{"id":39,"description":"Conduct advertising campaigns for products and services."},{"id":40,"description":"Work researching the reproduction of fish, shrimp, and other marine animals."},{"id":41,"description":"Manufacture food products for mass consumption."},{"id":42,"description":"Manage and evaluate development projects in an educational institution and/or foundation."},{"id":43,"description":"Redesign and decorate physical spaces in homes, offices, and commercial locations."},{"id":44,"description":"Manage a tourism company and/or travel agencies."},{"id":45,"description":"Apply alternative methods to traditional medicine to treat people with various ailments."},{"id":46,"description":"Design clothing for children, young people, and adults."},{"id":47,"description":"Investigate living organisms to create vaccines."},{"id":48,"description":"Manage and/or maintain technology devices/appliances on airplanes, boats, radars, etc."},{"id":49,"description":"Study foreign, both current and ancient, languages for translation purposes."},{"id":50,"description":"Restore art pieces and works of art."},{"id":51,"description":"Inspect and maintain electrical, electronic, and computer artifacts."},{"id":52,"description":"Teach children aged 0 to 5 years."},{"id":53,"description":"Investigate and/or survey new markets."},{"id":54,"description":"Provide dental care to people."},{"id":55,"description":"Treat children, young people and adults with psychological problems."},{"id":56,"description":"Create promotion and sales strategies for new Ecuadorian products in the international market."},{"id":57,"description":"Plan and recommend diets for diabetic and/or overweight individuals."},{"id":58,"description":"Work in a petroleum company in technical positions."},{"id":59,"description":"Manage a company (family, private or public)."},{"id":60,"description":"Run a car, tractor, etc. repair and maintenance workshop."},{"id":61,"description":"Carry out mining and metallurgical extraction projects."},{"id":62,"description":"Assist multinational executives with multilingual management."},{"id":63,"description":"Design educational programs for children with disabilities."},{"id":64,"description":"Apply statistical knowledge in research in various fields (social, administrative, health, etc.)."},{"id":65,"description":"Photograph historical events, significant places, faces, landscapes, and various products."},{"id":66,"description":"Work in national and international museums and libraries."},{"id":67,"description":"Be part of a theater group."},{"id":68,"description":"Produce short films, advertisements, educational programs, fiction, etc."},{"id":69,"description":"Study the influence between ocean currents and climate and its ecological consequences."},{"id":70,"description":"Study a religion deeply to guide people spiritually."},{"id":71,"description":"Advise investors in the purchase of goods/stocks in national and international markets."},{"id":72,"description":"Participate in creating new laws to improve the country."},{"id":73,"description":"Explore the starry space, planets, features and components."},{"id":74,"description":"Improve facial and bodily image of people using various techniques."},{"id":75,"description":"Decorate house gardens and public parks."},{"id":76,"description":"Manage and renovate meal menus in a hotel or restaurant."},{"id":77,"description":"Work as a television presenter, radio and television announcer, cultural program animator and contest host."},{"id":78,"description":"Design and execute tourism programs."},{"id":79,"description":"Manage and properly organize the physical space occupation of cities, countries etc., using satellite images, maps."},{"id":80,"description":"Organize, plan, and manage educational centers."}],"areas":[{"id":1,"description":"ART AND CREATIVITY"},{"id":2,"description":"SOCIAL SCIENCES"},{"id":3,"description":"ECONOMIC, ADMINISTRATIVE AND FINANCIAL"},{"id":4,"description":"SCIENCE AND TECHNOLOGY"},{"id":5,"description":"ECOLOGICAL, BIOLOGICAL AND HEALTH SCIENCES"}],"carreras":[{"id":1,"description":"Graphic Design, Interior Design and Decoration, Garden Design, Fashion Design, Jewelry Design, Fine Arts (painting, sculpture, dance, theater, craftsmanship, ceramics), Advertising Drawing, Restoration and Museology, Modeling, Photography, Digital Photography, Graphic and Advertising Management, Voiceover and Advertising, Acting, Cinematography, Industrial Art, Audiovisual and Multimedia Production, Radio and Television Communication and Production, Landscape Design, Film and Video, Scenic Communication for Television."},{"id":2,"description":"Psychology in general, Social Work, Languages, International Education, History and Geography, Journalism, Digital Journalism, Law, Political Science, Sociology, Anthropology, Archaeology, Social and Development Management, Family Counseling, Communication and advertising, Educational Administration, Special Education, Psychopedagogy, Early Stimulation, Simultaneous Translation, Linguistics, Early Childhood Education, Library Science, Museology, International Relations and Diplomacy, Social Communication with a mention in Marketing and Business Management, Creative and Advertising Writing, Public Relations and Organizational Communication; Hospitality and Tourism; Theology, Priestly Institution."},{"id":3,"description":"Business Administration, Accounting, Auditing, Sales, Strategic Marketing, International Business and Management, Business Management, Financial Management, Commercial Engineering, Foreign Trade, Banking and Finance, Human Resource Management, Integrated Marketing Communications, Ecotourism and Hospitality Business Administration, Economic and Financial Sciences, Business and Political Sciences, Business Sciences, Electronic Commerce, Entrepreneurs, Management of Public Organizations (Municipalities, Ministries, etc.), Educational Center Management."},{"id":4,"description":"Computer Systems Engineering, Geology, Civil Engineering, Architecture, Electronics, Telematics, Telecommunications, Mechatronic Engineering (Robotics), Image and Sound, Mining, Oil and Metallurgy, Mechanical Engineering, Industrial Engineering, Physics, Applied Mathematics, Engineering in Statistics, Automotive Engineering, Environmental Biotechnology, Geographic Engineering, Military careers (navy, aviation, army), Coastal and Port Works Engineering, Computer Statistics, Programming and System Development, Educational Technology, Astronomy, Engineering in Geographical Sciences and Sustainable Development."},{"id":5,"description":"Biology, Biochemistry, Pharmacy, Marine Biology, Bioanalysis, Biotechnology, Environmental Sciences, Animal Husbandry, Veterinary, Nutrition and Aesthetics, Cosmetology, Dietetics and Aesthetics, Medicine, Obstetrics, Emergency Medicine, Dentistry, Nursing, Technology, Oceanography and Environmental Sciences, Medical, Agronomy, Horticulture and Fruit Growing, Food Engineering, Gastronomy, Chef, Physical Culture, Sports and Rehabilitation, Environmental Management, Environmental Engineering, Optometry, Homeopathy, Reflexology."}],"labels":{"AllQuestionsNeedToBeAnswered":"You must answer all questions, missing:","Activity":"Activity"}}');

/***/ }),

/***/ 905:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"questions":[{"id":1,"description":"Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet."},{"id":2,"description":"Criar, cuidar y tratar animales domésticos y de campo"},{"id":3,"description":"Investigar sobre áreas verdes, medio ambiente y cambios climáticos"},{"id":4,"description":"Ilustrar, dibujar y animar digitalmente."},{"id":5,"description":"Seleccionar, capacitar y motivar al personal de una organización/empresa"},{"id":6,"description":"Realizar excavaciones para descubrir restos del pasado"},{"id":7,"description":"Resolver problemas de cálculo para construir edificaciones."},{"id":8,"description":"Diseñar cursos para enseñar a la gente sobre temas de salud e higiene"},{"id":9,"description":"Tocar un instrumento, componer música y formar parte de un conjunto musical u orquesta."},{"id":10,"description":"Planificar cuales son las metas de una organización pública o privada a mediano y largo plazo."},{"id":11,"description":"Diseñar y planificar la producción masiva de artículos como muebles, autos, equipos de oficina, empaques y envases para alimentos y otros."},{"id":12,"description":"Diseñar logotipos y portadas de una revista"},{"id":13,"description":"Organizar eventos y atender a sus asistentes."},{"id":14,"description":"Atender la salud de personas enfermas."},{"id":15,"description":"Controlar ingresos y egresos de fondos y presentar el balance final de una institución"},{"id":16,"description":"Hacer experimentos con plantas (frutas, árboles, flores)"},{"id":17,"description":"Concebir planos para viviendas, edificios y ciudadelas."},{"id":18,"description":"Investigar y probar nuevos productos farmacéuticos."},{"id":19,"description":"Hacer propuestas y formular estrategias para aprovechar las relaciones económicas entre dos países."},{"id":20,"description":"Pintar, hacer esculturas, ilustrar libros de arte, etc."},{"id":21,"description":"Elaborar campañas para introducir un nuevo producto al mercado."},{"id":22,"description":"Examinar y tratar los problemas visuales"},{"id":23,"description":"Defender a clientes individuales o empresas en juicios de diferente naturaleza."},{"id":24,"description":"Diseñar máquinas que puedan simular actividades humanas."},{"id":25,"description":"Investigar las causas y efectos de los trastornos emocionales"},{"id":26,"description":"Supervisar las ventas de un centro comercial"},{"id":27,"description":"Atender y realizar ejercicios a personas que tienen limitaciones físicas, problemas de lenguaje, etc."},{"id":28,"description":"Prepararse para ser modelo profesional."},{"id":29,"description":"Aconsejar a las personas sobre planes de ahorro e inversiones."},{"id":30,"description":"Elaborar mapas, planos e imágenes para el estudio y análisis de datos geográficos."},{"id":31,"description":"Diseñar juegos interactivos electrónicos para computadora."},{"id":32,"description":"Realizar el control de calidad de los alimentos"},{"id":33,"description":"Tener un negocio propio de tipo comercial."},{"id":34,"description":"Analizar los fenómenos políticos y participar activamente en ellos."},{"id":35,"description":"Escribir guiones de televisión, cuentos, novelas y artículos periodísticos."},{"id":36,"description":"Organizar un plan de distribución y venta de un gran almacén."},{"id":37,"description":"Estudiar las costumbres y la forma de vida de las comunidades rurales y urbanas."},{"id":38,"description":"Gestionar y evaluar convenios internacionales de cooperación para el desarrollo social."},{"id":39,"description":"Hacer campañas publicitarias para productos y servicios"},{"id":40,"description":"Trabajar investigando la reproducción de peces, camarones y otros animales marinos."},{"id":41,"description":"Fabricar productos alimenticios de consumo masivo"},{"id":42,"description":"Gestionar y evaluar proyectos de desarrollo en una institución educativa y/o fundación."},{"id":43,"description":"Rediseñar y decorar espacios físicos en viviendas, oficinas y locales comerciales."},{"id":44,"description":"Administrar una empresa de turismo y/o agencias de viaje."},{"id":45,"description":"Aplicar métodos alternativos a la medicina tradicional para atender personas con dolencias de diversa índole."},{"id":46,"description":"Diseñar ropa para niños, jóvenes y adultos."},{"id":47,"description":"Investigar organismos vivos para elaborar vacunas."},{"id":48,"description":"Manejar y/o dar mantenimiento a dispositivos/aparatos tecnológicos en aviones, barcos, radares, etc."},{"id":49,"description":"Estudiar idiomas extranjeros actuales y antiguos- para hacer traducciones."},{"id":50,"description":"Restaurar piezas y obras de arte"},{"id":51,"description":"Revisar y dar mantenimiento a artefactos eléctricos, electrónicos y computadoras."},{"id":52,"description":"Enseñar a niños de 0 a 5 años"},{"id":53,"description":"Investigar y/o sondear nuevos mercados."},{"id":54,"description":"Atender la salud dental de las personas"},{"id":55,"description":"Tratar a niños, jóvenes y adultos con problemas psicológicos."},{"id":56,"description":"Crear estrategias de promoción y venta de nuevos productos ecuatorianos en el mercado internacional."},{"id":57,"description":"Planificar y recomendar dietas para personas diabéticas y/o con sobrepeso."},{"id":58,"description":"Trabajar en una empresa petrolera en cargos técnicos."},{"id":59,"description":"Administrar una empresa (familiar, privada o pública)"},{"id":60,"description":"Tener un taller de reparación y mantenimiento de carros, tractores, etc."},{"id":61,"description":"Ejecutar proyectos de extracción minera y metalúrgica."},{"id":62,"description":"Asistir a directivos de multinacionales con manejo de varios idiomas."},{"id":63,"description":"Diseñar programas educativos para niños con discapacidad."},{"id":64,"description":"Aplicar conocimientos de estadística en investigaciones en diversas áreas (social, administrativa, salud, etc.)"},{"id":65,"description":"Fotografiar hechos históricos, lugares significativos, rostros, paisajes y productos varios."},{"id":66,"description":"Trabajar en museos y bibliotecas nacionales e internacionales."},{"id":67,"description":"Ser parte de un grupo de teatro."},{"id":68,"description":"Producir cortometrajes, spots publicitarios, programas educativos, de ficción, etc."},{"id":69,"description":"Estudiar la influencia entre las corrientes marinas y el clima y sus consecuencias ecológicas."},{"id":70,"description":"Estudiar profundamente una religión para orientar espiritualmente a las personas que lo necesiten."},{"id":71,"description":"Asesorar a inversionistas en la compra de bienes/acciones en mercados nacionales e internacionales."},{"id":72,"description":"Participar en la creación de nuevas leyes para mejorar el país."},{"id":73,"description":"Explorar el espacio sideral, los planetas , características y componentes."},{"id":74,"description":"Mejorar la imagen facial y corporal de las personas aplicando diferentes técnicas."},{"id":75,"description":"Decorar jardines de casas y parques públicos."},{"id":76,"description":"Administrar y renovar menúes de comidas en un hotel o restaurante."},{"id":77,"description":"Trabajar como presentador de televisión, locutor de radio y televisión, animador de programas culturales y concursos."},{"id":78,"description":"Diseñar y ejecutar programas de turismo."},{"id":79,"description":"Administrar y ordenar adecuadamente la ocupación del espacio físico de ciudades, países etc., utilizando imágenes de satélite, mapas."},{"id":80,"description":"Organizar, planificar y administrar centros educativos"}],"areas":[{"id":1,"description":"ARTE Y CREATIVIDAD"},{"id":2,"description":"CIENCIAS SOCIALES"},{"id":3,"description":"ECONOMICA, ADMINISTRATIVA Y FINANCIERA"},{"id":4,"description":"CIENCIA Y TECNOLOGÍA"},{"id":5,"description":"CIENCIAS ECOLÓGICAS, BIOLÓGICAS Y DE LA SALUD"}],"carreras":[{"id":1,"description":"Diseño Gráfico, Diseño y Decoración de Interiores, Diseño de Jardines, Diseño de Modas, Diseño de Joyas, Artes Plásticas (pintura, escultura, danza, teatro, artesanía, cerámica),  Dibujo Publicitario, Restauración y museología, modelaje, fotografía, Fotografía Digital,  gestión gráfica y publicitaria, locución y publicidad, actuación, Camarografía, Arte Industrial, Producción Audiovisual y Multimedia, Comunicación y Producción en Radio y Televisión, Diseño del Paisaje,  Cine y Video, Comunicación escénica para televisión."},{"id":2,"description":"Psicología en general, Trabajo Social, Idiomas, Educación  Internacional,  Historia y Geografía, Periodismo, Periodismo Digital, Derecho, Ciencias Políticas, Sociología, Antropología, Arqueología,  Gestión Social y Desarrollo, Consejería Familiar, Comunicación y publicidad, Administración educativa, Educación Especial, Psicopedagogía, Estimulación Temprana,  Traducción Simultánea, Lingüística, Educación de Párvulos, Bibliotecología, Museología, Relaciones Internacionales y Diplomacia, Comunicación Social con mención en Marketing y Gestión de Empresas, Redacción Creativa y Publicitaria,  Relaciones Públicas y Comunicación Organizacional; Hotelería y Turismo; Teología, Institución Sacerdotal."},{"id":3,"description":"Administración de Empresas, Contabilidad, Auditoría, Ventas,  Marketing Estratégico, Gestión y  Negocios Internacionales, Gestión Empresarial, Gestión Financiera,  Ingeniería Comercial, Comercio Exterior, Banca y Finanzas, Gestión de Recursos Humanos, Comunicaciones Integradas en  Marketing, Administración de Empresas Ecoturísticas y de Hospitalidad, Ciencias Económicas y Financieras, Administración y Ciencias Políticas, Ciencias Empresariales, Comercio Electrónico, Emprendedores, Gestión de Organismos Públicos (Municipios, Ministerios, etc.), Gestión de Centros Educativos."},{"id":4,"description":"Ingeniería en Sistemas Computacionales,  Geología, Ingeniería Civil, Arquitectura, Electrónica, Telemática, Telecomunicaciones, Ingeniería Mecatrónica  (Robótica), Imagen y Sonido,  Minas, Petróleo y Metalurgia,  Ingeniería Mecánica, Ingeniería Industrial, Física, Matemáticas Aplicadas, Ingeniería en Estadística, Ingeniería Automotriz, Biotecnología Ambiental, Ingeniería Geográfica, Carreras militares (marina, aviación, ejército), Ingeniería en Costas y Obras Portuarias, Estadística Informática, Programación y Desarrollo de Sistemas, Tecnología en Informática Educativa, Astronomía, Ingeniería en ciencias geográficas y desarrollo sustentable "},{"id":5,"description":"Biología, Bioquímica, Farmacia, Biología Marina, Bioanálisis, Biotecnología, Ciencias Ambientales,  Zootecnia, Veterinaria, Nutrición y Estética, Cosmetología,  Dietética y Estética, Medicina, Obstetricia, Urgencias Médicas, Odontología, Enfermería, Tecnología, Oceanografía y Ciencias Ambientales, Médica, Agronomía, Horticultura y Fruticultura, Ingeniería de Alimentos, Gastronomía, Chef, Cultura Física, Deportes y Rehabilitación, Gestión Ambiental, Ingeniería Ambiental, Optometría, Homeopatía, Reflexología."}],"labels":{"AllQuestionsNeedToBeAnswered":"Debe responder todas las preguntas, falta: ","Activity":"Actividad"}}');

/***/ }),

/***/ 82:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"questions":[{"id":1,"description":"Desenhar programas de computação e explorar novas aplicações tecnológicas para uso da internet."},{"id":2,"description":"Criar, cuidar e tratar animais domésticos e de campo"},{"id":3,"description":"Investigar sobre áreas verdes, meio ambiente e mudanças climáticas"},{"id":4,"description":"Ilustrar, desenhar e animar digitalmente."},{"id":5,"description":"Selecionar, capacitar e motivar o pessoal de uma organização/empresa"},{"id":6,"description":"Realizar escavações para descobrir restos do passado"},{"id":7,"description":"Resolver problemas de cálculo para construir edificações."},{"id":8,"description":"Desenhar cursos para ensinar as pessoas sobre temas de saúde e higiene"},{"id":9,"description":"Tocar um instrumento, compor música e fazer parte de um conjunto musical ou orquestra."},{"id":10,"description":"Planejar quais são as metas de uma organização pública ou privada a médio e longo prazo."},{"id":11,"description":"Desenhar e planejar a produção em massa de artigos como móveis, carros, equipamentos de escritório, embalagens e envases para alimentos e outros."},{"id":12,"description":"Desenhar logotipos e capas de uma revista"},{"id":13,"description":"Organizar eventos e atender aos seus assistentes."},{"id":14,"description":"Atender a saúde de pessoas doentes."},{"id":15,"description":"Controlar rendimentos e despesas de fundos e apresentar o balanço final de uma instituição"},{"id":16,"description":"Fazer experimentos com plantas (frutas, árvores, flores)"},{"id":17,"description":"Conceber planos para residências, edifícios e cidadelas."},{"id":18,"description":"Investigar e testar novos produtos farmacêuticos."},{"id":19,"description":"Fazer propostas e formular estratégias para aproveitar as relações econômicas entre dois países."},{"id":20,"description":"Pintar, fazer esculturas, ilustrar livros de arte, etc."},{"id":21,"description":"Elaborar campanhas para introduzir um novo produto no mercado."},{"id":22,"description":"Examinar e tratar problemas visuais"},{"id":23,"description":"Defender clientes individuais ou empresas em julgamentos de diferentes naturezas."},{"id":24,"description":"Desenhar máquinas que possam simular atividades humanas."},{"id":25,"description":"Investigar as causas e efeitos dos transtornos emocionais"},{"id":26,"description":"Supervisionar as vendas de um centro comercial"},{"id":27,"description":"Atender e realizar exercícios para pessoas com limitações físicas, problemas de linguagem, etc."},{"id":28,"description":"Preparar-se para ser modelo profissional."},{"id":29,"description":"Aconselhar as pessoas sobre planos de poupança e investimentos."},{"id":30,"description":"Elaborar mapas, planos e imagens para o estudo e análise de dados geográficos."},{"id":31,"description":"Desenhar jogos interativos eletrônicos para computador."},{"id":32,"description":"Realizar o controle de qualidade dos alimentos"},{"id":33,"description":"Ter um negócio próprio de tipo comercial."},{"id":34,"description":"Analisar os fenômenos políticos e participar ativamente deles."},{"id":35,"description":"Escrever roteiros para televisão, contos, romances e artigos jornalísticos."},{"id":36,"description":"Organizar um plano de distribuição e venda de um grande armazém."},{"id":37,"description":"Estudar as costumes e a forma de vida das comunidades rurais e urbanas."},{"id":38,"description":"Gerenciar e avaliar acordos internacionais de cooperação para o desenvolvimento social."},{"id":39,"description":"Fazer campanhas publicitárias para produtos e serviços"},{"id":40,"description":"Trabalhar investigando a reprodução de peixes, camarões e outros animais marinhos."},{"id":41,"description":"Fabricar produtos alimentícios de consumo em massa"},{"id":42,"description":"Gerenciar e avaliar projetos de desenvolvimento em uma instituição educacional e/ou fundação."},{"id":43,"description":"Redesenhar e decorar espaços físicos em residências, escritórios e lojas comerciais."},{"id":44,"description":"Administrar uma empresa de turismo e/ou agências de viagem."},{"id":45,"description":"Aplicar métodos alternativos à medicina tradicional para atender pessoas com doenças de diversas naturezas."},{"id":46,"description":"Desenhar roupas para crianças, jovens e adultos."},{"id":47,"description":"Investigar organismos vivos para elaborar vacinas."},{"id":48,"description":"Manusear e/ou dar manutenção a dispositivos/aparelhos tecnológicos em aviões, navios, radares, etc."},{"id":49,"description":"Estudar idiomas estrangeiros - atuais e antigos- para fazer traduções."},{"id":50,"description":"Restaurar peças e obras de arte"},{"id":51,"description":"Revisar e dar manutenção a artefatos elétricos, eletrônicos e computadores."},{"id":52,"description":"Ensinar crianças de 0 a 5 anos"},{"id":53,"description":"Investigar e/ou sondar novos mercados."},{"id":54,"description":"Atender a saúde dental das pessoas"},{"id":55,"description":"Tratar crianças, jovens e adultos com problemas psicológicos."},{"id":56,"description":"Criar estratégias de promoção e venda de novos produtos equatorianos no mercado internacional."},{"id":57,"description":"Planejar e recomendar dietas para pessoas diabéticas e/ou com sobrepeso."},{"id":58,"description":"Trabalhar em uma empresa petrolífera em cargos técnicos."},{"id":59,"description":"Administrar uma empresa (familiar, privada ou pública)"},{"id":60,"description":"Ter um ateliê de reparação e manutenção de carros, tratores, etc."},{"id":61,"description":"Executar projetos de extração minera e metalúrgica."},{"id":62,"description":"Assistir executivos de multinacionais com manuseio de vários idiomas."},{"id":63,"description":"Desenhar programas educativos para crianças com deficiência."},{"id":64,"description":"Aplicar conhecimentos de estatística em investigações em diversas áreas (social, administrativa, saúde, etc.)"},{"id":65,"description":"Fotografar fatos históricos, lugares significativos, rostos, paisagens e produtos variados."},{"id":66,"description":"Trabalhar em museus e bibliotecas nacionais e internacionais."},{"id":67,"description":"Fazer parte de um grupo de teatro."},{"id":68,"description":"Produzir curtas-metragens, spots publicitários, programas educativos, de ficção, etc."},{"id":69,"description":"Estudar a influência entre as correntes marinhas e o clima e suas consequências ecológicas."},{"id":70,"description":"Estudar profundamente uma religião para orientar espiritualmente as pessoas que precisam."},{"id":71,"description":"Assessorar investidores na compra de bens/ações em mercados nacionais e internacionais."},{"id":72,"description":"Participar na criação de novas leis para melhorar o país."},{"id":73,"description":"Explorar o espaço sideral, os planetas, características e componentes."},{"id":74,"description":"Melhorar a imagem facial e corporal das pessoas aplicando diferentes técnicas."},{"id":75,"description":"Decorar jardins de casas e parques públicos."},{"id":76,"description":"Administrar e renovar cardápios de refeições em um hotel ou restaurante."},{"id":77,"description":"Trabalhar como apresentador de televisão, locutor de rádio e televisão, animador de programas culturais e concursos."},{"id":78,"description":"Projetar e executar programas de turismo."},{"id":79,"description":"Administrar e organizar adequadamente a ocupação do espaço físico de cidades, países etc., usando imagens de satélite, mapas."},{"id":80,"description":"Organizar, planejar e administrar centros educacionais"}],"areas":[{"id":1,"description":"ARTE E CRIATIVIDADE"},{"id":2,"description":"CIÊNCIAS SOCIAIS"},{"id":3,"description":"ECONÔMICA, ADMINISTRATIVA E FINANCEIRA"},{"id":4,"description":"CIÊNCIA E TECNOLOGIA"},{"id":5,"description":"CIÊNCIAS ECOLÓGICAS, BIOLÓGICAS E DA SAÚDE"}],"carreras":[{"id":1,"description":"Design Gráfico, Design e Decoração de Interiores, Design de Jardins, Design de Moda, Design de Jóias, Artes Plásticas (pintura, escultura, dança, teatro, artesanato, cerâmica), Desenho Publicitário, Restauração e museologia, modelagem, fotografia, Fotografia Digital, gestão gráfica e publicitária, locução e publicidade, atuação, Camarografia, Arte Industrial, Produção Audiovisual e Multimídia, Comunicação e Produção em Rádio e Televisão, Design de Paisagem, Cinema e Vídeo, Comunicação cênica para televisão."},{"id":2,"description":"Psicologia em geral, Trabalho Social, Idiomas, Educação Internacional, História e Geografia, Jornalismo, Jornalismo Digital, Direito, Ciências Políticas, Sociologia, Antropologia, Arqueologia, Gestão Social e Desenvolvimento, Conselhos Familiares, Comunicação e publicidade, administração educacional, Educação Especial, Psicopedagogia, Estímulo Precoce, Tradução Simultânea, Linguística, Educação de Crianças, Biblioteconomia, Museologia, Relações Internacionais e Diplomacia, Comunicação Social com ênfase em Marketing e Gestão de Empresas, Redação Criativa e Publicitária, Relações Públicas e Comunicação Organizacional; Hotelaria e Turismo; Teologia, Instituição Sacerdotal."},{"id":3,"description":"Administração de Empresas, Contabilidade, Auditoria, Vendas, Marketing Estratégico, Gestão e Negócios Internacionais, Gestão Empresarial, Gestão Financeira, Engenharia Comercial, Comércio Exterior, Banca e Finanças, Gestão de Recursos Humanos, Comunicações Integradas em Marketing, Administração de Empresas Ecoturísticas e de Hospitalidade, Ciências Econômicas e Financeiras, Administração e Ciências Políticas, Ciências Empresariais, Comércio Eletrônico, Empreendedorismo, Gestão de Organismos Públicos (Municípios, Ministérios, etc.), Gestão de Centros Educacionais."},{"id":4,"description":"Ingeniería en Sistemas Computacionales,  Geología, Ingeniería Civil, Arquitectura, Electrónica, Telemática, Telecomunicaciones, Ingeniería Mecatrónica  (Robótica), Imagen y Sonido,  Minas, Petróleo y Metalurgia,  Ingeniería Mecánica, Ingeniería Industrial, Física, Matemáticas Aplicadas, Ingeniería en Estadística, Ingeniería Automotriz, Biotecnología Ambiental, Ingeniería Geográfica, Carreras militares (marina, aviación, ejército), Ingeniería en Costas y Obras Portuarias, Estadística Informática, Programación y Desarrollo de Sistemas, Tecnología en Informática Educativa, Astronomía, Ingeniería en ciencias geográficas y desarrollo sustentable "},{"id":5,"description":"Biología, Bioquímica, Farmacia, Biología Marina, Bioanálisis, Biotecnología, Ciencias Ambientales,  Zootecnia, Veterinaria, Nutrición y Estética, Cosmetología,  Dietética y Estética, Medicina, Obstetricia, Urgencias Médicas, Odontología, Enfermería, Tecnología, Oceanografía y Ciencias Ambientales, Médica, Agronomía, Horticultura y Fruticultura, Ingeniería de Alimentos, Gastronomía, Chef, Cultura Física, Deportes y Rehabilitación, Gestión Ambiental, Ingeniería Ambiental, Optometría, Homeopatía, Reflexología."}],"labels":{"AllQuestionsNeedToBeAnswered":"Você deve responder a todas as perguntas, faltando:","Activity":"Atividade"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(9);
/******/ 	
/******/ })()
;