import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Cauexotico | Sobre</title>
			</Head>

			<section className="mt-16 md:mt-32 max-w-screen-xl mx-auto px-5">
				<h2 className="text-3xl md:text-5xl font-bold md:w-2/3 text-gray-800 tracking-tighter">Salve!</h2>
				<p className="text-xl md:w-2/3 text-gray-700 mt-4 md:mt-8">Desenvolvedor backend tentando escrever coisas que prestem.</p>

				<div className="flex flex-col md:flex-row mt-8 md:mt-16 gap-16">
					<div className="w-full md:w-1/2">
						<h3 className="text-2xl font-bold text-gray-800 tracking-tighter mb-4">Sobre mim</h3>

						<p className="mb-4">Desde pequeno sempre estive muito ligado a <strong>tecnologia</strong>, era o sobrinho que sabia tudo da internet, aparelhos eletrônicos e jogos online. Eu gostava mesmo disso e sabia que o meu caminho era por ali.</p>
						<p className="mb-4">Iniciei os estudos no mundo da tecnologia oficialmente no ano de <strong>2014</strong>, enquanto iniciava o ensino médio. De cara me envolvi com o mundo da <strong>programação</strong> e sigo <strong>evoluindo</strong> desde então.</p>
						<p>Desenvolvendo sistemas básicos como calculadoras e sistemas para biblioteca percebi que minha área era o <strong>backend</strong>, meu negócio não era lidar com formas e cores. A partir disso comecei a focar em outros ambientes cada vez mais difíceis e desafiadores, como a parte de <strong>infraestrutura e devops</strong>, que é meu foco de estudo atual. </p>
					</div>
					<div className="w-full md:w-1/2">
						<h3 className="text-2xl font-bold text-gray-800 tracking-tighter mb-4">Atualmente</h3>
						
						<p className="mb-4">Hoje sou um <strong>desenvolvedor pleno</strong> trabalhando com foco em <strong>sistemas web</strong>.</p>
						<p className="mb-4">Possuo conhecimentos em <strong>HTML e CSS, PostgreSQL e MySQL, PHP (Laravel e Wordpress),</strong> Infraestrutura em Nuvem <strong>(AWS)</strong> e diversas outras tecnologias como <strong>integrações de sistemas e e-commerce</strong>.</p>
						<p className="mb-4">Trabalho em uma <a className="underline" target="_blank" rel="noopener" href="https://girafacomunicacao.com.br">agência de comunicação</a>, onde consigo aplicar todo conhecimento nos mais variados projetos de <strong>grandes clientes</strong> da região. É nesse lugar também que consigo me aperfeiçoar cada vez mais com todos os <strong>desafios</strong> que aparecem diariamente.</p>
						<p>Faço alguns trabalhos também como <strong>freelancer</strong>, se precisar de algo é só entrar em contato!</p>
					</div>
				</div>
			</section>
		</>
  	)
}
