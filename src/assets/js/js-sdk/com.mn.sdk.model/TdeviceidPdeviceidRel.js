/*
 * 系统接口
 * 系统接口文档
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 4.0.0
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The TdeviceidPdeviceidRel model module.
 * @module com.mn.sdk.model/TdeviceidPdeviceidRel
 * @version 1.0
 */
export class TdeviceidPdeviceidRel {
  /**
   * Constructs a new <code>TdeviceidPdeviceidRel</code>.
   * @alias module:com.mn.sdk.model/TdeviceidPdeviceidRel
   * @class
   * @param createdTime {Date} 
   * @param projectDeviceId {String} 
   * @param projectId {String} 
   * @param templateDeviceId {String} 
   * @param templateId {String} 
   */
  constructor(createdTime, projectDeviceId, projectId, templateDeviceId, templateId) {
    this.createdTime = createdTime;
    this.projectDeviceId = projectDeviceId;
    this.projectId = projectId;
    this.templateDeviceId = templateDeviceId;
    this.templateId = templateId;
  }


    static constructFromList(list) {
        let array = [new TdeviceidPdeviceidRel()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(TdeviceidPdeviceidRel.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>TdeviceidPdeviceidRel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/TdeviceidPdeviceidRel} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/TdeviceidPdeviceidRel} The populated <code>TdeviceidPdeviceidRel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TdeviceidPdeviceidRel();
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'projectDeviceId'))
        obj.projectDeviceId = ApiClient.convertToType(data['projectDeviceId'], 'String');
      if (Reflect.has(data, 'projectId'))
        obj.projectId = ApiClient.convertToType(data['projectId'], 'String');
      if (Reflect.has(data, 'templateDeviceId'))
        obj.templateDeviceId = ApiClient.convertToType(data['templateDeviceId'], 'String');
      if (Reflect.has(data, 'templateId'))
        obj.templateId = ApiClient.convertToType(data['templateId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} createdTime
 */
TdeviceidPdeviceidRel.prototype.createdTime = undefined;

/**
 * @member {String} projectDeviceId
 */
TdeviceidPdeviceidRel.prototype.projectDeviceId = undefined;

/**
 * @member {String} projectId
 */
TdeviceidPdeviceidRel.prototype.projectId = undefined;

/**
 * @member {String} templateDeviceId
 */
TdeviceidPdeviceidRel.prototype.templateDeviceId = undefined;

/**
 * @member {String} templateId
 */
TdeviceidPdeviceidRel.prototype.templateId = undefined;

