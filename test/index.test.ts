import * as assert from 'node:assert';
import { convert, inverseConvert } from '../src';
import { describe, test } from 'node:test';
import {Decimal} from 'decimal.js';


describe('main', () => {
    test('direct', () => {
        for (let value = new Decimal(0.01); value.lessThan(2); value = value.plus(0.1) ){
            for (let rate = new Decimal(0.00001); rate.lessThan(2); rate = rate.plus(0.00001)){
                const [_value, _rate] = [value, rate].map(item => +item)
                assert.equal(_value, inverseConvert(convert(_value, _rate), _rate), `rate: ${rate}, value: ${value}, convert: ${convert(_value, _rate)}`)
            }
        }
    })
    test('reverse', () => {
        for (let value = new Decimal(0.01); value.lessThan(2); value = value.plus(0.1) ){
            for (let rate = new Decimal(0.00001); rate.lessThan(2); rate = rate.plus(0.00001)){
                const [_value, _rate] = [value, rate].map(item => +item)
                assert.equal(_value, convert(inverseConvert(_value, _rate), _rate), `rate: ${rate}, value: ${value}, inverseConvert: ${inverseConvert(_value, _rate)}`)
            }
        }
    })
})