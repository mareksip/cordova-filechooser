var cordova = require('cordova');
module.exports = {

    open: function (successCallback, errorCallback) {
        try {
            var picker = new Windows.Storage.Pickers.FileOpenPicker();
            picker.ViewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;

            picker.fileTypeFilter.replaceAll(["*"]);
            picker.pickSingleFileAsync().then(function (file) {
                if (file !== null) {
                    //return file uri
                    successCallback(file);
                } else {
                    // The picker was dismissed with no selected file
                    successCallback(null);
                }
            }, function (err) {
                successCallback(err);
            });

        } catch (ex) {
            errorCallback(ex);
        }
    }
};

require("cordova/exec/proxy").add("fileChooser", module.exports);
