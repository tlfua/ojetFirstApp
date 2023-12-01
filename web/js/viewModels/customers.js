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
  'knockout',
  'ojs/ojinputtext',
  'ojs/ojinputnumber',
  'ojs/ojformlayout'
],
  function(
    ko
  )
  {
    function CustomerViewModel() {
      this._initAllIds();
      this._initAllLabels();
      this._initAllObservables();
      // console.log(this);
      

    
    }

    CustomerViewModel.prototype._initAllIds = function () {
      this.inputFirstNameId = 'input-first-name';
    }

    CustomerViewModel.prototype._initAllLabels = function () {
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
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return CustomerViewModel;
  }
);
