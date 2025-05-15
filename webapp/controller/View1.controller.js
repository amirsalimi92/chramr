sap.ui.define(['sap/ui/core/mvc/Controller'], Controller => {
  'use strict'

  return Controller.extend('de.cpro.schulung.chramr.controller.View1', {
    onInit () {},

    onChange (event) {
      console.log(event)
      const item = event.getSource()
      const oParent = item.getParent()
      console.log({ oParent })
      const oContext = oParent.getBindingContext()
      console.log(oContext)
    },

    onPress (event) {
      console.log(event.getSource())
    }
  })
})
