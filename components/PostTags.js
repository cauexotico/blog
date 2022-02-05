import Tag from "./Tag"

function PostTag({ tags }) {

    return (
        <div className="flex flex-row flex-wrap gap-2">
            {tags.map(tag => (
                <Tag key={tag.sys.id} tag={tag.sys.id}/>
            ))}
        </div>
    )
}

export default PostTag