import Link from 'next/link';

const Header = () => {
    return (
        <header className="mx-auto flex max-w-screen-xl items-center px-2 py-2.5">
            <Link href={'/'} className="mr-auto text-2xl">
                <span className="text-gradient">Resumave</span>
            </Link>
        </header>
    );
};

export default Header;
