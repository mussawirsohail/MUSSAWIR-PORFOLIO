import Image from 'next/image'
import { Code, Coffee, Headphones } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image 
              src="/main.jpg?height=400&width=400" 
              alt="John Doe" 
              width={400} 
              height={400} 
              className="rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-4 hover:border-blue-500 dark:hover:border-blue-400" 
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
             Hello! I'm Mussawir Sohail Welcome to my portfolio! I'm a passionate FrontEnd web developer with a keen eye for design and functionality. I am pursuing an IT course of Generative AI, Web3 and Metaverse at Governor House Sindh. Where we are currently learning advanced technologies like Next JS. With a strong foundation in HTML, CSS, and TypeScript/Javascript, I enjoy creating beautiful, user-friendly websites. Over the past few months, I've worked on diverse projects, from building simple Calculator to static Student Management System. I specialize in responsive design, ensuring that every user has the best experience, no matter what device they're using.
            </p>
            <div className="flex justify-around text-center">
              <div>
                <Code className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400" />
                <p className="mt-2 text-gray-700 dark:text-gray-300">Clean Code</p>
              </div>
              <div>
                <Coffee className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400" />
                <p className="mt-2 text-gray-700 dark:text-gray-300">Coffee Lover</p>
              </div>
              <div>
                <Headphones className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400" />
                <p className="mt-2 text-gray-700 dark:text-gray-300">Music Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

