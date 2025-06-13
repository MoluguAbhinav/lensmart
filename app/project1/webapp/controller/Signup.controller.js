sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"], function(Controller, MessageToast) {
  "use strict";
  return Controller.extend("project1.controller.Signup", {
    onSubmit: function () {
      const v = this.getView();
      const email = v.byId("email").getValue();
      const username = v.byId("username").getValue();
      const mobile = v.byId("mobile").getValue();
      const pwd = v.byId("password").getValue();
      const cpwd = v.byId("confirmPassword").getValue();
      if (pwd !== cpwd) {
        MessageToast.show("Passwords do not match");
        return;
      }
      MessageToast.show("Registration successful");
      this.getOwnerComponent().getRouter().navTo("Login");
    },
    onNavToLogin: function () {
      this.getOwnerComponent().getRouter().navTo("Login");
    }
  });
 });