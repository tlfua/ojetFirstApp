import { By } from 'selenium-webdriver';
import { DriverLike } from '@oracle/oraclejet-webdriver';
import { InputPasswordWebElement } from './InputPasswordWebElement';
export { InputPasswordWebElement };
/**
 * Retrieve an instance of [[InputPasswordWebElement]].
 * @example
 * ```javascript
 * import { findInputPassword } from '@oracle/oraclejet-core-pack/webdriver';
 * const el = await findInputPassword(driver, By.id('my-oj-c-input-password'));
 * ```
 * @param driver A WebDriver/WebElement instance from where the element will be
 * searched. If WebDriver is passed, the element will be searched globally in the
 * document. If WebElement is passed, the search will be relative to this element.
 * @param by The locator with which to find the element
 */
export declare function findInputPassword(driver: DriverLike, by: By): Promise<InputPasswordWebElement>;
