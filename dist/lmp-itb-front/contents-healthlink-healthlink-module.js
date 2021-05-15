(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contents-healthlink-healthlink-module"],{

/***/ "/ZbK":
/*!******************************************************************************!*\
  !*** ./src/app/contents/healthlink/health-status/health-status.component.ts ***!
  \******************************************************************************/
/*! exports provided: HealthStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthStatusComponent", function() { return HealthStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file_app_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_file/app.json */ "kCUb");
var _file_app_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../_file/app.json */ "kCUb", 1);




class HealthStatusComponent {
    constructor() {
        this.calorieObj = {
            dateReadable: null,
            calorieReadable: null,
        };
        this.heartRateObj = {
            dateReadable: null,
            rate: null,
        };
        this.weightObj = {
            dateReadable: null,
            weight: null,
        };
    }
    ngOnInit() {
        this.calorieObj = JSON.parse('' + localStorage.getItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.calorieOutJson));
        this.heartRateObj = JSON.parse('' + localStorage.getItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.heartRateJson));
        this.weightObj = JSON.parse('' + localStorage.getItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.weightJson));
        this.setCalorieObj();
        this.setHeartRateObj();
        this.setWeightObj();
        this.timeInterval = setInterval(() => {
            this.setCalorieObj();
            this.setHeartRateObj();
            this.setWeightObj();
        }, 1000 * 60);
    }
    ngOnDestroy() {
        clearInterval(this.timeInterval);
        localStorage.setItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.calorieOutJson, JSON.stringify(this.calorieObj));
        localStorage.setItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.heartRateJson, JSON.stringify(this.heartRateObj));
        localStorage.setItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.weightJson, JSON.stringify(this.weightObj));
    }
    setCalorieObj() {
        fetch(`${_file_app_json__WEBPACK_IMPORTED_MODULE_2__.api_url}calorie-expended/today`)
            .then(response => response.json())
            .then(data => {
            data.calorieReadable = new Intl.NumberFormat().format(data.calorie || 0);
            data.dateReadable = moment__WEBPACK_IMPORTED_MODULE_1__(data.datetime).format('DD MMMM YYYY, h:mmA');
            this.calorieObj = data;
        });
    }
    setHeartRateObj() {
        fetch(`${_file_app_json__WEBPACK_IMPORTED_MODULE_2__.api_url}heart-rate/today`)
            .then(response => response.json())
            .then(data => {
            data.dateReadable = moment__WEBPACK_IMPORTED_MODULE_1__(data.datetime).format('DD MMMM YYYY, h:mmA');
            this.heartRateObj = data;
        });
    }
    setWeightObj() {
        fetch(`${_file_app_json__WEBPACK_IMPORTED_MODULE_2__.api_url}weight/today`)
            .then(response => response.json())
            .then(data => {
            data.dateReadable = moment__WEBPACK_IMPORTED_MODULE_1__(data.start_datetime).format('DD MMMM YYYY, h:mmA');
            this.weightObj = data;
        });
    }
}
HealthStatusComponent.ɵfac = function HealthStatusComponent_Factory(t) { return new (t || HealthStatusComponent)(); };
HealthStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthStatusComponent, selectors: [["app-health-status"]], decls: 49, vars: 6, consts: [[1, "row"], [1, "col-md-4", "grid-margin"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "col-8", "col-sm-12", "col-xl-8", "my-auto"], [1, "d-flex", "d-sm-block", "d-md-flex", "align-items-center"], [1, "mb-0", "mr-2"], [1, "mb-0", "font-weight-medium"], [1, "text-muted", "font-weight-normal"], [1, "col-4", "col-sm-12", "col-xl-4", "text-center", "text-xl-right"], [1, "icon-lg", "mdi", "mdi-food", "text-success", "ml-auto"], [1, "icon-lg", "mdi", "mdi-heart-pulse", "text-danger", "ml-auto"], [1, "col-md-4"], [1, "icon-lg", "mdi", "mdi-weight-kilogram", "text-primary", "ml-auto"]], template: function HealthStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Calorie Expended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "calories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Heart Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "bpm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.calorieObj == null ? null : ctx.calorieObj.calorieReadable) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.calorieObj == null ? null : ctx.calorieObj.dateReadable) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.heartRateObj == null ? null : ctx.heartRateObj.rate) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.heartRateObj == null ? null : ctx.heartRateObj.dateReadable) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.weightObj == null ? null : ctx.weightObj.weight) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.weightObj == null ? null : ctx.weightObj.dateReadable) || "-");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtc3RhdHVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-health-status',
                templateUrl: './health-status.component.html',
                styleUrls: ['./health-status.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "89Yb":
/*!****************************************************************************!*\
  !*** ./src/app/contents/healthlink/health-sleep/health-sleep.component.ts ***!
  \****************************************************************************/
/*! exports provided: HealthSleepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthSleepComponent", function() { return HealthSleepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file_app_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_file/app.json */ "kCUb");
var _file_app_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../_file/app.json */ "kCUb", 1);




class HealthSleepComponent {
    constructor() {
        this.sleepObj = {
            dateStartReadable: null,
            dateEndReadable: null,
            monthYear: null,
            duration: 0,
        };
    }
    ngOnInit() {
        this.sleepObj = JSON.parse('' + localStorage.getItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.sleepJson));
        this.setSleepObj();
        this.timeInterval = setInterval(() => {
            this.setSleepObj();
        }, 1000 * 60);
    }
    ngOnDestroy() {
        clearInterval(this.timeInterval);
        localStorage.setItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.sleepJson, JSON.stringify(this.sleepObj));
    }
    setSleepObj() {
        fetch(`${_file_app_json__WEBPACK_IMPORTED_MODULE_2__.api_url}sleep/today`)
            .then(response => response.json())
            .then(data => {
            if (data.status != 'failed') {
                data.dateStartReadable = moment__WEBPACK_IMPORTED_MODULE_1__(data.start_datetime).format('DD, h:mmA');
                data.dateEndReadable = moment__WEBPACK_IMPORTED_MODULE_1__(data.end_datetime).format('DD, h:mmA');
                data.monthYear = moment__WEBPACK_IMPORTED_MODULE_1__(data.end_datetime).format('MMMM YYYY');
                data.duration = moment__WEBPACK_IMPORTED_MODULE_1__(data.end_datetime).diff(moment__WEBPACK_IMPORTED_MODULE_1__(data.start_datetime), 'hours');
                this.sleepObj = data;
            }
        });
    }
}
HealthSleepComponent.ɵfac = function HealthSleepComponent_Factory(t) { return new (t || HealthSleepComponent)(); };
HealthSleepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthSleepComponent, selectors: [["app-health-sleep"]], decls: 15, vars: 4, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "text-center", "text-info", "mb-0", 2, "font-size", "7rem"], [1, "fas", "fa-bed"], [1, "text-center", "text-muted", "mb-4"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "mb-0", "mr-2"], [1, "mb-0", "font-weight-medium"], [1, "text-center", "text-muted", "mb-0"]], template: function HealthSleepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "- Sleep -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.sleepObj == null ? null : ctx.sleepObj.duration) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.sleepObj == null ? null : ctx.sleepObj.dateStartReadable, " - ", ctx.sleepObj == null ? null : ctx.sleepObj.dateEndReadable, " (", ctx.sleepObj == null ? null : ctx.sleepObj.monthYear, ")");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtc2xlZXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthSleepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-health-sleep',
                templateUrl: './health-sleep.component.html',
                styleUrls: ['./health-sleep.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8duw":
/*!********************************************************************************!*\
  !*** ./src/app/contents/healthlink/health-calorie/health-calorie.component.ts ***!
  \********************************************************************************/
/*! exports provided: HealthCalorieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCalorieComponent", function() { return HealthCalorieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables)
class HealthCalorieComponent {
    constructor() { }
    ngOnInit() {
        // const ctx:any = document.getElementById('lineChart');
        // const myChart = new Chart(ctx, {
        //     type: 'bar',
        //     data: {
        //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255, 99, 132, 1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             y: {
        //                 beginAtZero: true
        //             }
        //         }
        //     }
        // });
    }
}
HealthCalorieComponent.ɵfac = function HealthCalorieComponent_Factory(t) { return new (t || HealthCalorieComponent)(); };
HealthCalorieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthCalorieComponent, selectors: [["app-health-calorie"]], decls: 4, vars: 0, consts: [[1, "card"], [1, "card-body"], [1, "card-title"]], template: function HealthCalorieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Line chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtY2Fsb3JpZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthCalorieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-health-calorie',
                templateUrl: './health-calorie.component.html',
                styleUrls: ['./health-calorie.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9r2Z":
/*!******************************************************************!*\
  !*** ./src/app/contents/healthlink/healthlink-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: HealthlinkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthlinkRoutingModule", function() { return HealthlinkRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _healthlink_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./healthlink.component */ "gOw7");
/* harmony import */ var _health_status_health_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health-status/health-status.component */ "/ZbK");
/* harmony import */ var _health_mood_health_mood_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health-mood/health-mood.component */ "HKxT");
/* harmony import */ var _health_step_health_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./health-step/health-step.component */ "dCSP");
/* harmony import */ var _health_sleep_health_sleep_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health-sleep/health-sleep.component */ "89Yb");









const routes = [
    {
        path: '', component: _healthlink_component__WEBPACK_IMPORTED_MODULE_2__["HealthlinkComponent"], children: [
            { path: 'status', component: _health_status_health_status_component__WEBPACK_IMPORTED_MODULE_3__["HealthStatusComponent"] },
            { path: 'mood', component: _health_mood_health_mood_component__WEBPACK_IMPORTED_MODULE_4__["HealthMoodComponent"] },
            { path: 'step', component: _health_step_health_step_component__WEBPACK_IMPORTED_MODULE_5__["HealthStepComponent"] },
            { path: 'sleep', component: _health_sleep_health_sleep_component__WEBPACK_IMPORTED_MODULE_6__["HealthSleepComponent"] },
            { path: '', redirectTo: 'status', pathMatch: 'full' },
        ]
    },
];
class HealthlinkRoutingModule {
}
HealthlinkRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HealthlinkRoutingModule });
HealthlinkRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HealthlinkRoutingModule_Factory(t) { return new (t || HealthlinkRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HealthlinkRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthlinkRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "HKxT":
/*!**************************************************************************!*\
  !*** ./src/app/contents/healthlink/health-mood/health-mood.component.ts ***!
  \**************************************************************************/
/*! exports provided: HealthMoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthMoodComponent", function() { return HealthMoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class HealthMoodComponent {
    constructor() { }
    ngOnInit() {
    }
}
HealthMoodComponent.ɵfac = function HealthMoodComponent_Factory(t) { return new (t || HealthMoodComponent)(); };
HealthMoodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthMoodComponent, selectors: [["app-health-mood"]], decls: 36, vars: 0, consts: [[1, "emoji__grid"], [1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "align-self-center", "mb-0"], [1, "icon", "icon-box-warning"], [1, "fas", "fa-grin-tongue-squint", "icon-item"], [1, "fas", "fa-smile-beam", "icon-item"], [1, "fas", "fa-meh", "icon-item"], [1, "fas", "fa-sad-tear", "icon-item"], [1, "fas", "fa-tired", "icon-item"]], template: function HealthMoodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "43%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "11%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "22%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "19%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtbW9vZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthMoodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-health-mood',
                templateUrl: './health-mood.component.html',
                styleUrls: ['./health-mood.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KbT1":
/*!************************************************************************************!*\
  !*** ./src/app/contents/healthlink/health-heartrate/health-heartrate.component.ts ***!
  \************************************************************************************/
/*! exports provided: HealthHeartrateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthHeartrateComponent", function() { return HealthHeartrateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class HealthHeartrateComponent {
    constructor() { }
    ngOnInit() {
    }
}
HealthHeartrateComponent.ɵfac = function HealthHeartrateComponent_Factory(t) { return new (t || HealthHeartrateComponent)(); };
HealthHeartrateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthHeartrateComponent, selectors: [["app-health-heartrate"]], decls: 2, vars: 0, template: function HealthHeartrateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "health-heartrate works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtaGVhcnRyYXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthHeartrateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-health-heartrate',
                templateUrl: './health-heartrate.component.html',
                styleUrls: ['./health-heartrate.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WmZs":
/*!**********************************************************!*\
  !*** ./src/app/contents/healthlink/healthlink.module.ts ***!
  \**********************************************************/
/*! exports provided: HealthlinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthlinkModule", function() { return HealthlinkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _healthlink_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./healthlink-routing.module */ "9r2Z");
/* harmony import */ var _healthlink_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./healthlink.component */ "gOw7");
/* harmony import */ var _health_calorie_health_calorie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health-calorie/health-calorie.component */ "8duw");
/* harmony import */ var _health_heartrate_health_heartrate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./health-heartrate/health-heartrate.component */ "KbT1");
/* harmony import */ var _health_status_health_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health-status/health-status.component */ "/ZbK");
/* harmony import */ var _health_mood_health_mood_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health-mood/health-mood.component */ "HKxT");
/* harmony import */ var _health_step_health_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./health-step/health-step.component */ "dCSP");
/* harmony import */ var _health_sleep_health_sleep_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./health-sleep/health-sleep.component */ "89Yb");











class HealthlinkModule {
}
HealthlinkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HealthlinkModule });
HealthlinkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HealthlinkModule_Factory(t) { return new (t || HealthlinkModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _healthlink_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthlinkRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HealthlinkModule, { declarations: [_healthlink_component__WEBPACK_IMPORTED_MODULE_3__["HealthlinkComponent"],
        _health_calorie_health_calorie_component__WEBPACK_IMPORTED_MODULE_4__["HealthCalorieComponent"],
        _health_heartrate_health_heartrate_component__WEBPACK_IMPORTED_MODULE_5__["HealthHeartrateComponent"],
        _health_status_health_status_component__WEBPACK_IMPORTED_MODULE_6__["HealthStatusComponent"],
        _health_mood_health_mood_component__WEBPACK_IMPORTED_MODULE_7__["HealthMoodComponent"],
        _health_step_health_step_component__WEBPACK_IMPORTED_MODULE_8__["HealthStepComponent"],
        _health_sleep_health_sleep_component__WEBPACK_IMPORTED_MODULE_9__["HealthSleepComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _healthlink_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthlinkRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthlinkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _healthlink_component__WEBPACK_IMPORTED_MODULE_3__["HealthlinkComponent"],
                    _health_calorie_health_calorie_component__WEBPACK_IMPORTED_MODULE_4__["HealthCalorieComponent"],
                    _health_heartrate_health_heartrate_component__WEBPACK_IMPORTED_MODULE_5__["HealthHeartrateComponent"],
                    _health_status_health_status_component__WEBPACK_IMPORTED_MODULE_6__["HealthStatusComponent"],
                    _health_mood_health_mood_component__WEBPACK_IMPORTED_MODULE_7__["HealthMoodComponent"],
                    _health_step_health_step_component__WEBPACK_IMPORTED_MODULE_8__["HealthStepComponent"],
                    _health_sleep_health_sleep_component__WEBPACK_IMPORTED_MODULE_9__["HealthSleepComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _healthlink_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthlinkRoutingModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "dCSP":
/*!**************************************************************************!*\
  !*** ./src/app/contents/healthlink/health-step/health-step.component.ts ***!
  \**************************************************************************/
/*! exports provided: HealthStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthStepComponent", function() { return HealthStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file_app_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_file/app.json */ "kCUb");
var _file_app_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../_file/app.json */ "kCUb", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");





class HealthStepComponent {
    constructor() {
        this.stepObj = {
            dateReadable: null,
            stepReadable: null,
        };
        this.stepStatus = {
            status: 'Idle',
            icon: 'fa-child',
        };
    }
    ngOnInit() {
        this.stepObj = JSON.parse('' + localStorage.getItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.stepJson));
        this.stepStatus = JSON.parse('' + localStorage.getItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.stepStatusJson));
        this.setStepObj();
        this.setStepStatus();
        this.timeInterval = setInterval(() => {
            this.setStepObj();
            this.setStepStatus();
        }, 1000 * 60);
    }
    ngOnDestroy() {
        clearInterval(this.timeInterval);
        localStorage.setItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.stepJson, JSON.stringify(this.stepObj));
        localStorage.setItem(_file_app_json__WEBPACK_IMPORTED_MODULE_2__.string_key.stepStatusJson, JSON.stringify(this.stepStatus));
    }
    setStepObj() {
        fetch(`${_file_app_json__WEBPACK_IMPORTED_MODULE_2__.api_url}step/today`)
            .then(response => response.json())
            .then(data => {
            data.dateReadable = moment__WEBPACK_IMPORTED_MODULE_1__(data.datetime).format('DD MMMM YYYY, h:mmA');
            data.stepReadable = new Intl.NumberFormat().format(data.step || 0);
            this.stepObj = data;
        });
    }
    setStepStatus() {
        fetch(`${_file_app_json__WEBPACK_IMPORTED_MODULE_2__.api_url}step?sort=DESC&number_item=2`)
            .then(response => response.json())
            .then(data => {
            let stepDiff = data.steps[0].step - data.steps[1].step;
            if (stepDiff <= 0) {
                this.stepStatus = {
                    status: 'Idle',
                    icon: 'fa-child',
                };
            }
            else if (stepDiff > 0 && stepDiff <= 500) {
                this.stepStatus = {
                    status: 'Walking',
                    icon: 'fa-walking',
                };
            }
            else if (stepDiff > 500 && stepDiff <= 1000) {
                this.stepStatus = {
                    status: 'Running',
                    icon: 'fa-running',
                };
            }
            else {
                this.stepStatus = {
                    status: 'Biking',
                    icon: 'fa-biking',
                };
            }
        });
    }
}
HealthStepComponent.ɵfac = function HealthStepComponent_Factory(t) { return new (t || HealthStepComponent)(); };
HealthStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthStepComponent, selectors: [["app-health-step"]], decls: 15, vars: 4, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "text-center", "text-primary", "mb-0", 2, "font-size", "7rem"], [1, "fas", 3, "ngClass"], [1, "text-center", "text-muted", "mb-4"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "mb-0", "mr-2"], [1, "mb-0", "font-weight-medium"], [1, "text-center", "text-muted", "mb-0"]], template: function HealthStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.stepStatus == null ? null : ctx.stepStatus.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", ctx.stepStatus == null ? null : ctx.stepStatus.status, " -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.stepObj == null ? null : ctx.stepObj.stepReadable) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.stepObj == null ? null : ctx.stepObj.dateReadable) || "-");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtc3RlcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-health-step',
                templateUrl: './health-step.component.html',
                styleUrls: ['./health-step.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gOw7":
/*!*************************************************************!*\
  !*** ./src/app/contents/healthlink/healthlink.component.ts ***!
  \*************************************************************/
/*! exports provided: HealthlinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthlinkComponent", function() { return HealthlinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");





class HealthlinkComponent {
    constructor(router) {
        this.router = router;
        this.urlMenu = {
            status: {
                link: '/healthlink/status',
                status: 'btn-outline-danger',
            },
            mood: {
                link: '/healthlink/mood',
                status: 'btn-outline-danger',
            },
            step: {
                link: '/healthlink/step',
                status: 'btn-outline-danger',
            },
            sleep: {
                link: '/healthlink/sleep',
                status: 'btn-outline-danger',
            },
        };
    }
    ngOnInit() {
        this.urlMenuActivation(this.router.url);
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.urlMenuActivation(event.url);
            }
        });
    }
    urlMenuActivation(currentUrl) {
        this.keys(this.urlMenu).forEach(key => {
            this.urlMenu[key].status = 'btn-outline-danger';
            if (currentUrl == this.urlMenu[key].link) {
                this.urlMenu[key].status = 'btn-danger';
            }
        });
    }
    keys(obj) {
        return Object.keys(obj);
    }
}
HealthlinkComponent.ɵfac = function HealthlinkComponent_Factory(t) { return new (t || HealthlinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HealthlinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthlinkComponent, selectors: [["app-healthlink"]], decls: 29, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "card", "corona-gradient-card", "mb-4"], [1, "card-body", "d-flex"], [1, "mr-auto"], [1, "display-4"], [1, "text-warning", "pl-4", "position-relative"], [1, "mdi", "mdi-calendar", "position-absolute", 2, "left", "0"], [1, "mdi", "mdi-gender-male", "position-absolute", 2, "left", "0"], ["src", "../../assets/images/faces/face15.jpg", 1, "rounded-circle", 2, "height", "98px"], [1, "page-header"], [1, "page-title"], [1, "tab__link"], [1, "btn", "btn-fw", 3, "routerLink", "ngClass"], [1, "btn", "btn-outline-danger", "btn-fw", 3, "routerLink", "ngClass"]], template: function HealthlinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hendry Klein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 23 Year Old");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Healthlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sleep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.urlMenu.status.link)("ngClass", ctx.urlMenu.status.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.urlMenu.mood.link)("ngClass", ctx.urlMenu.mood.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.urlMenu.sleep.link)("ngClass", ctx.urlMenu.sleep.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.urlMenu.step.link)("ngClass", ctx.urlMenu.step.status);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGhsaW5rLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthlinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-healthlink',
                templateUrl: './healthlink.component.html',
                styleUrls: ['./healthlink.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=contents-healthlink-healthlink-module.js.map