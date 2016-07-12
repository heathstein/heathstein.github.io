"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by 212544474 on 2/12/2016.
 */
var core_1 = require("@angular/core");
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var alert_service_1 = require('./alert-service');
var AlertComponents = (function () {
    function AlertComponents(alertService) {
        this.alertService = alertService;
        this.alerts = this.alertService.getAlerts();
        console.log("---------------------------app-alerts  ", this.alerts);
    }
    AlertComponents.prototype.getAlerts = function () {
        this.alerts = this.alertService.alerts;
        // this.alerts = ["test"]
        console.log("this.alerts ", this.alerts);
        console.log(this.alerts[0].message);
    };
    AlertComponents.prototype.closeAlert = function (i) {
        console.log("i====================: ", i);
        this.alertService.alerts.splice(i, 1);
    };
    AlertComponents = __decorate([
        core_1.Component({
            selector: 'app-alerts',
            directives: [ng2_bootstrap_1.AlertComponent],
            host: { 'class': 'alert-holder' },
            template: "<alert *ngFor=\"let alert of alertService.alerts; let i = index\" dismissOnTimeout=\"{{alert.closeTime}}\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n              {{ alert?.message }}\n              </alert>"
        }), 
        __metadata('design:paramtypes', [alert_service_1.AlertService])
    ], AlertComponents);
    return AlertComponents;
}());
exports.AlertComponents = AlertComponents;
/*


<alert dismissOnTimeout="3000">This alert will dismiss in 3s</alert>

<button type="button" class='btn btn-primary' (click)="addAlert()">Add Alert</button>
*/ 
//# sourceMappingURL=alert-component.js.map