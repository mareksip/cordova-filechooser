var cordova = require('cordova');
var fileChooserName = "fileChooser";
var fileChooser = {
    open: function(successCallback, errorCallback) {
      cordova.exec(successCallback, errorCallback, fileChooserName, "open", []);
    }
  }
module.exports = fileChooser;