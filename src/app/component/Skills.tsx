import { Code, Database, GitBranch, Globe, Server, Terminal, Cloud, Box } from 'lucide-react'

const skills = [
  { name: 'TypeScript', icon: Code },
  { name: 'React', icon: Globe },
  { name: 'HTML', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'CSS', icon: Code },
  { name: 'Python', icon: Terminal },
  { name: 'SQL', icon: Database },
  { name: 'Next JS', icon: Code },
  { name: 'Git', icon: GitBranch },
  { name: 'CIT', icon: Cloud },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-full shadow-lg mb-4 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-xl">
                <skill.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-300" />
              </div>
              <span className="text-gray-800 dark:text-gray-200 font-semibold text-lg transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

