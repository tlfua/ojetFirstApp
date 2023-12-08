/**
 * @license
 * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
// define(['../accUtils'],
    // function(accUtils) {

define([
  'ojs/ojtranslation',
  'knockout',
  'utils/Core',
  "ojs/ojasyncvalidator-length",
  'ojs/ojinputtext',
  'ojs/ojinputnumber',
  'ojs/ojformlayout',
  'ojs/ojdatetimepicker'
],
  function(
    Translations,
    ko,
    CoreUtils,
    AsyncLengthValidator
  )
  {
    // const _t = Translations.getTranslatedString;
    function CustomerViewModel() {
      this._initAllIds();
      this._initAllLabels();
      this._initVariables();
      this._initAllObservables();
      this._initValidators();
      
      this.onInputFirstNameValueChange = this._onInputFirstNameValueChange.bind(this);
      this.onInputFirstNameRawValueChange = this._onInputFirstNameRawValueChange.bind(this);
      this.onInputWeightRawValueChange = this._onInputWeightRawValueChange.bind(this);
      this.onInputBirthdayValueChanged = this._onInputBirthdayValueChanged.bind(this);
    
    }

    CustomerViewModel.prototype._initAllIds = function () {
      // console.log(CoreUtils.generateUniqueId());
      // console.log(CoreUtils.generateUniqueId());
      
      this.inputFirstNameId = CoreUtils.generateUniqueId();
      this.inputLastNameId = CoreUtils.generateUniqueId();
      this.inputFullNameId = CoreUtils.generateUniqueId();
      this.inputWeightId = CoreUtils.generateUniqueId();
      this.inputBirthdayId = CoreUtils.generateUniqueId();
      this.inputAgeId = CoreUtils.generateUniqueId();
    };

    CustomerViewModel.prototype._initAllLabels = function () {
      // this.inputFirstNameLabel = _t('inputs.firstName');
      this.inputFirstNameLabel = 'First Name!';

    };

    /**
     * @function _initAllObservables
     * @description init all observable values
     * 
     */
    CustomerViewModel.prototype._initAllObservables = function () {
      this.inputFirstNameValue = ko.observable(null);
      this.inputLastNameValue = ko.observable(null);
      this.inputFullNameValue = ko.observable(null);
      this.inputWeightValue = ko.observable(null);
      this.inputBirthdayValue = ko.observable(null);
      this.inputAgeValue = ko.observable(null);
      this.isInputLastNameDisabled = ko.observable(true);

      // messages custom
      this.inputWeightMessagesCustom = ko.observableArray([]);
      this.inputBirthdayMessagesCustom = ko.observableArray([this.birthdayMessage]);

      // disabled
      this.inputLastNameValue.subscribe(function (_) {
        this.inputFullNameValue(`${this.inputFirstNameValue()} ${this.inputLastNameValue()}`);
      }, this);

    };

    // _initValidators
    CustomerViewModel.prototype._initValidators = function () {
      this.inputFirstNameValidators = ko.observableArray([
        new AsyncLengthValidator({
          min: 5,
          max: 10,
          countBy: 'codeUnit',
          hint: {
            inRange: 'Custom hint: value must have at least {min} characters but not more than {max}'
          },
          messageSummary: {
            tooLong: 'Custom: Too many characters',
            tooShort: 'Custom: Too few characters'
          },
          messageDetail: {
            tooLong: 'Custom: Number of characters is too high. Enter at most {max} characters',
            tooShort: 'Custom: Number of characters is too low. Enter at least {min} characters.'
          }
        })
      ]);
    };

    /**
   * @function _initVariables
   * @description Initializes all the variables.
   */
  CustomerViewModel.prototype._initVariables = function () {
    const minAgeValue = this._getBirthday(18);

    this.inputBirthdayMaxValue = minAgeValue; // todo: change minAgeValue to better name
    this.birthdayMessage = {
      detail: "the age should be > 18",
      summary: '',
      severity: 'error',
    };

    // this.messagesPosition = CoreUtils.toastMessagePosition();
  };

    /**
     * @function _onInputFirstNameValueChange
     * @description Handles the input on value change event.
     * @param {Object} event The value changed event.
     */
    CustomerViewModel.prototype._onInputFirstNameValueChange = function (event) {
      const value = event.detail.value;
      if (value) {
        this.isInputLastNameDisabled(false);
        return;
      }
      this.isInputLastNameDisabled(true);
    };

    /**
     * @function _onInputFirstNameRawValueChange
     * @description  Handles the input on raw value change event.
     * @param {Object} event The value changed event.
     */
    CustomerViewModel.prototype._onInputFirstNameRawValueChange = function (event) {
      if (event.detail.value) {
        event.currentTarget.validate();
      }
    };

    /**
     * @function _onInputWeightRawValueChange
     * @description  Handles the input on raw value change event.
     * @param {Object} event The value changed event.
     */
    CustomerViewModel.prototype._onInputWeightRawValueChange = function (event) {
      const value = event.detail.value;
      if (Number(value) < 40) {
        this.inputWeightMessagesCustom([
          {
            detail: "you should have value >= 40",
            summary: '',
            severity: 'warning',
          },
        ]);
      }
    };

    /**
     * @function _onInputBirthdayValueChanged
     * @description Handles the input on value change event.
     * @param {Object} event The value changed event.
     */
    CustomerViewModel.prototype._onInputBirthdayValueChanged = function (event) {
      const value = event.detail.value;
      if (value) {
        this.inputAgeValue(this._getAge(value));
        this.inputBirthdayMessagesCustom([]);
      }
      else {
        this.inputAgeValue(null);
        this.inputBirthdayMessagesCustom([this.birthdayMessage]);
      }
    };

    // get age
    CustomerViewModel.prototype._getAge = function (dateString) {
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 0 || age > 120) {
        // to fix bug as user type the first number of the year the input date sends as already done the change
        return null;
      }
      return age;
    };

    // get birthday
    CustomerViewModel.prototype._getBirthday = function (age) {
      const today = new Date();
      const year = today.getFullYear() - age;
      const birthday = new Date(year, today.getMonth(), today.getDate()).toISOString();
      return birthday.split('T')[0];
    };
  

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return CustomerViewModel;
  }
);
