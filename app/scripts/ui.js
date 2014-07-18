/* global define */
define(['jquery'], function($) {
	'use strict';

	function init() {

		$(document).ready(function() {
			console.log('this javascript file is loaded correctly');
		});
	}

	return {
		init: init
	};
});

