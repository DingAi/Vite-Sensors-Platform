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
import {DeviceModel} from './DeviceModel';
import {VariantFavoriteModel} from './VariantFavoriteModel';

/**
 * The ProjectModel model module.
 * @module com.mn.sdk.model/ProjectModel
 * @version 1.0
 */
export class ProjectModel {
  /**
   * Constructs a new <code>ProjectModel</code>.
   * @alias module:com.mn.sdk.model/ProjectModel
   * @class
   * @param deviceModels {Array.<module:com.mn.sdk.model/DeviceModel>} 
   * @param id {String} 
   * @param name {String} 
   * @param permissionGroupId {String} 
   * @param type {String} 
   * @param variantFavoriteModels {Array.<module:com.mn.sdk.model/VariantFavoriteModel>} 
   */
  constructor(deviceModels, id, name, permissionGroupId, type, variantFavoriteModels) {
    this.deviceModels = deviceModels;
    this.id = id;
    this.name = name;
    this.permissionGroupId = permissionGroupId;
    this.type = type;
    this.variantFavoriteModels = variantFavoriteModels;
  }


    static constructFromList(list) {
        let array = [new ProjectModel()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProjectModel.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProjectModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProjectModel} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProjectModel} The populated <code>ProjectModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectModel();
      if (Reflect.has(data, 'deviceModels'))
        obj.deviceModels = ApiClient.convertToType(data['deviceModels'], [DeviceModel]);
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'permissionGroupId'))
        obj.permissionGroupId = ApiClient.convertToType(data['permissionGroupId'], 'String');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (Reflect.has(data, 'variantFavoriteModels'))
        obj.variantFavoriteModels = ApiClient.convertToType(data['variantFavoriteModels'], [VariantFavoriteModel]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:com.mn.sdk.model/DeviceModel>} deviceModels
 */
ProjectModel.prototype.deviceModels = undefined;

/**
 * @member {String} id
 */
ProjectModel.prototype.id = undefined;

/**
 * @member {String} name
 */
ProjectModel.prototype.name = undefined;

/**
 * @member {String} permissionGroupId
 */
ProjectModel.prototype.permissionGroupId = undefined;

/**
 * @member {String} type
 */
ProjectModel.prototype.type = undefined;

/**
 * @member {Array.<module:com.mn.sdk.model/VariantFavoriteModel>} variantFavoriteModels
 */
ProjectModel.prototype.variantFavoriteModels = undefined;

