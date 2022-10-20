import { Coupons } from '../../components/coupons'
import { Products } from '../../components/products'
import classNames from './admin.module.css'

export const Admin = () => {
    return (
        <div className={`${classNames.admin_page}`}>
            <h1 className='text-center'>Admin</h1>
            <div className={`${classNames.wrapper}`}>
                <div className={`${classNames.container}`}>
                    <Products />
                </div>
                <div className={`${classNames.container}`}>
                    <Coupons />
                </div>
            </div>
        </div>
    )
}