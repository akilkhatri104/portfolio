import { education } from "@/app/data"

function Education() {
    return (
        <section id="education" className='flex flex-col border-2 border-accent-foreground rounded-2xl p-5 md:w-1/2 mt-4 bg-background mx-auto m-5'>
            <h1 className="text-2xl font-bold mb-3">Education</h1>

            {education.map(ed =>
                <div key={ed.course}>
                    <h2 className="font-semibold">{ed.course} | {ed.instituteName}</h2>
                    <p>{ed.time}</p>
                    <p>CGPA: {ed.cgpa}</p>
                </div>
            )}
        </section>
    )
}

export default Education