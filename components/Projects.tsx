import { projects } from "@/app/data"
import { ExternalLinkIcon, } from "lucide-react"


function Projects() {
    return (
        <section id="projects" className='flex flex-col border-2 border-accent-foreground rounded-2xl p-5 md:w-1/2 mt-4 bg-background mx-auto m-5'>
            <h1 className="text-2xl mb-3 font-bold">Projects</h1>

            {projects.map(project => (
                <>
                    <hr />
                    <div key={project.title} className="mt-2 text-lg mb-5">
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <div className="text-blue-500 flex gap-5 mt-2">
                            {project.links.github && <a className="flex hover:underline" target="_blank" href={project.links.github}>Code <ExternalLinkIcon className="ml-1" /></a>}
                            {project.links.live && <a className="flex hover:underline" target="_blank" href={project.links.live}>Visit <ExternalLinkIcon className="ml-1" /></a>}
                        </div>
                        <p className="mt-2">
                            {project.description}
                        </p>

                        <h2 className="mt-2 font-semibold">Key Highlights</h2>
                        <ul className="list-disc list-inside">
                            {project.highlights.map((point, i) =>
                                <li key={i}>
                                    {point}
                                </li>
                            )}
                        </ul>

                        <h2 className="mt-2 font-semibold">Tech Stack</h2>
                        <ul className="flex flex-wrap gap-3">
                            {project.techStack.map((tech, i) =>
                                <li key={i} className="bg-accent-foreground text-accent p-2 rounded-xl">
                                    {tech}
                                </li>
                            )}
                        </ul>
                    </div>
                </>
            ))}
        </section>
    )
}

export default Projects