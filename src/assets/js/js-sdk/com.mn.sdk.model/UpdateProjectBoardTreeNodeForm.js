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
import {UpdateProjectBoardTreeNodeValTypeForm} from './UpdateProjectBoardTreeNodeValTypeForm';

/**
 * The UpdateProjectBoardTreeNodeForm model module.
 * @module com.mn.sdk.model/UpdateProjectBoardTreeNodeForm
 * @version 1.0
 */
export class UpdateProjectBoardTreeNodeForm {
  /**
   * Constructs a new <code>UpdateProjectBoardTreeNodeForm</code>.
   * 项目看板树节点 Form类
   * @alias module:com.mn.sdk.model/UpdateProjectBoardTreeNodeForm
   * @class
   * @param projectBoardId {String} 节点所属看板ID
   * @param projectBoardTreeNodeValTypeForms {Array.<module:com.mn.sdk.model/UpdateProjectBoardTreeNodeValTypeForm>} N个节点值与类型信息
   */
  constructor(projectBoardId, projectBoardTreeNodeValTypeForms) {
    this.projectBoardId = projectBoardId;
    this.projectBoardTreeNodeValTypeForms = projectBoardTreeNodeValTypeForms;
  }


    static constructFromList(list) {
        let array = [new UpdateProjectBoardTreeNodeForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(UpdateProjectBoardTreeNodeForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>UpdateProjectBoardTreeNodeForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/UpdateProjectBoardTreeNodeForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/UpdateProjectBoardTreeNodeForm} The populated <code>UpdateProjectBoardTreeNodeForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateProjectBoardTreeNodeForm();
      if (Reflect.has(data, 'projectBoardId'))
        obj.projectBoardId = ApiClient.convertToType(data['projectBoardId'], 'String');
      if (Reflect.has(data, 'projectBoardTreeNodeValTypeForms'))
        obj.projectBoardTreeNodeValTypeForms = ApiClient.convertToType(data['projectBoardTreeNodeValTypeForms'], [UpdateProjectBoardTreeNodeValTypeForm]);
    }
    return obj;
  }
}

/**
 * 节点所属看板ID
 * @member {String} projectBoardId
 */
UpdateProjectBoardTreeNodeForm.prototype.projectBoardId = undefined;

/**
 * N个节点值与类型信息
 * @member {Array.<module:com.mn.sdk.model/UpdateProjectBoardTreeNodeValTypeForm>} projectBoardTreeNodeValTypeForms
 */
UpdateProjectBoardTreeNodeForm.prototype.projectBoardTreeNodeValTypeForms = undefined;

