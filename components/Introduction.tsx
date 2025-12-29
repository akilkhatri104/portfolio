import Image from "next/image";
import { contact, resumeLink } from "@/app/data";
import { Button } from "./ui/button";
import { ExternalLinkIcon } from "lucide-react";

function Introduction() {
    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    return (
        <section id="introduction" className="flex flex-col-reverse md:flex-row border-2 border-accent-foreground rounded-2xl p-5 md:w-1/2 mt-4 bg-background mx-auto">
            <div className="md:w-2/3 mt-3 md:mt-0">
                <h1 className="text-3xl">
                    {greeting}
                </h1>
                <p className="text-xl">Hi, I am <strong>Akil Khatri</strong>, an aspiring Full-Stack Engineer, based in Gujarat, India, skilled in TypeScript/JavaScript, React.js, and Node.js, with a focus on building and deploying robust web applications. Experienced in modern development practices, including integrating Generative AI (Langchain, PineconeDB), utilizing cloud services (AWS S3, Vercel), and developing secure RESTful APIs and user authentication systems.
                </p>

                <Button asChild className="mt-3 mb-3">
                    <a href={resumeLink} target="_blank">
                        Resume <ExternalLinkIcon />
                    </a>
                </Button>

                <ul className="flex flex-wrap gap-4 mt-3">
                    {contact.map(contact =>
                        <li className="hover:scale-110 transition bg-accent-foreground p-2 rounded-full" key={contact.name}>
                            <a href={contact.url} target="_blank">
                                <Image src={contact.logo} width={25} height={25} alt={contact.name} />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            <div className="mx-auto md:ml-2 md:p-2">
                <Image
                    src={'/PFP.jpg'}
                    alt="Profile Image"
                    width={'250'}
                    height={'250'}
                    className="rounded-3xl"
                />
            </div>
        </section>
    )
}

export default Introduction