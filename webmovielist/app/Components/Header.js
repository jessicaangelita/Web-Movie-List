import Link from 'next/link'

export default function Header() {
    return (
        <header className=" body-font w-full">
            <div className="flex flex-wrap mx-auto p-8 flex-col md:flex-row items-center bg-green-800 ">
                <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
                <span className="ml-3 text-2xl font-extrabold text-orange-200">21Cineplex</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400flex flex-wrap items-center text-base justify-center font-medium">
                    <Link href='/' className="mr-5 text-orange-100 hover:text-orange-200">Movies</Link>
                </nav>
                <button className="inline-flex items-center bg-orange-200 border-0 py-2 px-4 focus:outline-none hover:bg-orange-300 rounded-lg text-base mt-4 md:mt-0 font-medium">Sign In
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button>
            </div>
        </header>
    )
}