import { EleResize } from "./esresize"; // 图表自适应

/**
 *
 * 树状数组
 */
export function translateDataToTree(data, parentId = 0) {
  let tree = [];
  let temp;
  data.forEach((item, index) => {
    if (data[index].pid == parentId) {
      let obj = data[index];
      temp = translateDataToTree(data, data[index].id);
      obj["label"] = obj["name"];
      if (temp.length > 0) {
        obj.children = temp;
        obj.childrenLen = obj.children.length;
      } else {
        obj.children = [];
        obj.childrenLen = obj.children.length;
      }
      tree.push(obj);

      if (item.hasAuthority) {
        recursive(item);
      }
      function recursive(item) {
        item.children.forEach((element) => {
          element.hasAuthority = true;
          if (element.hasAuthority) {
            let len = element.children.length;
            if (len > 0) {
              recursive(element);
            }
          }
        });
      }
    }
  });
  return tree;
}
/**求数组的深度
 *
 */
export function getType(param) {
  return Object.prototype.toString
    .call(param)
    .slice(8, -1)
    .toLowerCase();
}

export function getObjLevel(obj) {
  /* 需要忽略数组时使用
  if(getType(obj) !== 'object'){
        throw new Error('paramater must be object')
    }
  */
  // 用来保存结果，初始化层级为0
  let res = 0;
  function loopGetLevel(obj, level = res) {
    //当前数据是不是对象，是对象就继续，否则比较下层级和值，哪个大取哪个
    if (typeof obj === "object") {
      //对对象的每个属性进行遍历，如果还是对象就递归计算，否则就比较res和level取最大值
      for (var key in obj) {
        if (typeof obj === "object") {
          if (Array.isArray(obj)) {
            loopGetLevel(obj[key], level); // 注意这里，当是数组时继续遍历，但是层数不增加
          } else {
            loopGetLevel(obj[key], level + 1);
          }
        } else {
          res = level + 1 > res ? level + 1 : res;
        }
      }
    } else {
      res = level > res ? level : res;
    }
  }
  loopGetLevel(obj);
  return res;
}

/**切换模块
 * contacts
 */
export function switchModule(data, current) {
  for (let key in data) {
    data[key] = false;
  }
  data[current] = true;
}

/**
 * echarts 图表自适应
 * parms 1. dom 这个图表dom元素 , 2. 注册的图表
 */
export function adaptionEcharts(element, myChart) {
  EleResize.on(element, () => {
    myChart.resize();
  });
}

export function adaptionEchartsV2(myChart) {
  window.addEventListener("resize", () => {
    myChart.resize();
  });
}

/**
 * 拷贝数组
 * parms arr: 需要拷贝的数组,
 * data: 被拷贝数组
 */
export function cloneArray(arr, data) {
  arr.splice(0, arr.length);
  let len = data.length;
  if (len != 0) {
    // 数组拷贝
    data.forEach((item) => {
      arr.push(item);
    });
  } else {
    return;
  }
}

/**
 * 拷贝对象
 * @parms source: 原对象,
 * @parms target: 目标对象
 */
export function cloneObject(source, target) {
  let key = "";
  for (key in source) {
    target[key] = source[key];
  }
}

// 获取url参数
export function getParemter(key) {
  const url = window.location.href;
  if (url.indexOf(key) == -1) {
    return null;
  }
  if (url.indexOf("?") != -1) {
    if (url.indexOf("#") != -1 && url.indexOf("#") > url.indexOf("?")) {
      var str = url.substring(url.indexOf("?") + 1, url.indexOf("#"));
    } else {
      var str = url.substring(url.indexOf("?") + 1);
    }
    let params = str.split("&");
    let value = null;
    params.forEach((param) => {
      if (param.split("=")[0] == key) {
        value = param.split("=")[1];
        return;
      }
    });
    return value;
  }
}
