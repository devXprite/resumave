import Link from 'next/link';

const Header = () => {
    return (
        <header className="mx-auto flex max-w-screen-xl items-center px-2 py-2.5 2xl:max-w-screen-2xl">
            <Link href="/" className="flex items-center mr-auto text-2xl">
                <img 
                    src="/logoResumave.png" 
                    alt="logo" 
                    style={{height: 50, width: 70}} 
                    className="mr-2"
                />
                <span className="text-gradient">Resumave</span>
            </Link>
        </header>
    );
};

export default Header;