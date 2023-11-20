import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* Logo */}
                        <div>
                            <Link legacyBehavior href="/">
                                <a className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                    <span className="font-bold">RVFD</span>
                                </a>
                            </Link>
                        </div>

                        {/* Primary Nav */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link legacyBehavior href="/about">
                                <a className="py-5 px-3 hover:text-gray-300">About</a>
                            </Link>
                                <a className="py-5 px-3 hover:text-gray-300">Services</a>
                            <Link legacyBehavior href="/contact">
                                <a className="py-5 px-3 hover:text-gray-300">Contact</a>
                            </Link>
                                <a className="py-5 px-3 hover:text-gray-300">Auxiliary</a>
                                <a className="py-5 px-3 hover:text-gray-300">Troop 14</a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
