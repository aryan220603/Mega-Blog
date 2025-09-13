import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="footer-professional relative overflow-hidden py-12">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-6 flex items-center space-x-3">
                                <Logo width="50px" />
                                <span className="text-2xl font-bold text-white">MegaBlog</span>
                            </div>
                            <div>
                                <p className="text-sm text-neutral-400 mb-4">
                                    Your premier destination for professional blogging and content creation.
                                </p>
                                <p className="text-xs text-neutral-500">
                                    &copy; 2024 MegaBlog. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-neutral-400">
                                Platform
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" to="/">
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" to="/">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" to="/">
                                        Templates
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" to="/">
                                        Analytics
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-neutral-400">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" to="/">
                                        Help Center
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" to="/">
                                        Documentation
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" to="/">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" to="/">
                                        Community
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-neutral-400">
                                Legal
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" to="/">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" to="/">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" to="/">
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer