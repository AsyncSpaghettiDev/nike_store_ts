import './navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar flex-center">
            <a className='ff-secondary link' href="/">Home</a>
            <h1 className='ff-primary'>Nike - Store</h1>
            <a className='ff-secondary link' href="/catalog">Catalog</a>
        </nav>
    )
}
