function Header(propsObj) {
    const changePage = (event) => {
        event.preventDefault();

        const link = event.target;
        const text = link.innerText;

        switch(text) {
            case 'About':
                propsObj.page = 'about';
            case 'Contact':
                propsObj.page = 'contact';
            default:
                propsObj.page = 'landing';
        }
    }


    return (
        <header className='row justify-between align-center'>
            <h3>Logo</h3>
            <nav>
                <a onClick={changePage} className={propsObj.page === 'landing' ? 'active' : ''} href='#'>Home</a>
                <a onClick={changePage} className={propsObj.page === 'about' ? 'active' : ''} href='#'>About</a>
                <a onClick={changePage} className={propsObj.page === 'contact' ? 'active' : ''} href='#'>Contact</a>
            </nav>
        </header>
    )
}

export default Header;