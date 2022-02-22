import PostTags from "../../components/PostTags"
import Skeleton from "../../components/Skeleton"
import Image from 'next/image'
import Head from 'next/head'

import { IPostFields } from "../../src/schema/generated/contentful";

import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"

const client = createClient({
	space: `${process.env.CONTENTFUL_SPACE_ID}`,
	accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
})

export default function Blog({ post }:any) {
	if (!post) return <Skeleton />

	const { content, slug, thumbnail, title } = post.fields
	const { tags } = post.metadata

	const { createdAt } = post.sys
    const date = new Date(createdAt).toLocaleString('default', { dateStyle: 'medium' })

	const renderOption = {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: (node:any, children:any) => {
				return (
					<div className="text-center">
						<Image 
							src={`https:${node.data.target.fields.file.url}`}
							height={node.data.target.fields.file.details.image.height}
							width={node.data.target.fields.file.details.image.width}
						/>
					</div>
				)
			},
		}
	}
	  
	return (
		<>
			<Head>
				<title>Cauexotico | { title }</title>
			</Head>

			<section className="mt-4 md:mt-8 max-w-screen-md mx-auto px-5">
				<div className="mb-8">
					<h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-900">{ title }</h2>
					<div className="flex justify-between flex-wrap gap-2 mt-2">
						<PostTags tags={tags} />
						<span className="text-gray-400 text-xs">{ date }</span>
					</div>
					<hr className="mt-8" />
				</div>
				<div className="prose-lg md:prose-xl">
					{documentToReactComponents(content, renderOption)}
				</div>
			</section>
		</>
  	)
}

export const getStaticPaths = async () => {
	const res = await client.getEntries<IPostFields>({ 
		content_type: 'post'
	})

	const paths = res.items.map(item => {
		return {
			params: { slug: item.fields.slug }
		}
	})

	return {
		paths,
		fallback: true
	}
}

export async function getStaticProps({ params }:any ) {
	const { items } = await client.getEntries({
		content_type: 'post',
		'fields.slug': params.slug
	})

	if (!items.length) {
		return {
			notFound: true
		}
	}

	return {
		props: { post: items[0] },
		revalidate: 60
	}
}