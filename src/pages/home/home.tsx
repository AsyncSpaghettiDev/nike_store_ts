import classNames from './home.module.css'

import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className={`${classNames.container}`}>
            <div className={`text-center ${classNames.hero}`}>
                <img className={`${classNames.img}`} src="/images/src/bg.webp" alt="nike online store" />
                <div className={`${classNames.description}`}>
                    <h1 className='ff-primary'>Nike</h1>
                    <p>The best sneakers in the world</p>

                    <Link to='/catalog' className={`btn-primary ${classNames.link}`}>Shop Now</Link>
                </div>
            </div>
        </div>
    )
}