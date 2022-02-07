import PostCard from '../../components/PostCard'

import { createClient } from 'contentful'
import { Key } from 'react'

const client = createClient({
	space: `${process.env.CONTENTFUL_SPACE_ID}`,
	accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
})

export default function Tag({ tag, posts = [] }:any) {
	
	return (
		<section className="mt-4 md:mt-8 max-w-screen-xl mx-auto px-5">

			<h2 className="text-2xl font-bold text-gray-700 tracking-tighter mb-4">Tag: { tag }</h2>

			<div className="flex flex-col gap-8 md:gap-8">
				{posts.map((post: { sys: { id: Key | null | undefined } }) => (
					<PostCard key={post.sys.id} post={post}/>
				))}
			</div>

		</section>
  	)
}

export const getStaticPaths = async () => {
	const res = await client.getTags()

	const paths = res.items.map(item => {
		return {
			params: { tag: item.sys.id }
		}
	})

	return {
		paths,
		fallback: true
	}
}

export async function getStaticProps({ params }:any) {

	const { items } = await client.getEntries({
		content_type: 'post',
		'metadata.tags.sys.id[in]': params.tag 
	})

	if (!items.length) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			tag: params.tag, 
			posts: items
		},
		revalidate: 60
	}
}
