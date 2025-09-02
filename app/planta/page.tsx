
export default function PlantaPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="my-8 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-medium px-4 sm:px-6 lg:px-8">
                Descubre dónde transformamos los residuos en oportunidades
            </h1>
            <p className="mb-10 text-base sm:text-xl lg:text-2xl px-4 sm:px-6 lg:px-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="rounded-lg flex items-center justify-center aspect-video mb-10 px-4 sm:px-6 lg:px-8">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg w-full h-full"
                ></iframe>
            </div>
        </main>
    );
}
