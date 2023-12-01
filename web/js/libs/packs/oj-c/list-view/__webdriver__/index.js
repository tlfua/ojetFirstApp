"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findListView = exports.ListViewWebElement = void 0;
var oraclejet_webdriver_1 = require("@oracle/oraclejet-webdriver");
var ListViewWebElement_1 = require("./ListViewWebElement");
Object.defineProperty(exports, "ListViewWebElement", { enumerable: true, get: function () { return ListViewWebElement_1.ListViewWebElement; } });
/**
 * Retrieve an instance of [[ListViewWebElement]].
 * @example
 * ```javascript
 * import { findListView } from '@oracle/oraclejet-core-pack/webdriver';
 * const el = await findListView(driver, By.id('my-oj-c-list-view'));
 * ```
 * @param driver A WebDriver/WebElement instance from where the element will be
 * searched. If WebDriver is passed, the element will be searched globally in the
 * document. If WebElement is passed, the search will be relative to this element.
 * @param by The locator with which to find the element
 */
async function findListView(driver, by) {
    const webEl = await driver.findElement(by);
    // Check that the element is of type ListViewWebElement
    if (!(webEl instanceof ListViewWebElement_1.ListViewWebElement)) {
        const tagName = await webEl.getTagName();
        throw Error(`findListView(${by}) created ${webEl.constructor.name} for <${tagName}>, but expected ${ListViewWebElement_1.ListViewWebElement.name}`);
    }
    return webEl;
}
exports.findListView = findListView;
(0, oraclejet_webdriver_1.register)('oj-c-list-view', ListViewWebElement_1.ListViewWebElement);
//# sourceMappingURL=index.js.map