const assert = require('assert')
const lib = require('../index')

describe('test lib', () => {

    it('test extend', () => {
        assert.equal(null, lib.test123456)
        lib.extend({
            test123456() {
                return 'method test123456'
            }
        })
        assert.equal('method test123456', lib.test123456())
    })

    it('test isEmptyObject', () => {
        assert.equal(true, lib.isEmptyObject({}))
        assert.equal(true, lib.isEmptyObject([]))
        assert.equal(false, lib.isEmptyObject({a: 1}))
        assert.equal(false, lib.isEmptyObject([1,2,3]))
    })

    it('test toMap', () => {
        const arr = [
            { uid: 'tom', age: 20 },
            { uid: 'jack', age: 21 },
            { uid: 'alice', age: 23 },
        ]
        const map = lib.toMap('uid', arr)
        assert.deepEqual(map, {
            tom: { uid: 'tom', age: 20 },
            jack: { uid: 'jack', age: 21 },
            alice: { uid: 'alice', age: 23 }
        })
    })

    it('test map', () => {
        const obj = { uid: 'tom', age: 20 }
        const mapped = lib.map(obj, (key, value) => {
            return key === 'age' ? value + 1 : value
        })
        assert.deepEqual(mapped, { uid: 'tom', age: 21 })
    })

    it('test each', () => {
        const a1 = []
        const a2 = []
        const obj = { uid: 'tom', age: 20 }
        lib.each(obj, (key, value) => a1.push(key))
        lib.each(obj, (key, value) => a2.push(value))
        assert.deepEqual(a1, ['uid', 'age'])
        assert.deepEqual(a2, ['tom', 20])
    })

    it('test clone', () => {
        const obj = { uid: 'tom', age: 20 }
        const clone = lib.clone(obj)
        assert.notEqual(obj, clone)
        assert.deepEqual(obj, clone)
    })

    it('test filter', () => {
        const obj = { uid: 'tom', age: 20, from: 'HK' }
        const ret1 = lib.filter(obj, ['uid'])
        const ret2 = lib.filter(obj, ['uid', 'age'])
        assert.deepEqual(ret1, { uid: 'tom' })
        assert.deepEqual(ret2, { uid: 'tom', age: 20 })
    })

    it('test remove', () => {
        const obj = { uid: 'tom', age: 20, from: 'HK' }
        const ret1 = lib.remove(obj, ['uid'])
        const ret2 = lib.remove(obj, ['uid', 'age'])
        assert.deepEqual(ret1, { age: 20, from: 'HK' })
        assert.deepEqual(ret2, { from: 'HK' })
    })

    it('test toFixed', () => {
        const pi = 3.141592657
        const num1 = lib.toFixed(pi)
        const num2 = lib.toFixed(pi, 2)
        const num3 = lib.toFixed(pi, 3)
        const num4 = lib.toFixed(pi, 4)
        assert.equal(num1, 3.14)
        assert.equal(num2, 3.14)
        assert.equal(num3, 3.142)
        assert.equal(num4, 3.1416)
    })

    it('test random 1', () => {
        const min = 10
        const max = 20
        const num = lib.random(min, max)
        assert.ok(num >= min)
        assert.ok(num <= max)
    })

    it('test random 2', () => {
        const min = 100
        const max = 200
        const num = lib.random(min, max)
        assert.ok(num >= min)
        assert.ok(num <= max)
    })

    it('test random 3', () => {
        const min = 100
        const max = 2000
        const num = lib.random(min, max)
        assert.ok(num >= min)
        assert.ok(num <= max)
    })

    it('test mosaic', () => {
        const tel = 13001033940
        const str = lib.mosaic(tel, 3, 7)
        assert.equal(str, '130****3940')
    })

    it('test mosaicTel', () => {
        const tel = 13001033940
        const str = lib.mosaicTel(tel)
        assert.equal(str, '130****3940')
    })

    it('test mosaicPid', () => {
        const pid = 400500200010169000
        const str = lib.mosaicPid(pid)
        assert.equal(str, '400500********9000')
    })
})
