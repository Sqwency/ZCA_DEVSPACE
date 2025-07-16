/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cz/skoda/bozp/skoleni/bozpskoleniapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
