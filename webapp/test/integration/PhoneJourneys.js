jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/sap/test/integration/NavigationJourneyPhone",
		"com/sap/test/integration/NotFoundJourneyPhone",
		"com/sap/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});