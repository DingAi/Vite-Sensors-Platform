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
 * The VariantDetailedInfoVo model module.
 * @module com.mn.sdk.model/VariantDetailedInfoVo
 * @version 1.0
 */
export class VariantDetailedInfoVo {
  /**
   * Constructs a new <code>VariantDetailedInfoVo</code>.
   * 变量详细信息
   * @alias module:com.mn.sdk.model/VariantDetailedInfoVo
   * @class
   * @param addr {String} 变量地址
   * @param collectorName {String} 变量地址
   * @param dataType {String} 数据类型
   * @param deviceId {String} 设备id
   * @param groupName {String} 分组名称
   * @param levelName {String} 安全类型名称
   * @param phoneVisible {Number} 可移动的
   * @param plcName {String} plc名称
   * @param readOnly {Boolean} 是否只读
   * @param saveType {String} 保存类型
   * @param saveValue {String} 保存值
   * @param sortNo {Number} 排序号
   * @param tagId {String} 关联标签id
   * @param tagName {String} 关联标签name
   * @param textFalse {String} textFalse
   * @param textTrue {String} textTrue
   * @param unit {String} 单位
   * @param variantId {Number} 变量id
   * @param variantLevel {String} 变量级别
   * @param variantName {String} 变量name
   * @param writeable {String} 读写
   */
  constructor(addr, collectorName, dataType, deviceId, groupName, levelName, phoneVisible, plcName, readOnly, saveType, saveValue, sortNo, tagId, tagName, textFalse, textTrue, unit, variantId, variantLevel, variantName, writeable) {
    this.addr = addr;
    this.collectorName = collectorName;
    this.dataType = dataType;
    this.deviceId = deviceId;
    this.groupName = groupName;
    this.levelName = levelName;
    this.phoneVisible = phoneVisible;
    this.plcName = plcName;
    this.readOnly = readOnly;
    this.saveType = saveType;
    this.saveValue = saveValue;
    this.sortNo = sortNo;
    this.tagId = tagId;
    this.tagName = tagName;
    this.textFalse = textFalse;
    this.textTrue = textTrue;
    this.unit = unit;
    this.variantId = variantId;
    this.variantLevel = variantLevel;
    this.variantName = variantName;
    this.writeable = writeable;
  }


    static constructFromList(list) {
        let array = [new VariantDetailedInfoVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(VariantDetailedInfoVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>VariantDetailedInfoVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/VariantDetailedInfoVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/VariantDetailedInfoVo} The populated <code>VariantDetailedInfoVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VariantDetailedInfoVo();
      if (Reflect.has(data, 'addr'))
        obj.addr = ApiClient.convertToType(data['addr'], 'String');
      if (Reflect.has(data, 'collectorName'))
        obj.collectorName = ApiClient.convertToType(data['collectorName'], 'String');
      if (Reflect.has(data, 'dataType'))
        obj.dataType = ApiClient.convertToType(data['dataType'], 'String');
      if (Reflect.has(data, 'deviceId'))
        obj.deviceId = ApiClient.convertToType(data['deviceId'], 'String');
      if (Reflect.has(data, 'groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], 'String');
      if (Reflect.has(data, 'levelName'))
        obj.levelName = ApiClient.convertToType(data['levelName'], 'String');
      if (Reflect.has(data, 'phoneVisible'))
        obj.phoneVisible = ApiClient.convertToType(data['phoneVisible'], 'Number');
      if (Reflect.has(data, 'plcName'))
        obj.plcName = ApiClient.convertToType(data['plcName'], 'String');
      if (Reflect.has(data, 'readOnly'))
        obj.readOnly = ApiClient.convertToType(data['readOnly'], 'Boolean');
      if (Reflect.has(data, 'saveType'))
        obj.saveType = ApiClient.convertToType(data['saveType'], 'String');
      if (Reflect.has(data, 'saveValue'))
        obj.saveValue = ApiClient.convertToType(data['saveValue'], 'String');
      if (Reflect.has(data, 'sortNo'))
        obj.sortNo = ApiClient.convertToType(data['sortNo'], 'Number');
      if (Reflect.has(data, 'tagId'))
        obj.tagId = ApiClient.convertToType(data['tagId'], 'String');
      if (Reflect.has(data, 'tagName'))
        obj.tagName = ApiClient.convertToType(data['tagName'], 'String');
      if (Reflect.has(data, 'textFalse'))
        obj.textFalse = ApiClient.convertToType(data['textFalse'], 'String');
      if (Reflect.has(data, 'textTrue'))
        obj.textTrue = ApiClient.convertToType(data['textTrue'], 'String');
      if (Reflect.has(data, 'unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
      if (Reflect.has(data, 'variantId'))
        obj.variantId = ApiClient.convertToType(data['variantId'], 'Number');
      if (Reflect.has(data, 'variantLevel'))
        obj.variantLevel = ApiClient.convertToType(data['variantLevel'], 'String');
      if (Reflect.has(data, 'variantName'))
        obj.variantName = ApiClient.convertToType(data['variantName'], 'String');
      if (Reflect.has(data, 'writeable'))
        obj.writeable = ApiClient.convertToType(data['writeable'], 'String');
    }
    return obj;
  }
}

/**
 * 变量地址
 * @member {String} addr
 */
VariantDetailedInfoVo.prototype.addr = undefined;

/**
 * 变量地址
 * @member {String} collectorName
 */
VariantDetailedInfoVo.prototype.collectorName = undefined;

/**
 * 数据类型
 * @member {String} dataType
 */
VariantDetailedInfoVo.prototype.dataType = undefined;

/**
 * 设备id
 * @member {String} deviceId
 */
VariantDetailedInfoVo.prototype.deviceId = undefined;

/**
 * 分组名称
 * @member {String} groupName
 */
VariantDetailedInfoVo.prototype.groupName = undefined;

/**
 * 安全类型名称
 * @member {String} levelName
 */
VariantDetailedInfoVo.prototype.levelName = undefined;

/**
 * 可移动的
 * @member {Number} phoneVisible
 */
VariantDetailedInfoVo.prototype.phoneVisible = undefined;

/**
 * plc名称
 * @member {String} plcName
 */
VariantDetailedInfoVo.prototype.plcName = undefined;

/**
 * 是否只读
 * @member {Boolean} readOnly
 */
VariantDetailedInfoVo.prototype.readOnly = undefined;

/**
 * 保存类型
 * @member {String} saveType
 */
VariantDetailedInfoVo.prototype.saveType = undefined;

/**
 * 保存值
 * @member {String} saveValue
 */
VariantDetailedInfoVo.prototype.saveValue = undefined;

/**
 * 排序号
 * @member {Number} sortNo
 */
VariantDetailedInfoVo.prototype.sortNo = undefined;

/**
 * 关联标签id
 * @member {String} tagId
 */
VariantDetailedInfoVo.prototype.tagId = undefined;

/**
 * 关联标签name
 * @member {String} tagName
 */
VariantDetailedInfoVo.prototype.tagName = undefined;

/**
 * textFalse
 * @member {String} textFalse
 */
VariantDetailedInfoVo.prototype.textFalse = undefined;

/**
 * textTrue
 * @member {String} textTrue
 */
VariantDetailedInfoVo.prototype.textTrue = undefined;

/**
 * 单位
 * @member {String} unit
 */
VariantDetailedInfoVo.prototype.unit = undefined;

/**
 * 变量id
 * @member {Number} variantId
 */
VariantDetailedInfoVo.prototype.variantId = undefined;

/**
 * 变量级别
 * @member {String} variantLevel
 */
VariantDetailedInfoVo.prototype.variantLevel = undefined;

/**
 * 变量name
 * @member {String} variantName
 */
VariantDetailedInfoVo.prototype.variantName = undefined;

/**
 * 读写
 * @member {String} writeable
 */
VariantDetailedInfoVo.prototype.writeable = undefined;

