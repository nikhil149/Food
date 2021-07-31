import classes from './Header.module.css';

const Header = () => {
    return (
        <header>
            <nav className={classes.nav}>
                <div className={classes.logo}>
                    <h1>TC_Nik</h1>
                </div>
                <div className={classes.right}>
                    <ul>
                        <li>Home</li>
                        <li>Player</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
