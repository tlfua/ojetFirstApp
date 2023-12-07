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
      this._initAllObservables();
      this._initValidators();
      // console.log(this);
      

    
    }

    CustomerViewModel.prototype._initAllIds = function () {
      // console.log(CoreUtils.generateUniqueId());
      // console.log(CoreUtils.generateUniqueId());
      
      this.inputFirstNameId = CoreUtils.generateUniqueId();
      this.inputLastNameId = CoreUtils.generateUniqueId();
      this.inputFullNameId = CoreUtils.generateUniqueId();
      this.inputWeightId = CoreUtils.generateUniqueId();
      this.inputAgeId = CoreUtils.generateUniqueId();
    }

    CustomerViewModel.prototype._initAllLabels = function () {
      // this.inputFirstNameLabel = _t('inputs.firstName');
      this.inputFirstNameLabel = 'First Name!';

    }

    /**
     * @function _initAllObservables
     * @description init all observable values
     * 
     */
    CustomerViewModel.prototype._initAllObservables = function () {
      this.inputFirstNameValue = ko.observable(null);
      this.inputLastNameValue = ko.observable(null);
      this.inputFullNameValue = ko.observable(null);
      this.inputAgeValue = ko.observable(null);
      
      this.isInputLastNameDisabled = ko.observable(true);

      this.onInputFirstNameValueChange = function(event) {
        const value = event.detail.value;
        if (value) {
          this.isInputLastNameDisabled(false);
          return;
        }
        this.isInputLastNameDisabled(true);
        console.log(event);
      }.bind(this);

      this.inputLastNameValue.subscribe(function (_) {
        this.inputFullNameValue(`${this.inputFirstNameValue()} ${this.inputLastNameValue()}`);
      }, this);

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
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return CustomerViewModel;
  }
);
