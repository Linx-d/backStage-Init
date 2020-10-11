import service from "@/utils/request";

/**
 * 不同类型请求
 * type: form-data
 * let params = new URLSearchParams();
 * params.append('id', 1);
 * 
 * type: raw
 * let rawParams = {id: 1};
 */

/**
 * 添加部门
 *
 * @export
 * @param {
    "name": "部门名",
    "pid": 1
    }
 * @returns
 */
export function addDepartment(data) {
  return service.request({
    method: "post",
    url: "/dept/addDepartment",
    data,
  });
}