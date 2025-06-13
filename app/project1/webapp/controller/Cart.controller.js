sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"], function(Controller, MessageToast) {

    "use strict";
  
    return Controller.extend("project1.controller.Cart", {
  
      onCheckout: function () {
  
        const items = this.getView().getModel("cartModel").getProperty("/items");
  
        MessageToast.show(`Checking out ${items.length} items`);
  
      },
  
      onBack: function () {
  
        this.getOwnerComponent().getRouter().navTo("ProductList");
  
      }
  
    });
  
  });
   