import classNames from './navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={`${classNames.navbar} flex-center`}>
            <a className={`ff-secondary ${classNames.link}`} href="/">Home</a>
            <h1 className='ff-primary'>Nike - Store</h1>
            <a className={`ff-secondary ${classNames.link}`} href="/catalog">Catalog</a>
        </nav>
    )
}
