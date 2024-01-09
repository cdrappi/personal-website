import React, { useEffect, useState } from 'react';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
    return (
        <h3 className="text-xl font-semibold text-blue-900 mb-2 overflow-x-auto whitespace-nowrap">
            {title}
        </h3>
    )
}

const CollapsibleSection: React.FC<{ title: React.ReactNode, children: React.ReactNode, openInitially: boolean }> = ({ title, children, openInitially }) => {
    const [isOpen, setIsOpen] = useState(openInitially);

    return (
        <div className="mb-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-left w-full text-l font-semibold pt-2 pb-1 overflow-x-auto whitespace-nowrap ${isOpen ? 'text-slate-800' : 'text-slate-500'}`}
            >
                {title}
                <span
                    className="mr-2 inline-block transform transition-transform duration-200 ease-in-out"
                    style={{
                        marginLeft: '10px',
                        display: 'inline-block',
                        transform: isOpen ? 'rotate(90deg)' : 'none'
                    }}>
                    &#9656;
                </span>
            </button>
            {isOpen && (
                <div className="ml-2" style={{ paddingBottom: "6px" }}>
                    {children}
                </div>
            )}
        </div>
    );
};

const WrappedContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="overflow-auto whitespace-normal">
            {children}
        </div>
    )
}

type Bullet = {
    text: React.ReactNode,
    subBullets?: string[],
}

const ExperienceSection: React.FC<{
    role: string,
    company: string | null,
    dates: string,
    bullets: Bullet[],
    openInitially?: boolean,
    includeCompanyComma?: boolean,
}> = ({
    role,
    company,
    dates,
    bullets,
    openInitially = true,
    includeCompanyComma = true,
}) => {
        return (
            <CollapsibleSection
                title={<>{role}{company && <>{includeCompanyComma ? "," : ""} <i>{company}</i></>}</>}
                openInitially={openInitially}
            >

                <WrappedContent>
                    <p className="text-slate-500 pb-1">{dates}</p>
                    <ul className="list-disc ml-5 text-slate-600">
                        {bullets.map((b, i) =>
                            <li key={i}>
                                {b.text}
                                {b.subBullets && <ul className="list-disc ml-5 text-slate-600">
                                    {b.subBullets.map((sb, j) => <li key={`${i}-${j}`}>{sb}</li>)}
                                </ul>}
                            </li>)
                        }
                    </ul>
                </WrappedContent>
            </CollapsibleSection>
        )
    }

export const LinkText: React.FC<{ url: string, text: string, title?: string }> = ({ url, text, title }) =>
    <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 dark:text-blue-500 hover:underline"
        title={title}
    >
        {text}
    </a>

const SkillsSection: React.FC<{ title: string, skills: string[], openInitially?: boolean }> = ({ title, skills, openInitially = false }) =>
    <CollapsibleSection title={title} openInitially={openInitially}>
        <WrappedContent>
            <ul className="list-disc ml-8 text-slate-600">
                {skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
        </WrappedContent>
    </CollapsibleSection>

const WorkExperience: React.FC = () => {
    return (
        <div id="work" className="mb-8">
            <SectionHeader title="Work Experience" />
            <ExperienceSection
                role="Software Engineer"
                company="Alameda Research"
                dates="May 2021 - Nov 2022"
                bullets={[
                    { text: "1st in LoC, commits, deploys & incident responses during tenure; 1 of 2 to handle on-call duties 24/7" },
                    {
                        text: "Larger projects",
                        subBullets: [
                            "revamped transfer system to send coins across any supported chain",
                            "automated usage of FTX's borrow/lend platform",
                            "built hotkey-based command palette that saved traders ~$10M in mistakes"
                        ]
                    },
                    {
                        text: "Some smaller projects",
                        subBullets: [
                            "about a dozen CEX & DEX integrations",
                            "many performance improvements Alameda's trading systems, including making colocated bots fault tolerant",
                            "built several kill switches & alerts that saved ~$15M",
                            "introduced parameters for traders to adjust models"
                        ]
                    },
                    { text: "Recruited 4 full-time employees across trading, dev & operations" },
                    { text: <><LinkText url="https://web.archive.org/web/20231202184500/https://slate.com/technology/2023/10/sam-bankman-fried-trial-recording-caroline-ellison-alameda.html" text="Testified" title="A thorough article of my testimony" /> at SBF's trial; only former employee to do so without immunity or guilty plea</> },
                ]}
            />
            <ExperienceSection
                role="Lead Developer"
                company="FTX OTC Portal"
                dates="Oct 2021 - Nov 2022"
                bullets={[
                    { text: "Sole developer for the majority of my time. Also handled tech support & customer relationships" },
                    { text: "The portal processed $50-200M in volume & made $50-200k PnL per day" },
                    { text: "Designed and implemented RFS & TWAP features" },
                    { text: "Hired & managed one direct report for final three months" },
                    { text: "In 2023, assisted S&C's bankruptcy team in determining claims for portal customers (pro bono)" }
                ]}
            />
            <ExperienceSection
                role="Software Engineering Consultant"
                company={null}
                dates="Apr 2019 - May 2021, Apr 2023 - now"
                bullets={[
                    { text: <>Leveraged vision-language neural networks to cluster & classify images for <LinkText url="https://creatoriq.com" text="CreatorIQ" /></> },
                    { text: <>Built <LinkText url="https://apps.apple.com/us/app/cr%C3%A9ateur/id1544016354" text="Createur" />, an iOS app to help influencers connect with their favorite brands</> },
                    { text: <>Developed food bank routing infrastructure for <LinkText url="https://x.company" text="X Development" /> (formerly Google X)</> },
                    { text: <>Ran data science & ML experiments for <LinkText url="https://brilliant.org" text="Brilliant" />, an online education company</> }
                ]}
            />
            <ExperienceSection
                role="Liquidity provider, cryptocurrency options"
                company="(self-employed)"
                includeCompanyComma={false}
                dates="Oct 2017 - Jul 2019"
                bullets={[
                    { text: "Semi-automated market-making & taking returned slightly over 1000% in 20 months" },
                    { text: "Built quoting engine, volatility surface models and tools to manage risk & monitor order flow" },
                    { text: "Ceased operations in anticipation of the platform closing to American residents" }
                ]}
                openInitially={false}
            />
            <ExperienceSection
                role="Staff Software Engineer"
                company="Tribe Dynamics"
                dates="Aug 2015 - Nov 2018"
                bullets={[
                    { text: "Mainly backend dev for both internal and client-facing products" },
                    { text: "Led small team in commits, LoC, deploys & PRs reviewed in final two years" },
                ]}
                openInitially={false}
            />
            <ExperienceSection
                role="Assistant Trader"
                company="Susquehanna International Group"
                dates="Aug 2014 - May 2015"
                bullets={[
                    { text: "Attended market maker trading class" },
                ]}
                openInitially={false}
            />
        </div>
    )
}

const CodeSample: React.FC<{ title: string, openInitially: boolean, children: React.ReactNode }> = ({ title, openInitially, children }) => {
    return (
        <CollapsibleSection title={title} openInitially={openInitially}>
            <WrappedContent>
                {children}
            </WrappedContent>
        </CollapsibleSection>

    )
}

const CodeSamples: React.FC = () => {
    return (
        <div id="code" className="mb-8">
            <SectionHeader title="Code Samples" />
            <CodeSample title="NFL PBP sims" openInitially={false}>
                A play-by-play NFL <LinkText text='simulator' url="https://github.com/cdrappi/nfl_sims" /> written in Rust. Uses Python for data modeling
            </CodeSample>
            <CodeSample title="Card game utilities" openInitially={false}>
                A C++ <LinkText text='library' url="https://github.com/cdrappi/card_utils" /> with Python bindings to manage game state for gin rummy & poker variants
            </CodeSample>
            <CodeSample title="This website" openInitially={false}>
                <LinkText text='Built' url="https://github.com/cdrappi/personal_website" /> with React & Tailwind CSS
            </CodeSample>
        </div>
    )
}

const TechnicalSkills: React.FC = () => {
    return (
        <div id="tech" className="mb-8">
            <SectionHeader title="Technical Skills" />
            <SkillsSection
                title="Languages"
                skills={[
                    "Python",
                    "Javascript/Typescript",
                    "Rust",
                    "Some C++, Swift, R and unfortunately PHP",
                ]}
                openInitially={true}
            />
            <SkillsSection
                title="Libraries"
                skills={[
                    "SQLAlchemy, Alembic, Django, Flask, Quart, Mypy",
                    "React / React Native, Vue.js, Express",
                    "Tokio, Rocket, Diesel",
                    "Laravel (PHP)"
                ]}
            />
            <SkillsSection
                title="DevOps"
                skills={[
                    "AWS, GCP",
                    "Docker",
                    "Terraform",
                ]}
            />
            <SkillsSection
                title="Modeling"
                skills={[
                    "PyData stack: numpy, scipy, pandas, scikit-learn",
                    "PyTorch, Tensorflow",
                    "Experience forecasting outcomes of NFL, MLB, PGA and MMA events"
                ]}
            />
        </div>
    )
}


const Resume: React.FC = () => {

    useEffect(() => {
        // This function will be called when the component mounts
        const navigateToHash = () => {
            // Extract the anchor part from the hash
            const hash = window.location.hash;
            const anchorId = hash.split('#').pop(); // Get the last part after '#'

            if (anchorId === undefined) {
                return;
            }
            // Scroll to the element with the corresponding ID
            const element = document.getElementById(anchorId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
            }
        };

        navigateToHash();

        // Optional: If you want to handle hash changes while on the same page
        window.addEventListener('hashchange', navigateToHash, false);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('hashchange', navigateToHash, false);
        };
    }, []);

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4m">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">Christian Drappi</h2>
            <WorkExperience />
            <TechnicalSkills />
            <CodeSamples />
        </div>
    );
}

export default Resume;
