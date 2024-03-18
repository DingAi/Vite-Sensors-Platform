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
 * The ProjectLocationForm model module.
 * @module com.mn.sdk.model/ProjectLocationForm
 * @version 1.0
 */
export class ProjectLocationForm {
  /**
   * Constructs a new <code>ProjectLocationForm</code>.
   * @alias module:com.mn.sdk.model/ProjectLocationForm
   * @class
   * @param alarmRange {Number} 报警范围 0:关闭，1:1千米，5:5千米，10:10千米
   * @param deviceId {String} 虚拟设备id
   * @param projectId {String} 项目ID 
   */
  constructor(alarmRange, deviceId, projectId) {
    this.alarmRange = alarmRange;
    this.deviceId = deviceId;
    this.projectId = projectId;
  }


    static constructFromList(list) {
        let array = [new ProjectLocationForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProjectLocationForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProjectLocationForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProjectLocationForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProjectLocationForm} The populated <code>ProjectLocationForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectLocationForm();
      if (Reflect.has(data, 'alarmRange'))
        obj.alarmRange = ApiClient.convertToType(data['alarmRange'], 'Number');
      if (Reflect.has(data, 'deviceId'))
        obj.deviceId = ApiClient.convertToType(data['deviceId'], 'String');
      if (Reflect.has(data, 'projectId'))
        obj.projectId = ApiClient.convertToType(data['projectId'], 'String');
    }
    return obj;
  }
}

/**
 * 报警范围 0:关闭，1:1千米，5:5千米，10:10千米
 * @member {Number} alarmRange
 */
ProjectLocationForm.prototype.alarmRange = undefined;

/**
 * 虚拟设备id
 * @member {String} deviceId
 */
ProjectLocationForm.prototype.deviceId = undefined;

/**
 * 项目ID 
 * @member {String} projectId
 */
ProjectLocationForm.prototype.projectId = undefined;

