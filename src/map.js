/**
 * 异步加载百度地图
 * @returns {Promise}
 * @constructor
 */
export function loadBaiDuMap(ak) {
  return new Promise(function(resolve, reject) {
    try {
      resolve(BMap);
    } catch (e) {
      window.init = function() {
        resolve(BMap);
      };
      let script1 = document.createElement("script");
      script1.type = "text/javascript";
      script1.src =
        "http://api.map.baidu.com/api?v=3.0&ak=" + ak + "&callback=init";
      script1.onerror = reject;
      document.head.appendChild(script1);
    }
  });
}

/**
 * 异步加载百度地图,以及绘制工具
 * @returns {Promise}
 * @constructor
 */
export function Map(ak) {
  return loadBaiDuMap(ak).then((BMap) => {
    let loaded = false;
    try {
      loaded = BMapLib && BMapLib.DrawingManager;
    } catch (e) {
      loaded = false;
    }
    if (!loaded) {
      let script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.src =
        "http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js";
      document.body.appendChild(script2);
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css";
      document.head.appendChild(link);
    } else {
      console.log("BMapLib.DrawingManager is loaded!");
    }
    return BMap;
  });
}
