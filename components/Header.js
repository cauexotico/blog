import Link from 'next/link'
import { useRouter } from "next/router";

function Header() {

    const router = useRouter();

    return (
        <header className="max-w-screen-xl mx-auto flex w-full justify-between items-center p-5">
            <Link href="/">
                <a className="py-2">
                    <svg id="logo-15" width="42" height="42" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" className="ccustom" fill="#374151" stopColor="#374151"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" className="ccustom" fill="#374151" stopColor="#374151"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" className="ccustom" fill="#374151" stopColor="#374151"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" className="ccustom" fill="#374151" stopColor="#374151"></path> </svg>
                </a>
            </Link>
            <nav>
                <ul className="flex gap-4 font-bold">
                    <li><Link href="/"><a className={router.pathname == "/" ? "text-indigo-500" : ""}>home</a></Link></li>
                    <li><Link href="/sobre"><a className={router.pathname == "/sobre" ? "text-indigo-500" : ""}>sobre</a></Link></li>
                    <li><Link href="/posts"><a className={router.pathname == "/posts" ? "text-indigo-500" : ""}>posts</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header