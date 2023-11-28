import React, { useState } from 'react';

const CollapsibleSection = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-left w-full text-l font-semibold py-2 ${isOpen ? 'text-blue-600' : 'text-gray-600'}`}
            >
                <span className="mr-2 inline-block transform transition-transform duration-200 ease-in-out" style={{ display: 'inline-block', transform: isOpen ? 'rotate(90deg)' : 'none' }}>&#9656;</span>
                {title}
            </button>
            {isOpen && (
                <div className="ml-2">
                    {children}
                </div>
            )}
        </div>
    );
};


const Resume: React.FC = () => {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">My Resume</h2>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Work Experience</h3>
                <div className="mb-4">
                    <h4 className="font-bold text-gray-600">Senior Software Engineer</h4>
                    <p className="text-gray-500">Company XYZ, 2020 - Present</p>
                    <ul className="list-disc ml-5 text-gray-600">
                        <li>Lead developer in multiple high-profile projects.</li>
                        <li>Implemented innovative solutions that improved process efficiency by 30%.</li>
                        <li>Mentored junior team members and guided them on best practices.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-gray-600">Software Engineer</h4>
                    <p className="text-gray-500">Company ABC, 2017 - 2020</p>
                    <ul className="list-disc ml-5 text-gray-600">
                        <li>Developed and maintained various features in the company's main product.</li>
                        <li>Worked closely with the design team to implement user-friendly interfaces.</li>
                        <li>Collaborated in a team to meet tight deadlines and deliver high-quality software.</li>
                    </ul>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Technical Skills</h3>
                <CollapsibleSection title="Languages">
                    <ul className="list-disc ml-8 text-gray-600">
                        <li>JavaScript / TypeScript</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C#</li>
                    </ul>
                </CollapsibleSection>
                <CollapsibleSection title="Frameworks">
                    <ul className="list-disc ml-8 text-gray-600">
                        <li>React / Redux</li>
                        <li>Angular</li>
                        <li>Vue.js</li>
                        <li>Node.js</li>
                    </ul>
                </CollapsibleSection>
                <CollapsibleSection title="DevOps">
                    <ul className="list-disc ml-8 text-gray-600">
                        <li>Docker & Kubernetes</li>
                        <li>AWS / Azure</li>
                        <li>CI/CD Pipelines</li>
                        <li>Git & GitHub</li>
                    </ul>
                </CollapsibleSection>
                <CollapsibleSection title="Modeling">
                    <ul className="list-disc ml-8 text-gray-600">
                        <li>UML Diagrams</li>
                        <li>ERD Design</li>
                        <li>3D Modeling with Blender</li>
                        <li>AutoCAD</li>
                    </ul>
                </CollapsibleSection>
            </div>

        </div>
    );
}

export default Resume;
