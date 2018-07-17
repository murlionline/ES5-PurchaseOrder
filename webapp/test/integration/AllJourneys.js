jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 PurchaseOrders in the list
// * All 3 PurchaseOrders have at least one PurchaseOrderItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/test/integration/pages/App",
	"com/sap/test/integration/pages/Browser",
	"com/sap/test/integration/pages/Master",
	"com/sap/test/integration/pages/Detail",
	"com/sap/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.view."
	});

	sap.ui.require([
		"com/sap/test/integration/MasterJourney",
		"com/sap/test/integration/NavigationJourney",
		"com/sap/test/integration/NotFoundJourney",
		"com/sap/test/integration/BusyJourney",
		"com/sap/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});