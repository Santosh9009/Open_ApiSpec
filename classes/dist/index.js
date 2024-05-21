"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpful_decorators_1 = require("helpful-decorators");
class Dateclass {
    constructor(timezone) {
        this.timezone = timezone;
    }
    getMonth() {
        const d = new Date();
        console.log(d.getMonth());
    }
    getDate() {
        const d = new Date();
        return d.getDate();
    }
    getTimezone() {
        return this.timezone;
    }
}
__decorate([
    helpful_decorators_1.measure
], Dateclass.prototype, "getMonth", null);
const dateobject = new Dateclass('AUS');
dateobject.getMonth();
dateobject.getMonth();
dateobject.getMonth();
// console.log(dateobject.timezone);
