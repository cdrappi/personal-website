import React from 'react';
import { Link } from 'react-router-dom';
import { LinkText } from './Resume';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="text-center p-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Christian Drappi's Personal Website</h1>
            </header>

            <main className="flex-1 flex justify-center bg-gray-100">
                <div className="text-center">
                    <img src="/courtSketch.png" alt="My courtroom sketch" className="mx-auto mt-10 mb-5" style={{ width: '60%' }} />
                    <div className="mt-5 mb-10"> {/* Increased margin-top here */}
                        <p className="text-xl text-gray-600">[Under construction]</p>
                        <p className="text-lg text-gray-400 mt-2">
                            (not really sure what I'm going to put here besides a
                            <Link to="/resume" className="text-blue-500 underline ml-1">resume</Link>)
                        </p>
                    </div>
                </div>
            </main>

            <footer className="text-center py-4 bg-gray-200">
                <p className="text-sm text-gray-600"><LinkText url='https://github.com/cdrappi/personal-website' text="Built" title="The code for this website" /> with React & Tailwind CSS</p>
            </footer>
        </div>
    );
};

export default Home;
