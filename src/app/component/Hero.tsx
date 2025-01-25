import Image from 'next/image'
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50 dark:opacity-30"
        />
      </div> */}
      <div className="z-10 text-center space-y-8 px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
          Mussawir Sohail 
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
          Full Stack Developer
        </p>
        <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Crafting elegant solutions to complex problems with code and creativity
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Get in Touch
          </a>
          <a href="#projects" className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-full transition duration-300">
            View Projects
          </a>
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/mussawirsohail" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <GitHub className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/mussawir-sohail-7602b6262/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  )
}

