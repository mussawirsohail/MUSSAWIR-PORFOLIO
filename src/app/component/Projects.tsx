import Image from 'next/image'
import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
  {
    title: 'Calculator',
    image: '/calculator.png?height=300&width=400',
    description: 'A full-featured online store built with Next.js and Stripe',
    technologies: ['Next.js', 'React', 'Node.js', 'Stripe'],
    github: 'https://github.com/mussawirsohail/Caculator',
    live: 'https://example.com'
  },
  {
    title: 'Student Management System',
    image: '/student.jpeg?height=300&width=400',
    description: 'A React-based app for managing daily tasks and projects',
    technologies: ['React', 'Redux', 'Firebase'],
    github: 'https://github.com/mussawirsohail/Student-Management-system-application-',
    live: 'https://example.com'
  },
  {
    title: 'Number Guessing Game',
    image: '/guess.png?height=300&width=400',
    description: 'A mobile-friendly weather app using OpenWeatherMap API',
    technologies: ['React Native', 'Expo', 'API Integration'],
    github: 'https://github.com/mussawirsohail/Number-Guessing-Game',
    live: 'https://example.com'
  },
  {
    title: 'Automated Teller Machine',
    image: '/atm.jpg?height=300&width=400',
    description: 'A mobile-friendly weather app using OpenWeatherMap API',
    technologies: ['React Native', 'Expo', 'API Integration'],
    github: 'https://github.com/mussawirsohail/ATM-Project-',
    live: 'https://example.com'
  },
  {
    title: 'My Blogs',
    image: '/blog.avif?height=300&width=400',
    description: 'A mobile-friendly weather app using OpenWeatherMap API',
    technologies: ['React Native', 'Expo', 'API Integration'],
    github: 'https://github.com/mussawirsohail/Blogs-Milestone-3',
    live: 'https://example.com'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2 transition-colors duration-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300 hover:text-blue-800 dark:hover:text-blue-200">
                    <GitBranch className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300 hover:text-blue-800 dark:hover:text-blue-200">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

