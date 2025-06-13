sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function(Controller, MessageToast) {
  "use strict";

  return Controller.extend("project1.controller.Login", {
    onlogin: function () {
      MessageToast.show("Login clicked");
    },
    onNavToSignup: function () {
      this.getOwnerComponent().getRouter().navTo("Signup");
    }
  });
});
