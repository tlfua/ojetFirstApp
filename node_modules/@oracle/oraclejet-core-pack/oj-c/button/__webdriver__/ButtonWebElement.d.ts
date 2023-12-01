import { ButtonWebElementBase } from './ButtonWebElementBase';
/**
 * The component WebElement for [oj-c-button](../../../oj-c/docs/oj.Button.html).
 * Do not instantiate this class directly, instead, use
 * [findButton](../modules.html#findButton).
 */
export declare class ButtonWebElement extends ButtonWebElementBase {
    /**
     * Perform a click on the button
     */
    doAction(): Promise<void>;
    /**
     * Perform a click on the button
     */
    click(): Promise<void>;
    /**
     * Sets the value of <code>label</code> property.
     * Text to show in the button.
     * @param label The value to set for <code>label</code>
     * @deprecated Since 14.0.0. Do not use this method to change the button label. It will be removed in the next release.
     */
    changeLabel(label: string): Promise<void>;
    /**
     * Sets the value of <code>disabled</code> property.
     * Specifies that the button element should be disabled.
     * @param disabled The value to set for <code>disabled</code>
     * @deprecated Since 14.0.0. Do not use this method to disable the button. It will be removed in the next release.
     */
    changeDisabled(disabled: boolean): Promise<void>;
    /**
     * Sets the value of <code>width</code> property.
     * Specifies that the button style width
     * @param width The value to set for <code>width</code>
     * @deprecated Since 14.0.0. Do not use this method to change the button width. It will be removed in the next release.
     */
    changeWidth(width: number | string): Promise<void>;
    /**
     * Sets the value of <code>display</code> property.
     * Display just the label, the icons, or all. Label is used as tooltip and should be set in all cases.
     * @param display The value to set for <code>display</code>
     * @deprecated Since 14.0.0. Do not use this method to change the button display. It will be removed in the next release.
     */
    changeDisplay(display: string): Promise<void>;
    /**
     * Sets the value of <code>size</code> property.
     * Size of button
     * @param size The value to set for <code>size</code>
     * @deprecated Since 14.0.0. Do not use this method to change the button size. It will be removed in the next release.
     */
    changeSizeProperty(size: string): Promise<void>;
    /**
     * Sets the value of <code>edge</code> property.
     * Specifies whether the button is attached to an edge. For example setting edge='bottom' can be used to attach a button to the bottom of a card. The button is then stretched to 100% width, and borders adjusted.
     * @param edge The value to set for <code>edge</code>
     * @deprecated Since 14.0.0. Do not use this method to change the button edge. It will be removed in the next release.
     */
    changeEdge(edge: string): Promise<void>;
    /**
     * Sets the value of <code>chroming</code> property.
     * Indicates in what states the button has variants in background and border.
     * @param chroming The value to set for <code>chroming</code>
     * @deprecated Since 14.0.0. Do not use this method to change the button chroming. It will be removed in the next release.
     */
    changeChroming(chroming: string): Promise<void>;
}
