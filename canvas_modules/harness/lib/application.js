/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2017. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
"use strict";

// ESLint Rule Overrides

/* eslint no-process-exit: 0 */
var express = require("express");
var path = require("path");
const appConfig = require("./utils/app-config");
const constants = require("./constants");
const log4js = require("log4js");

// const hmrEnabled = process.env.HMR_ENABLED === "true";
const hmrEnabled = true;
const isProduction = process.env.NODE_ENV === "production";

const logger = log4js.getLogger("application");

function _create(callback) {
	var status = appConfig.init();
	if (!status) {
		callback(new Error("Failed to initialize application configuration."), null);
		return;
	}

	var app = express();
	// See: http://expressjs.com/en/guide/behind-proxies.html
	app.set("trust proxy", 1);
	// Configure Development tools
	if (hmrEnabled && !isProduction) {
		logger.info("In development mode; using webpack with HMR");
		_configureHmr(app);
	}
	app.use(express.static(path.join(__dirname, "../public")));
	callback(null, app);
}
function _configureHmr(app) {

	/* eslint new-cap: 0 */
	/* eslint global-require: 0 */
	var hmrRouter = express.Router({
		caseSensitive: true,
		mergeParams: true
	});

	var webpack = require("webpack");
	var webpackConfig = require("../webpack.config.dev");
	var compiler = webpack(webpackConfig);

	// Note: publicPath should match the output directory as defined
	// in the webpack config, but we are applying this middleware to
	// a route mounted at constants.APP_PATH already
	hmrRouter.use(require("webpack-dev-middleware")(compiler, {
		noInfo: true,
		publicPath: "/"
	}));

	hmrRouter.use(require("webpack-hot-middleware")(compiler));
	app.use(constants.APP_PATH, hmrRouter);
}

module.exports.create = _create;
