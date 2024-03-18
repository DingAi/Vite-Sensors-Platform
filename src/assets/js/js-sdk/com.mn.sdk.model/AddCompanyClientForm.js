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
 * The AddCompanyClientForm model module.
 * @module com.mn.sdk.model/AddCompanyClientForm
 * @version 1.0
 */
export class AddCompanyClientForm {
  /**
   * Constructs a new <code>AddCompanyClientForm</code>.
   * 增加企业客户
   * @alias module:com.mn.sdk.model/AddCompanyClientForm
   * @class
   * @param clientId {String} 企业客户的企业Id
   * @param clientName {String} 企业客户名称
   * @param contactEmail {String} 企业客户联系邮箱
   * @param contactName {String} 企业客户联系人名称
   * @param contactPhone {String} 企业客户联系电话
   * @param remark {String} 企业客户备注
   */
  constructor(clientId, clientName, contactEmail, contactName, contactPhone, remark) {
    this.clientId = clientId;
    this.clientName = clientName;
    this.contactEmail = contactEmail;
    this.contactName = contactName;
    this.contactPhone = contactPhone;
    this.remark = remark;
  }


    static constructFromList(list) {
        let array = [new AddCompanyClientForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AddCompanyClientForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AddCompanyClientForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AddCompanyClientForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AddCompanyClientForm} The populated <code>AddCompanyClientForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddCompanyClientForm();
      if (Reflect.has(data, 'clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (Reflect.has(data, 'clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (Reflect.has(data, 'contactEmail'))
        obj.contactEmail = ApiClient.convertToType(data['contactEmail'], 'String');
      if (Reflect.has(data, 'contactName'))
        obj.contactName = ApiClient.convertToType(data['contactName'], 'String');
      if (Reflect.has(data, 'contactPhone'))
        obj.contactPhone = ApiClient.convertToType(data['contactPhone'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
    }
    return obj;
  }
}

/**
 * 企业客户的企业Id
 * @member {String} clientId
 */
AddCompanyClientForm.prototype.clientId = undefined;

/**
 * 企业客户名称
 * @member {String} clientName
 */
AddCompanyClientForm.prototype.clientName = undefined;

/**
 * 企业客户联系邮箱
 * @member {String} contactEmail
 */
AddCompanyClientForm.prototype.contactEmail = undefined;

/**
 * 企业客户联系人名称
 * @member {String} contactName
 */
AddCompanyClientForm.prototype.contactName = undefined;

/**
 * 企业客户联系电话
 * @member {String} contactPhone
 */
AddCompanyClientForm.prototype.contactPhone = undefined;

/**
 * 企业客户备注
 * @member {String} remark
 */
AddCompanyClientForm.prototype.remark = undefined;

