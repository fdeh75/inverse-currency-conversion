import {Decimal} from 'decimal.js';

class Amount extends Number {
    constructor(val: number, readonly exVal?: Decimal) {
        super(val)
    }
}
class Result extends Number {
    constructor(val: number, readonly exVal?: Decimal) {
        super(val)
    }
}
class Rate extends Number {}


export const convert = (amount: Amount, rate: Rate): Result => {
    let [ a, r ] = [amount, rate].map(item => new Decimal(item.toString()))
    a = amount.exVal ?? a
    let res = a.mul(r)
    return new Result(+res.toFixed(2), res)
}

export const inverseConvert = (result: Result, rate: Rate): Amount => {
    let [ _res, r ] = [result, rate].map(item => new Decimal(item.toString()))
    _res = result.exVal ?? _res
    const amount = _res.dividedBy(r)
    return new Amount(+amount.toFixed(2), amount)
}
