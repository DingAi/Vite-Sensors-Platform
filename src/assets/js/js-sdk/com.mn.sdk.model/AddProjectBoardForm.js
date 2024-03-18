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
 * The AddProjectBoardForm model module.
 * @module com.mn.sdk.model/AddProjectBoardForm
 * @version 1.0
 */
export class AddProjectBoardForm {
  /**
   * Constructs a new <code>AddProjectBoardForm</code>.
   * 新增项目看板传输类
   * @alias module:com.mn.sdk.model/AddProjectBoardForm
   * @class
   * @param name {String} 项目看板名称
   * @param remark {String} 项目看板备注
   * @param sort {Number} 项目看板序列号
   * @param structureType {String} 项目看板数据结构类型 [0:树结构, 1:过滤列表, 2:分组结构]
   * @param useEnable {Boolean} 是否使用项目看板 [true：使用, false:不使用]
   */
  constructor(name, remark, sort, structureType, useEnable) {
    this.name = name;
    this.remark = remark;
    this.sort = sort;
    this.structureType = structureType;
    this.useEnable = useEnable;
  }


    static constructFromList(list) {
        let array = [new AddProjectBoardForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AddProjectBoardForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AddProjectBoardForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AddProjectBoardForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AddProjectBoardForm} The populated <code>AddProjectBoardForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddProjectBoardForm();
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'sort'))
        obj.sort = ApiClient.convertToType(data['sort'], 'Number');
      if (Reflect.has(data, 'structureType'))
        obj.structureType = ApiClient.convertToType(data['structureType'], 'String');
      if (Reflect.has(data, 'useEnable'))
        obj.useEnable = ApiClient.convertToType(data['useEnable'], 'Boolean');
    }
    return obj;
  }
}

/**
 * 项目看板名称
 * @member {String} name
 */
AddProjectBoardForm.prototype.name = undefined;

/**
 * 项目看板备注
 * @member {String} remark
 */
AddProjectBoardForm.prototype.remark = undefined;

/**
 * 项目看板序列号
 * @member {Number} sort
 */
AddProjectBoardForm.prototype.sort = undefined;

/**
 * 项目看板数据结构类型 [0:树结构, 1:过滤列表, 2:分组结构]
 * @member {String} structureType
 */
AddProjectBoardForm.prototype.structureType = undefined;

/**
 * 是否使用项目看板 [true：使用, false:不使用]
 * @member {Boolean} useEnable
 */
AddProjectBoardForm.prototype.useEnable = undefined;

