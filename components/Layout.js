import Header from "./Header"
import Footer from "./Footer"
import Head from 'next/head'

function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen justify-between">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
			
                <title>Cauexotico | Blog</title>

                <link rel="icon" href="/favicon.ico" />

                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name="description" content="Tutoriais" />
                <meta name="keywords" content="Tutoriais, testes, pensamentos" />
                <meta property="og:title" content="Cauexotico | Blog" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Tutoriais" /> 
                <meta property="og:url" content="https://blog.khaue.com.br" />
                <meta property="og:image" content="https://blog.khaue.com.br" />
                <meta property="og:site_name" content="Blog Cauexotico" />
                <meta property="og:locale" content="pt_BR" />
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