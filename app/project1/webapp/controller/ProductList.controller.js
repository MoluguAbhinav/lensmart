sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/m/MessageToast"], 

    function(Controller, Filter, FilterOperator, MessageToast) {
    
      "use strict";
    
      return Controller.extend("project1.controller.ProductList", {
    
        onInit: function () {
    
          const cartModel = new sap.ui.model.json.JSONModel({ items: [] });
    
          this.getView().getModel("cartModel") || this.getView().setModel(cartModel, "cartModel");
    
        },
    
        onApplyFilter: function () {
    
          const v = this.getView();
    
          const max = v.byId("priceInput").getValue();
    
          const filters = max ? [new Filter("price", FilterOperator.LE, max)] : [];
    
          v.byId("productList").getBinding("items").filter(filters);
    
        },
    
        onAddToCart: function (oEvt) {
    
          const v = this.getView();
    
          const oListItem = oEvt.getSource().getParent();
    
          const path = oListItem.getBindingContext().getPath();
    
          const product = v.getModel().getProperty(path);
    
          const cm = v.getModel("cartModel");
    
          const items = cm.getProperty("/items");
    
          if (items.length >= 5) {
    
            MessageToast.show("Cart full (max 5 items)");
    
            return;
    
          }
    
          items.push(product);
    
          cm.refresh();
    
          MessageToast.show("Added to cart");
    
        },
    
        onNavToCart: function () {
    
          this.getOwnerComponent().getRouter().navTo("Cart");
    
        }
    
      });
    
    });
     