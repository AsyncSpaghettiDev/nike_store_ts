import { Link } from 'react-router-dom'
import classNames from './navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={`${classNames.navbar} flex-center`}>
            <Link className={`ff-secondary ${classNames.link}`} to="/">Home</Link>
            <Link className={`ff-secondary ${classNames.link}`} to="/about">About</Link>
            <h1 className='ff-primary'>Nike - Store</h1>
            <Link className={`ff-secondary ${classNames.link}`} to="/catalog">Catalog</Link>
            <Link className={`ff-secondary ${classNames.link}`} to="/wishlist">Wishlist</Link>
        </nav>
    )
}
