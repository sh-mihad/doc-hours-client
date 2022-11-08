import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../assets/banner/hero-banner.jpg"

const Banner = () => {
    return (
        <div className="relative bg-accent-focus flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full ">
                                Doc-Hours-Healht Service
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                        Get ready for your
                            <br className="hidden md:block" />
                            Best health.{' '}

                        </h2>
                        <p className="text-base text-white md:text-lg">
                        There are many variations injected many alteration humour believableThere are many variations injected many alteration humour believable.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <Link
                           to="/register"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-accent transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-white hover:bg-accent-700 "
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                    src={banner}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Banner;