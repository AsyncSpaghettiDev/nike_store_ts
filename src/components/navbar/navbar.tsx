import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../store/'
import Badge from 'react-bootstrap/Badge'
import classNames from './navbar.module.css'

export const Navbar = () => {
    const { user, cart } = useContext(StoreContext)
    return (
        <nav className={`${classNames.navbar} flex-center`}>
            <Link className={`ff-secondary ${classNames.link}`} to="/">Home</Link>
            <Link className={`ff-secondary ${classNames.link}`} to="/about">About</Link>
            <Link className={`ff-secondary ${classNames.link}`} to="/admin">Admin</Link>
            <h1 className='ff-primary'>Nike - Store</h1>
            <Link className={`ff-secondary ${classNames.link}`} to="/catalog">Catalog</Link>
            <Link className={`ff-secondary ${classNames.link}`} to="/wishlist">Wishlist</Link>

            <Link className={classNames.cart} to="/cart">
                <span className={`${classNames.link}`}>
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                </span>
                <Badge bg='danger'>{cart.length}</Badge>
            </Link>
            <p className={classNames.username}>{`Welcome back ${user.name}`}</p>
        </nav>
    )
}
