sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "hb4/pluginOnboarding/model/models"
], function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("hb4.pluginOnboarding.Component", {

        metadata: {
            manifest: "json"
        },

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);


            this.getModel().read("/datosLandingSet(partner='1',cuit='1')", {
                success: function(oResponse) {
                    if(oResponse.onboardingCompletado){
                        console.log("Completó el onboarding");
                    }else{
                        console.log("Aún no completó el onboarding");
                    }
                },
                error: function (oResponse) {
                    console.log("Error al determinar si completó el onboarding");
                }
            });


        }
    });
});
