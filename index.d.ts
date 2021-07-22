import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class Zeep extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {JsonArray} Some param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    zip(config: {
        [s: string]: any;
    }): Promise<any>;
    unzip(config: {
        [s: string]: any;
    }): Promise<any>;
}
