/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"de/cpro/schulung/chramr/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
