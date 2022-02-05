import Link from 'next/link'

export default function NotFound() {
	return (
		<section className="mt-16 md:mt-32 max-w-screen-xl mx-auto px-5">
			<h2 className="text-5xl md:text-7xl font-bold md:w-2/3 text-gray-800 tracking-tighter">404.</h2>
			<p className="text-xl md:w-2/3 text-gray-700 mt-8 md:mt-16">
				Página não encontrada, retorne para a <Link href="/"><a className="font-bold">página inicial</a></Link>.
			</p>
		</section>
  	)
}
