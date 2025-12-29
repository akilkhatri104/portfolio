import { skills } from '@/app/data'
import Image from 'next/image'
import React from 'react'

function Skills() {
    const displaySkills = skills
    return (
        <section id='skills' className='flex flex-col border-2 border-accent-foreground rounded-2xl p-5 md:w-1/2 mt-4 bg-background mx-auto'>
            <h1 className='text-3xl mb-3'>Skills</h1>
            <ul className='flex flex-wrap'>
                {displaySkills.map(skill =>
                    <li key={skill.name} className='flex text-2xl font-semibold bg-accent-foreground text-accent mr-2 p-2 rounded-xl mb-2'>
                        <Image src={skill.logo} width={25} height={25} alt={skill.name} className='mr-2' /> {skill.name}
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Skills