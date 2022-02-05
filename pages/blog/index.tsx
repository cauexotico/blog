import PostCard from '../../components/PostCard'

import { createClient } from 'contentful'

export default function Blog({ posts }) {
	return (
		<section className="mt-4 md:mt-8 max-w-screen-xl mx-auto px-5">

			<div className="flex flex-col gap-8 md:gap-8">
				{posts.map(post => (
					<PostCard key={post.sys.id} post={post}/>
				))}
			</div>

        </section>
  	)
}

export async function getStaticProps() {
	const client = createClient({
		space: `${process.env.CONTENTFUL_SPACE_ID}`,
		accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
	})

	const res = await client.getEntries({ content_type: 'post'})

	return {
		props: { posts: res.items },
		revalidate: 1
	}
}