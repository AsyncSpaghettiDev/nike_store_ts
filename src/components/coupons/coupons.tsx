import { useState, useEffect } from 'react'
import DataService from '../../services/dataService'
import { Coupon } from '../../types'

import classNames from './coupons.module.css'

const INITIAL_COUPON: Coupon = {
    code: '',
    discount: 5,
}

export const Coupons = () => {
    const [coupon, setCoupon] = useState<Coupon>(INITIAL_COUPON)
    const [coupons, setCoupons] = useState<Coupon[]>([])

    useEffect(() => {
        loadCoupons()
    }, [])

    const loadCoupons = () => new DataService().getCoupons().then(setCoupons)

    const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, valueAsNumber } = e.target

        const coupon_value = type === 'number' ? valueAsNumber : value.toUpperCase()
        setCoupon(prev => ({ ...prev, [name]: coupon_value }))
    }

    const saveCoupon = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        new DataService().saveCoupon(coupon)

        setCoupons(prev => [...prev, coupon])
        setCoupon(INITIAL_COUPON)
    }

    return <>
        <h2 className='text-center'>Discounts</h2>
        <form onSubmit={saveCoupon} autoComplete={'off'}>
            <div className={`${classNames.formGroup}`}>
                <label htmlFor="code">Code</label>
                <input value={coupon.code} type="text" name="code" id="code" onChange={handleCouponChange} />
            </div>
            <div className={`${classNames.formGroup}`}>
                <label htmlFor="discount">Discount</label>
                <input value={coupon.discount} type="number" step="0.05" min={1} name="discount" id="discount" onChange={handleCouponChange} />
            </div>
            <div className={`${classNames.formGroup}`}>
                <button className='btn-primary'>Create</button>
            </div>
        </form>
        <div className={`${classNames.coupons}`}>
            <h3>Coupons</h3>
            <ul style={{ listStyle: 'none' }}>
                {coupons.map((coupon, index) => (
                    <li key={index}>{coupon.code} - ${coupon.discount}</li>
                ))}
            </ul>
        </div>
    </>
}