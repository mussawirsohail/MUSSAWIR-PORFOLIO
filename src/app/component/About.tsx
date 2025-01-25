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
              I'm a passionate full stack developer with 5 years of experience in creating web applications. 
              I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              My expertise spans across various technologies including React, Node.js, Python, and cloud platforms like AWS.
              I'm always eager to learn new technologies and improve my skills.
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

