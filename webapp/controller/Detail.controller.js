sap.ui.define(['sap/ui/core/mvc/Controller'], Controller => {
  'use strict'

  return Controller.extend('de.cpro.schulung.chramr.controller.Detail', {
    onInit: function () {
      // Attach route matched event to load data when navigation happens
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this)
      oRouter
        .getRoute('Detail')
        .attachPatternMatched(this._onObjectMatched, this)
    },

    _onObjectMatched: function (oEvent) {
      //   var sProductId = oEvent.getParameter('arguments').productId
      //   // Bind the view to the product using the key (adjust the path to your entity set)
      //   this.getView().bindElement({
      //     path: "/ZC_ESR_UI5_PRODUCT('" + sProductId + "')",
      //     model: this.getOwnerComponent().getModel()
      //   })

      var sGuid = oEvent.getParameter('arguments').productId
      //   console.log(oEvent.getParameter('arguments'))

      this.getView().bindElement({
        path: "/ZC_ESR_UI5_PRODUCT(guid'" + sGuid + "')"
      })
    },

    onNavBack: function () {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this)
      oRouter.navTo('RouteView1')
    }
  })
})
