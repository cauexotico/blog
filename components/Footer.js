function Footer() {
    return (
        <footer className="border-t border-gray-200 bottom-0 w-full tracking-tighter mt-8">
            <div className="max-w-screen-xl mx-auto flex flex-wrap flex-col md:flex-row gap-4 justify-between items-center p-4 md:p-8 md:px-5 text-gray-500">
                <p>Khauê Gil Poerner</p>
                <nav>
                    <ul className="flex flex-wrap flex-row justify-center gap-4 font-bold text-center">
                        <li><a target="_blank" rel="noopener" href="https://www.facebook.com/khauegil.poerner/">facebook</a></li>
                        <li><a target="_blank" rel="noopener" href="https://www.instagram.com/k_nadolny/">instagram</a></li>
                        <li><a target="_blank" rel="noopener" href="https://twitter.com/k_poerner">twitter</a></li>
                        <li><a target="_blank" rel="noopener" href="https://github.com/Fellds">github</a></li>
                        <li><a target="_blank" rel="noopener" href="mailto:khaue.po@hotmail.com">email</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer