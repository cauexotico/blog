export default function Skeleton() {
    return (
        <section className="mt-4 md:mt-8 max-w-screen-md mx-auto px-5 animate-pulse">
                <div className="mb-8">
                    <h2 className="w-full bg-gray-300 h-10 rounded-md"></h2>
                    <div className="flex justify-between flex-wrap gap-2 mt-2">
                        <div className="w-24 bg-gray-300 h-6 rounded-md"></div>
                        <span className="w-16 bg-gray-300 h-6 rounded-md"></span>
                    </div>
                    <hr className="mt-8" />
                </div>
                <div className="prose-lg md:prose-xl">
                    <p className="w-full bg-gray-300 h-6 rounded-md"></p>
                    <p className="w-full bg-gray-300 h-6 rounded-md"></p>
                    <p className="w-80 bg-gray-300 h-6 rounded-md"></p>
                    <p className="w-full bg-gray-300 h-6 rounded-md"></p>
                    <p className="w-full bg-gray-300 h-6 rounded-md"></p>
                    <p className="w-28 bg-gray-300 h-6 rounded-md"></p>
                </div>
        </section>
    )
}