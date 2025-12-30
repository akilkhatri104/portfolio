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
        <section id="introduction" className="flex flex-col-reverse md:flex-row border-2 border-accent-foreground rounded-2xl p-5 md:w-1/2 mt-4 bg-background mx-auto m-5">
            <div className="md:w-2/3 mt-3 md:mt-0 flex flex-col justify-between">
                <div>
                    <h1 className="text-xl font-thin">
                        {greeting}
                    </h1>
                    <h1 className="text-2xl font-bold">
                        Hi, I&apos;m Akil Khatri
                    </h1>
                    <p className="text-lg">
                        <strong>Full-Stack Engineer</strong> from <strong>India</strong> Building scalable, high-performance web applications with Next.js, React, and Node.js.Passionate about SaaS, cloud systems, and AI-powered products.
                    </p>
                </div>

                <Button asChild className="mt-3 w-fit mb-3" >
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