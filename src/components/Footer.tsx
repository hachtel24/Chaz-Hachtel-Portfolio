import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <h3 className="font-display font-bold text-2xl text-accent mb-2">
                            Chaz Hachtel
                        </h3>
                        <p className="text-gray-300 max-w-xs">
                            Fast creative that grows your business. Built in a sprint.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://www.linkedin.com/in/chaz-hachtel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-accent transition-colors"
                        >
                            <Linkedin size={24} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="mailto:charles.hachteliii@gmail.com"
                            className="text-gray-300 hover:text-accent transition-colors"
                        >
                            <Mail size={24} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Chaz Hachtel. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
