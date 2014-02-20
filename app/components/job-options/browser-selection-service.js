'use strict';

angular.module('honeydew')
    .service('browserSelection', function () {
        var gpAddress = "10.10.0.83";

        var local = [
            {
                browser: 'IE 10 Local',
                group: 'Current Local'
            },
            {
                browser: 'Chrome Local',
                group: 'Current Local'
            },
            {
                browser: 'FF Local',
                group: 'Current Local'
            }
        ];

        var grandPoobah = [
            {
                browser: 'GP IE 10 Local',
                group: 'GP: ' + gpAddress,
                local: gpAddress
            },
            {
                browser: 'GP Chrome Local',
                group: 'GP: ' + gpAddress,
                local: gpAddress
            },
            {
                browser: 'GP FF Local',
                group: 'GP: ' + gpAddress,
                local: gpAddress
            }
        ];

        var sauce = [
            {
                browser: 'Windows 2012 - IE 9',
                group: 'SauceLabs OnDemand',
                sauce: 'on'
            },
            {
                browser: 'Windows 2012 - IE 10',
                group: 'SauceLabs OnDemand',
                sauce: 'on'
            },
            {
                browser: 'Windows 2012 - IE 11',
                group: 'SauceLabs OnDemand',
                sauce: 'on'
            },
            {
                browser: 'Windows 2003 - FF',
                group: 'SauceLabs OnDemand',
                sauce: 'on'
            },
            {
                browser: 'Windows 2003 - Chrome',
                group: 'SauceLabs OnDemand',
                sauce: 'on'
            }
        ];

        this.all = local.concat(grandPoobah).concat(sauce);
        this.set = grandPoobah.concat(sauce);
    });
