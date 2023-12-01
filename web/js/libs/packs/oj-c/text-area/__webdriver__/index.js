"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTextArea = exports.TextAreaWebElement = void 0;
var oraclejet_webdriver_1 = require("@oracle/oraclejet-webdriver");
var TextAreaWebElement_1 = require("./TextAreaWebElement");
Object.defineProperty(exports, "TextAreaWebElement", { enumerable: true, get: function () { return TextAreaWebElement_1.TextAreaWebElement; } });
/**
 * Retrieve an instance of [[TextAreaWebElement]].
 * @example
 * ```javascript
 * import { findTextArea } from '@oracle/oraclejet-core-pack/webdriver';
 * const el = await findTextArea(driver, By.id('my-oj-c-text-area'));
 * ```
 * @param driver A WebDriver/WebElement instance from where the element will be
 * searched. If WebDriver is passed, the element will be searched globally in the
 * document. If WebElement is passed, the search will be relative to this element.
 * @param by The locator with which to find the element
 */
async function findTextArea(driver, by) {
    const webEl = await driver.findElement(by);
    // Check that the element is of type TextAreaWebElement
    if (!(webEl instanceof TextAreaWebElement_1.TextAreaWebElement)) {
        const tagName = await webEl.getTagName();
        throw Error(`findTextArea(${by}) created ${webEl.constructor.name} for <${tagName}>, but expected ${TextAreaWebElement_1.TextAreaWebElement.name}`);
    }
    return webEl;
}
exports.findTextArea = findTextArea;
(0, oraclejet_webdriver_1.register)('oj-c-text-area', TextAreaWebElement_1.TextAreaWebElement);
//# sourceMappingURL=index.js.map