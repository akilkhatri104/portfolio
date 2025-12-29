import { skills, skillTypes } from '@/app/data'
import Image from 'next/image'
import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function Skills() {
    const INITIAL_COUNT = 12
    const [showAll, setShowAll] = useState(false)

    const [skillType, setSkillType] = useState("All")

    const filteredSkills = skillType === 'All' ? skills : skills.filter(skill => skill.type === skillType)
    const visibleSkills = showAll
        ? filteredSkills
        : filteredSkills.slice(0, INITIAL_COUNT)
    return (
        <section id='skills' className='flex flex-col border-2 border-accent-foreground rounded-2xl p-5 md:w-1/2 mt-4 bg-background mx-auto m-5'>
            <h1 className='text-3xl mb-3'>Skills</h1>
            <Select value={skillType} onValueChange={val => {
                setShowAll(false)
                setSkillType(val)
            }}>
                <SelectTrigger className="w-45 mb-5">
                    <SelectValue placeholder="All Skills" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    {skillTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <ul className='flex flex-wrap gap-2 transition-all duration-300'>
                {visibleSkills.map(skill =>
                    <li key={skill.name} className='flex text-2xl font-semibold bg-accent-foreground text-accent mr-2 p-2 rounded-xl mb-2 h-12'>
                        <Image src={skill.logo} width={30} height={30} alt={skill.name} className='mr-2' /> {skill.name}
                    </li>
                )}
            </ul>
            {filteredSkills.length > INITIAL_COUNT && (
                <button
                    onClick={() => setShowAll(prev => !prev)}
                    className="mt-4 text-sm font-medium text-primary underline underline-offset-4"
                >
                    {showAll ? "Show less" : "Show more"}
                </button>
            )}

        </section>
    )
}

export default Skills