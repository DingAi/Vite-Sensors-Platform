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
 * The ThirdDeviceAlarmForm model module.
 * @module com.mn.sdk.model/ThirdDeviceAlarmForm
 * @version 1.0
 */
export class ThirdDeviceAlarmForm {
  /**
   * Constructs a new <code>ThirdDeviceAlarmForm</code>.
   * 报警配置表实体类
   * @alias module:com.mn.sdk.model/ThirdDeviceAlarmForm
   * @class
   * @param alarmClassify {String} 报警分类（自定义的分类）
   * @param alarmGroup {Number} 报警所属分组 一个32位二进制的值
   * @param alarmId {Number} 报警id
   * @param alarmName {String} 报警名称
   * @param confirmType {String} 报警确认类型 0:手动确认, 1:恢复后自动确认, 2:只有恢复后才能手动确认
   * @param createdBy {String} 创建人
   * @param detail {String} 报警详情
   * @param deviceId {String} 
   * @param expression {String} 报警表达式
   * @param level {String} 报警级别 0：一般，1：重要，2：紧急
   * @param position {String} 报警位置
   * @param pushDelayTime {String} 延迟推送时间(单位秒,为0时不延迟)
   * @param pushRestoreMessage {String} 是否推送报警恢复消息 0：否，1：是
   * @param restoreMessage {String} 报警恢复详情
   * @param sortNo {Number} 排序号
   * @param variantId {Number} 变量id
   */
  constructor(alarmClassify, alarmGroup, alarmId, alarmName, confirmType, createdBy, detail, deviceId, expression, level, position, pushDelayTime, pushRestoreMessage, restoreMessage, sortNo, variantId) {
    this.alarmClassify = alarmClassify;
    this.alarmGroup = alarmGroup;
    this.alarmId = alarmId;
    this.alarmName = alarmName;
    this.confirmType = confirmType;
    this.createdBy = createdBy;
    this.detail = detail;
    this.deviceId = deviceId;
    this.expression = expression;
    this.level = level;
    this.position = position;
    this.pushDelayTime = pushDelayTime;
    this.pushRestoreMessage = pushRestoreMessage;
    this.restoreMessage = restoreMessage;
    this.sortNo = sortNo;
    this.variantId = variantId;
  }


    static constructFromList(list) {
        let array = [new ThirdDeviceAlarmForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ThirdDeviceAlarmForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ThirdDeviceAlarmForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ThirdDeviceAlarmForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ThirdDeviceAlarmForm} The populated <code>ThirdDeviceAlarmForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ThirdDeviceAlarmForm();
      if (Reflect.has(data, 'alarmClassify'))
        obj.alarmClassify = ApiClient.convertToType(data['alarmClassify'], 'String');
      if (Reflect.has(data, 'alarmGroup'))
        obj.alarmGroup = ApiClient.convertToType(data['alarmGroup'], 'Number');
      if (Reflect.has(data, 'alarmId'))
        obj.alarmId = ApiClient.convertToType(data['alarmId'], 'Number');
      if (Reflect.has(data, 'alarmName'))
        obj.alarmName = ApiClient.convertToType(data['alarmName'], 'String');
      if (Reflect.has(data, 'confirmType'))
        obj.confirmType = ApiClient.convertToType(data['confirmType'], 'String');
      if (Reflect.has(data, 'createdBy'))
        obj.createdBy = ApiClient.convertToType(data['createdBy'], 'String');
      if (Reflect.has(data, 'detail'))
        obj.detail = ApiClient.convertToType(data['detail'], 'String');
      if (Reflect.has(data, 'deviceId'))
        obj.deviceId = ApiClient.convertToType(data['deviceId'], 'String');
      if (Reflect.has(data, 'expression'))
        obj.expression = ApiClient.convertToType(data['expression'], 'String');
      if (Reflect.has(data, 'level'))
        obj.level = ApiClient.convertToType(data['level'], 'String');
      if (Reflect.has(data, 'position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (Reflect.has(data, 'pushDelayTime'))
        obj.pushDelayTime = ApiClient.convertToType(data['pushDelayTime'], 'String');
      if (Reflect.has(data, 'pushRestoreMessage'))
        obj.pushRestoreMessage = ApiClient.convertToType(data['pushRestoreMessage'], 'String');
      if (Reflect.has(data, 'restoreMessage'))
        obj.restoreMessage = ApiClient.convertToType(data['restoreMessage'], 'String');
      if (Reflect.has(data, 'sortNo'))
        obj.sortNo = ApiClient.convertToType(data['sortNo'], 'Number');
      if (Reflect.has(data, 'variantId'))
        obj.variantId = ApiClient.convertToType(data['variantId'], 'Number');
    }
    return obj;
  }
}

/**
 * 报警分类（自定义的分类）
 * @member {String} alarmClassify
 */
ThirdDeviceAlarmForm.prototype.alarmClassify = undefined;

/**
 * 报警所属分组 一个32位二进制的值
 * @member {Number} alarmGroup
 */
ThirdDeviceAlarmForm.prototype.alarmGroup = undefined;

/**
 * 报警id
 * @member {Number} alarmId
 */
ThirdDeviceAlarmForm.prototype.alarmId = undefined;

/**
 * 报警名称
 * @member {String} alarmName
 */
ThirdDeviceAlarmForm.prototype.alarmName = undefined;

/**
 * 报警确认类型 0:手动确认, 1:恢复后自动确认, 2:只有恢复后才能手动确认
 * @member {String} confirmType
 */
ThirdDeviceAlarmForm.prototype.confirmType = undefined;

/**
 * 创建人
 * @member {String} createdBy
 */
ThirdDeviceAlarmForm.prototype.createdBy = undefined;

/**
 * 报警详情
 * @member {String} detail
 */
ThirdDeviceAlarmForm.prototype.detail = undefined;

/**
 * @member {String} deviceId
 */
ThirdDeviceAlarmForm.prototype.deviceId = undefined;

/**
 * 报警表达式
 * @member {String} expression
 */
ThirdDeviceAlarmForm.prototype.expression = undefined;

/**
 * 报警级别 0：一般，1：重要，2：紧急
 * @member {String} level
 */
ThirdDeviceAlarmForm.prototype.level = undefined;

/**
 * 报警位置
 * @member {String} position
 */
ThirdDeviceAlarmForm.prototype.position = undefined;

/**
 * 延迟推送时间(单位秒,为0时不延迟)
 * @member {String} pushDelayTime
 */
ThirdDeviceAlarmForm.prototype.pushDelayTime = undefined;

/**
 * 是否推送报警恢复消息 0：否，1：是
 * @member {String} pushRestoreMessage
 */
ThirdDeviceAlarmForm.prototype.pushRestoreMessage = undefined;

/**
 * 报警恢复详情
 * @member {String} restoreMessage
 */
ThirdDeviceAlarmForm.prototype.restoreMessage = undefined;

/**
 * 排序号
 * @member {Number} sortNo
 */
ThirdDeviceAlarmForm.prototype.sortNo = undefined;

/**
 * 变量id
 * @member {Number} variantId
 */
ThirdDeviceAlarmForm.prototype.variantId = undefined;

