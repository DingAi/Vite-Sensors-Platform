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
 * The UserVo model module.
 * @module com.mn.sdk.model/UserVo
 * @version 1.0
 */
export class UserVo {
  /**
   * Constructs a new <code>UserVo</code>.
   * 用户Vo
   * @alias module:com.mn.sdk.model/UserVo
   * @class
   * @param address {String} 地址
   * @param avatar {String} 头像地址
   * @param createdBy {String} 创建人
   * @param createdTime {Date} 创建时间
   * @param departmentId {String} 部门标识
   * @param departmentName {String} 部门名称
   * @param email {String} 邮箱
   * @param enabled {Boolean} 是否启用:1是0否
   * @param id {String} 主键id
   * @param nickname {String} 昵称
   * @param officePhone {String} 办公号码
   * @param phone {String} 手机号
   * @param remark {String} 备注
   * @param roleId {String} 角色id
   * @param roleName {String} 角色name
   * @param sex {Number} 性别 0.男,1女,2未知
   * @param sid {String} 二次开发访问密钥
   * @param type {Number} 类型 0超级管理员(super),1超级企业管理员2企业管理员,3企业用户,4部门管理员5部门用户
   * @param updatedTime {Date} 修改时间
   * @param username {String} 用户名
   */
  constructor(address, avatar, createdBy, createdTime, departmentId, departmentName, email, enabled, id, nickname, officePhone, phone, remark, roleId, roleName, sex, sid, type, updatedTime, username) {
    this.address = address;
    this.avatar = avatar;
    this.createdBy = createdBy;
    this.createdTime = createdTime;
    this.departmentId = departmentId;
    this.departmentName = departmentName;
    this.email = email;
    this.enabled = enabled;
    this.id = id;
    this.nickname = nickname;
    this.officePhone = officePhone;
    this.phone = phone;
    this.remark = remark;
    this.roleId = roleId;
    this.roleName = roleName;
    this.sex = sex;
    this.sid = sid;
    this.type = type;
    this.updatedTime = updatedTime;
    this.username = username;
  }


    static constructFromList(list) {
        let array = [new UserVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(UserVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>UserVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/UserVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/UserVo} The populated <code>UserVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserVo();
      if (Reflect.has(data, 'address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (Reflect.has(data, 'avatar'))
        obj.avatar = ApiClient.convertToType(data['avatar'], 'String');
      if (Reflect.has(data, 'createdBy'))
        obj.createdBy = ApiClient.convertToType(data['createdBy'], 'String');
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'departmentId'))
        obj.departmentId = ApiClient.convertToType(data['departmentId'], 'String');
      if (Reflect.has(data, 'departmentName'))
        obj.departmentName = ApiClient.convertToType(data['departmentName'], 'String');
      if (Reflect.has(data, 'email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (Reflect.has(data, 'enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'nickname'))
        obj.nickname = ApiClient.convertToType(data['nickname'], 'String');
      if (Reflect.has(data, 'officePhone'))
        obj.officePhone = ApiClient.convertToType(data['officePhone'], 'String');
      if (Reflect.has(data, 'phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'roleId'))
        obj.roleId = ApiClient.convertToType(data['roleId'], 'String');
      if (Reflect.has(data, 'roleName'))
        obj.roleName = ApiClient.convertToType(data['roleName'], 'String');
      if (Reflect.has(data, 'sex'))
        obj.sex = ApiClient.convertToType(data['sex'], 'Number');
      if (Reflect.has(data, 'sid'))
        obj.sid = ApiClient.convertToType(data['sid'], 'String');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
      if (Reflect.has(data, 'updatedTime'))
        obj.updatedTime = ApiClient.convertToType(data['updatedTime'], 'Date');
      if (Reflect.has(data, 'username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
    }
    return obj;
  }
}

/**
 * 地址
 * @member {String} address
 */
UserVo.prototype.address = undefined;

/**
 * 头像地址
 * @member {String} avatar
 */
UserVo.prototype.avatar = undefined;

/**
 * 创建人
 * @member {String} createdBy
 */
UserVo.prototype.createdBy = undefined;

/**
 * 创建时间
 * @member {Date} createdTime
 */
UserVo.prototype.createdTime = undefined;

/**
 * 部门标识
 * @member {String} departmentId
 */
UserVo.prototype.departmentId = undefined;

/**
 * 部门名称
 * @member {String} departmentName
 */
UserVo.prototype.departmentName = undefined;

/**
 * 邮箱
 * @member {String} email
 */
UserVo.prototype.email = undefined;

/**
 * 是否启用:1是0否
 * @member {Boolean} enabled
 */
UserVo.prototype.enabled = undefined;

/**
 * 主键id
 * @member {String} id
 */
UserVo.prototype.id = undefined;

/**
 * 昵称
 * @member {String} nickname
 */
UserVo.prototype.nickname = undefined;

/**
 * 办公号码
 * @member {String} officePhone
 */
UserVo.prototype.officePhone = undefined;

/**
 * 手机号
 * @member {String} phone
 */
UserVo.prototype.phone = undefined;

/**
 * 备注
 * @member {String} remark
 */
UserVo.prototype.remark = undefined;

/**
 * 角色id
 * @member {String} roleId
 */
UserVo.prototype.roleId = undefined;

/**
 * 角色name
 * @member {String} roleName
 */
UserVo.prototype.roleName = undefined;

/**
 * 性别 0.男,1女,2未知
 * @member {Number} sex
 */
UserVo.prototype.sex = undefined;

/**
 * 二次开发访问密钥
 * @member {String} sid
 */
UserVo.prototype.sid = undefined;

/**
 * 类型 0超级管理员(super),1超级企业管理员2企业管理员,3企业用户,4部门管理员5部门用户
 * @member {Number} type
 */
UserVo.prototype.type = undefined;

/**
 * 修改时间
 * @member {Date} updatedTime
 */
UserVo.prototype.updatedTime = undefined;

/**
 * 用户名
 * @member {String} username
 */
UserVo.prototype.username = undefined;

