import PostTags from "./PostTags"
import Link from 'next/link'
import Image from 'next/image'

function Post({post}) {
    const { title, slug, thumbnail } = post.fields
    const { tags } = post.metadata

    const { createdAt } = post.sys
    const dateOptions = { dateStyle: 'medium' }
    const date = new Date(createdAt).toLocaleString('default', dateOptions)

    return (
        <article className="w-full max-w-screen-md cursor-pointer">
            <Link href={'/blog/' + slug }>
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-none">
                        <Image 
                            src={ 'https:' + thumbnail.fields.file.url }
                            width={ thumbnail.fields.file.details.image.width }
                            height={ thumbnail.fields.file.details.image.height }
                        />
                    </div>
                    <div>
                        <>
                            <h3 className="text-xl text-gray-700 font-bold">{ title }</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur fermentum velit, rutrum accumsan justo volutpat sit amet. Vivamus vitae viverra augue. Aliquam semper cursus felis, sed porttitor nulla imperdiet vitae.</p>
                        </>
                        <div className="flex flex-row justify-between mt-2 items-center">
                            <div className="flex flex-row flex-wrap gap-2 items-center">
                                <PostTags tags={tags} />
                                <span className="text-gray-400 text-xs">{ date }</span>
                            </div>
                            <span className="font-bold text-gray-500 cursor-pointer text-sm hover:text-indigo-500 ease-linear duration-75">compartilhar</span>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default Post