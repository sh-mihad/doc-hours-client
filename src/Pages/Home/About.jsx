import React from 'react';
import { Link } from 'react-router-dom';
import about1 from "../../assets/about/about-2.jpg"
import about3 from "../../assets/about/about-dual.jpg"
import about2 from "../../assets/about/female-doc.jpg"

const About = () => {
    return (
        <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-20 lg:grid-cols-2 ">

                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src={about2}
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src={about3}
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src={about1}
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center md:pr-8 lg:w-4/5 text-center lg:text-left lg:mx-auto xl:pr-0 lg:max-w-lg">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs  tracking-wider text-accent-focus font-bold uppercase rounded-full ">
                            Doc-Hours-Healht Service
                        </p>
                    </div>
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            25 Years provide gesund
                            <br className="hidden md:block" />
                            Treatments care.{' '}

                        </h2>
                        <div className='flex gap-10 content-center'>
                            <div >
                                <li className="flex ">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    Many years of experience
                                </li>
                                <li className="flex ">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    24/7 care for mother and baby
                                </li>
                                <li className="flex ">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    Qualified team of professors
                                </li>
                            </div>
                            <div>
                            <li className="flex ">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    Neonatal intensive care
                                </li>
                                <li className="flex ">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    Operating and delivery room
                                </li>
                                <li className="flex ">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    Modern apparatus
                                </li>
                                <li className="flex ">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    A business big
                                </li>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="/"
                            href="/"
                            aria-label=""
                            className="btn btn-accent text-white"
                        >
                           Services
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;