/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojtreeview','ojs/ojmodule', 'ojs/ojbutton','ojs/ojtrain'],
 function(oj, ko, $) {
  
    function DashboardViewModel() {
      var self = this;
      self.name=ko.observable("kareem");
      self.currentModule = ko.observable("second");
      this.modulePath = ko.pureComputed(
        function()
        {
          var name = self.currentModule();
          return (name === 'oj:blank'? name: 'ojModule-simple/' + name);
        }
      );
      this.selectedStepValue = ko.observable('stp1');
      this.selectedStepLabel = ko.observable('Step One');
      this.stepArray =
        ko.observableArray(
                [{label:'Step One', id:'stp1'},
                 {label:'Step Two', id:'stp2'},
                 {label:'Step Three', id:'stp3'},
                 {label:'Step Four', id:'stp4'},
                 {label:'Step Five', id:'stp5'}]);
      this.updateLabelText = function(event) {
         var train = document.getElementById("train");
         self.selectedStepLabel(train.getStep(event.detail.value).label);
      };
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
