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
 * The ProtocolAction model module.
 * @module com.mn.sdk.model/ProtocolAction
 * @version 1.0
 */
export class ProtocolAction {
  /**
   * Constructs a new <code>ProtocolAction</code>.
   * @alias module:com.mn.sdk.model/ProtocolAction
   * @class
   * @param createdBy {String} 
   * @param createdTime {String} 
   * @param customDesc {String} 
   * @param customId {String} 
   * @param customName {String} 
   * @param payload {String} 
   * @param protocolId {String} 
   * @param topic {String} 
   */
  constructor(createdBy, createdTime, customDesc, customId, customName, payload, protocolId, topic) {
    this.createdBy = createdBy;
    this.createdTime = createdTime;
    this.customDesc = customDesc;
    this.customId = customId;
    this.customName = customName;
    this.payload = payload;
    this.protocolId = protocolId;
    this.topic = topic;
  }


    static constructFromList(list) {
        let array = [new ProtocolAction()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProtocolAction.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProtocolAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProtocolAction} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProtocolAction} The populated <code>ProtocolAction</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProtocolAction();
      if (Reflect.has(data, 'createdBy'))
        obj.createdBy = ApiClient.convertToType(data['createdBy'], 'String');
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'String');
      if (Reflect.has(data, 'customDesc'))
        obj.customDesc = ApiClient.convertToType(data['customDesc'], 'String');
      if (Reflect.has(data, 'customId'))
        obj.customId = ApiClient.convertToType(data['customId'], 'String');
      if (Reflect.has(data, 'customName'))
        obj.customName = ApiClient.convertToType(data['customName'], 'String');
      if (Reflect.has(data, 'payload'))
        obj.payload = ApiClient.convertToType(data['payload'], 'String');
      if (Reflect.has(data, 'protocolId'))
        obj.protocolId = ApiClient.convertToType(data['protocolId'], 'String');
      if (Reflect.has(data, 'topic'))
        obj.topic = ApiClient.convertToType(data['topic'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} createdBy
 */
ProtocolAction.prototype.createdBy = undefined;

/**
 * @member {String} createdTime
 */
ProtocolAction.prototype.createdTime = undefined;

/**
 * @member {String} customDesc
 */
ProtocolAction.prototype.customDesc = undefined;

/**
 * @member {String} customId
 */
ProtocolAction.prototype.customId = undefined;

/**
 * @member {String} customName
 */
ProtocolAction.prototype.customName = undefined;

/**
 * @member {String} payload
 */
ProtocolAction.prototype.payload = undefined;

/**
 * @member {String} protocolId
 */
ProtocolAction.prototype.protocolId = undefined;

/**
 * @member {String} topic
 */
ProtocolAction.prototype.topic = undefined;

