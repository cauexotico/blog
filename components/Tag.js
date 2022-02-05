import Link from 'next/link'

function Tag({ tag }) {
    return (
        <Link href={ '/tags/' + tag } >
            <span className="cursor-pointer inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-500 rounded">{tag}</span>
        </Link>
    )
}

export default Tag