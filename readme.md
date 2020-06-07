lib
---

### Install
```sh
npm i @4a/lib
```

### Usage
```js
const lib = require('@4a/lib')
```

### API
```js
/**
 * 扩展lib实例
 * @param {Object} obj 
 */
extend(obj)

/**
 * 检查原始对象或数组是否为空
 * @param {Object | Array} obj
 * @return {Boolean}
 */
isEmptyObject(obj)

/**
 * 数组转对象
 * @param {String} key 转换目标key
 * @param {Array} arr 
 * @return {Object}
 */
toMap(key, arr)

/**
 * map对象
 * @param {Object} obj 
 * @param {Function} callback 
 * @return {Object}
 */
map(obj, callback)

each(obj, fn)

/**
 * 深度clone对象
 * @param {Object} obj 
 * @return {Object}
 */
clone(obj)

/**
 * 过滤对象内指定字段
 * @param {Object} obj 
 * @param {Array} arr 字段数组
 * @return {Object}
 */
filter(obj, arr)

/**
 * 删除对象内指定字段
 * @param {Object} obj
 * @param {Array} arr 字段数组
 * @return {Object}
 */
remove(obj, arr)

/**
 * 数字截断
 * @param {Number} num 需要截断的目标
 * @param {Number} length 截断小数点后的长度
 * @return {Number}
 */
toFixed(num, length = 2)

/**
 * 可控范围随机数
 * @param {Number} min 随机数最小值
 * @param {Number} max 随机数最大值
 * @param {Number} length 小数点长度，可选，默认为0取整
 * @return {Number}
 */
random(min, max, length = 0)

/**
 * 字符串马赛克
 * @param {String} str 目标字符串
 * @param {Number} start 起始索引
 * @param {Number} end 终止索引
 * @param {String} placeholder 马赛克占位字符串，默认为 ****
 * @return {String}
 */
mosaic(str, start, end, placeholder = '****')

/**
 * 马赛克手机号
 * @param {String} tel 
 * @return {String}
 */
mosaicTel(tel)

/**
 * 马赛克身份证号
 * @param {String} pid
 * @return {String}
 */
mosaicPid(pid)
```
