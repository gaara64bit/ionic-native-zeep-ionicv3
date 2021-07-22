var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name Zeep
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Zeep } from '@ionic-native/zeep';
 *
 *
 * constructor(private zeep: Zeep) { }
 *
 * ...
 * let configZip = {
 *      from: sourceUrl,
 *      to: destZip,
 *      password: PassZip
 *   }
 *
 * this.zeep.zip(configZip)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * let configUnZip = {
 *      from: sourceZip,
 *      to: destUrl,
 *      password: PassZip
 *   }
 * this.zeep.unzip(configUnZip)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var Zeep = (function (_super) {
    __extends(Zeep, _super);
    function Zeep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param arg1 {JsonArray} Some param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {JsonArray} Some param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Zeep.prototype.zip = /**
       * This function does something
       * @param arg1 {JsonArray} Some param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (config) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    Zeep.prototype.unzip = function (config) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    Zeep.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({ successIndex: 2, errorIndex: 3 }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Zeep.prototype, "zip", null);
    __decorate([
        Cordova({ successIndex: 2, errorIndex: 3 }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Zeep.prototype, "unzip", null);
    /**
     * @name Zeep
     * @description
     * This plugin does something
     *
     * @usage
     * ```typescript
     * import { Zeep } from '@ionic-native/zeep';
     *
     *
     * constructor(private zeep: Zeep) { }
     *
     * ...
     * let configZip = {
     *      from: sourceUrl,
     *      to: destZip,
     *      password: PassZip
     *   }
     *
     * this.zeep.zip(configZip)
     *   .then((res: any) => console.log(res))
     *   .catch((error: any) => console.error(error));
     *
     * let configUnZip = {
     *      from: sourceZip,
     *      to: destUrl,
     *      password: PassZip
     *   }
     * this.zeep.unzip(configUnZip)
     *   .then((res: any) => console.log(res))
     *   .catch((error: any) => console.error(error));
     *
     * ```
     */
    Zeep = __decorate([
        Plugin({
            pluginName: 'Zeep',
            plugin: 'cordova-plugin-zeep',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'Zeep',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: 'https://github.com/vlinde/cordova-plugin-zeep.git',
            // the github repository URL for the plugin
            platforms: [] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], Zeep);
    return Zeep;
}(IonicNativePlugin));
export { Zeep };
//# sourceMappingURL=index.js.map