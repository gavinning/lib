class Lib {

    /**
     * 扩展lib实例
     * @param {Object} obj 
     */
    extend(obj) {
        return Object.assign(this, obj)
    }

    /**
     * 检查原始对象或数组是否为空
     * @param {Object | Array} obj
     * @return {Boolean}
     */
    isEmptyObject(obj) {
        let name
        for (name in obj) {
            return false
        }
        return true
    }

    /**
     * 数组转对象
     * @param {String} key 转换目标key
     * @param {Array} arr 
     * @return {Object}
     */
    toMap(key, arr) {
        let map = {}
        arr.forEach(item => (map[item[key]] = item))
        return map
    }

    /**
     * map对象
     * @param {Object} obj 
     * @param {Function} callback 
     * @return {Object}
     */
    map(obj, callback) {
        const result = {}
        for (const key in obj) {
            result[key] = callback(key, obj[key])
        }
        return result
    }

    each(obj, fn) {
        for (let key in obj) {
            fn(key, obj[key])
        }
    }

    /**
     * 深度clone对象
     * @param {Object} obj 
     * @return {Object}
     */
    clone(obj) {
        return JSON.parse(JSON.stringify(obj))
    }

    /**
     * 过滤对象内指定字段
     * @param {Object} obj 
     * @param {Array} arr 字段数组
     * @return {Object}
     */
    filter(obj, arr) {
        const tmp = {}
        for (let key in obj) {
            if (arr.includes(key)) {
                tmp[key] = obj[key]
            }
        }
        return tmp
    }

    /**
     * 删除对象内指定字段
     * @param {Object} obj
     * @param {Array} arr 字段数组
     * @return {Object}
     */
    remove(obj, arr) {
        const tmp = {}
        for (let key in obj) {
            if (!arr.includes(key)) {
                tmp[key] = obj[key]
            }
        }
        return tmp
    }

    /**
     * 数字截断
     * @param {Number} num 需要截断的目标
     * @param {Number} length 截断小数点后的长度
     * @return {Number}
     */
    toFixed(num, length = 2) {
        return isNaN(num) ? num : Number(num.toFixed(length))
    }

    /**
     * 可控范围随机数
     * @param {Number} min 随机数最小值
     * @param {Number} max 随机数最大值
     * @param {Number} length 小数点长度，可选，默认为0取整
     * @return {Number}
     */
    random(min, max, length = 0) {
        return this.toFixed(min + (max - min) * Math.random(), length)
    }

    /**
     * 字符串马赛克
     * @param {String} str 目标字符串
     * @param {Number} start 起始索引
     * @param {Number} end 终止索引
     * @param {String} placeholder 马赛克占位字符串，默认为 ****
     * @return {String}
     */
    mosaic(str, start, end, placeholder = '****') {
        str = str.toString()
        return str.replace(str.slice(start, end), placeholder)
    }

    /**
     * 马赛克手机号
     * @param {String} tel 
     * @return {String}
     */
    mosaicTel(tel) {
        return this.mosaic(tel, 3, 7)
    }

    /**
     * 马赛克身份证号
     * @param {String} pid
     * @return {String}
     */
    mosaicPid(pid) {
        return this.mosaic(pid, 6, 14, '********')
    }
}

module.exports = new Lib
