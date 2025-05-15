sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
  function (Controller) {
    'use strict'

    return Controller.extend('de.cpro.schulung.chramr.controller.View1', {
      onInit () {
        const oModel = this.getOwnerComponent().getModel()
        oModel.setDefaultBindingMode('TwoWay')
      },

      onChange: function (oEvent) {
        const oModel = this.getOwnerComponent().getModel()
        oModel.submitChanges()
      },

      onAdd: function () {}
    })
  }
)
