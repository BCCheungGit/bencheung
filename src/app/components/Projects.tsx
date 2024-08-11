

const Projects = () => {
    return (
    <>
    <section id="projects"></section>
    <section>
        <div className="flex flex-col w-full h-screen gap-10 pl-10 pr-10 pt-10 mt-20">
            <div className="flex flex-col w-full items-start justify-center md:gap-10 gap-2">
                <h1 className="sm:text-[30px] text-[20px] text-white uppercase border-b-2 w-full">Projects</h1>
                <p className="sm:text-[20px] text-[15px]">My most recent works</p>
            </div>


            <div className="flex flex-row gap-10 w-full h-full">
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-white"></div>
            </div>
        </div>
    </section>
    </>
    )
}


export default Projects;