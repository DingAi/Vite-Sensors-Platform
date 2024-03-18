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
import {TokenInfo} from './TokenInfo';

/**
 * The ResultTokenInfo model module.
 * @module com.mn.sdk.model/ResultTokenInfo
 * @version 1.0
 */
export class ResultTokenInfo {
  /**
   * Constructs a new <code>ResultTokenInfo</code>.
   * @alias module:com.mn.sdk.model/ResultTokenInfo
   * @class
   * @param code {String} 
   * @param data {module:com.mn.sdk.model/TokenInfo} 
   * @param msg {String} 
   * @param time {Date} 
   */
  constructor(code, data, msg, time) {
    this.code = code;
    this.data = data;
    this.msg = msg;
    this.time = time;
  }


    static constructFromList(list) {
        let array = [new ResultTokenInfo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ResultTokenInfo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ResultTokenInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ResultTokenInfo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ResultTokenInfo} The populated <code>ResultTokenInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResultTokenInfo();
      if (Reflect.has(data, 'code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (Reflect.has(data, 'data'))
        obj.data = TokenInfo.constructFromObject(data['data']);
      if (Reflect.has(data, 'msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
      if (Reflect.has(data, 'time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {String} code
 */
ResultTokenInfo.prototype.code = undefined;

/**
 * @member {module:com.mn.sdk.model/TokenInfo} data
 */
ResultTokenInfo.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResultTokenInfo.prototype.msg = undefined;

/**
 * @member {Date} time
 */
ResultTokenInfo.prototype.time = undefined;

