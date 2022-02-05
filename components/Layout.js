import Header from "./Header"
import Footer from "./Footer"
import Head from 'next/head'

function Layout({ children, title = 'Cauexotico | Blog' }) {
    return (
        <div className="flex flex-col h-screen justify-between">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
			
                <title>Cauexotico | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

			<Header />

			<main className="mb-auto">
                { children }
            </main>

            <Footer />
        </div>
    )
}

export default Layout