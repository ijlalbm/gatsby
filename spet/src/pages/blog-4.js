import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import * as Icon from 'react-feather';
import { Link } from "gatsby"; 
import BlogSidebar from '../components/Blog/BlogSidebar';

import BlogImg9 from "../assets/images/blog-image/blog9.jpg";
import BlogImg10 from "../assets/images/blog-image/blog10.jpg";
import BlogImg11 from "../assets/images/blog-image/blog11.jpg";
import BlogImg12 from "../assets/images/blog-image/blog12.jpg";
import BlogImg13 from "../assets/images/blog-image/blog13.jpg";
import BlogImg14 from "../assets/images/blog-image/blog14.jpg";

const Blog4 = () => (
    <Layout>
        <SEO title="Blog" /> 

        <Navbar />

        <PageBanner pageTitle="Blog Right Sidebar" />

        <div className="blog-area ptb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-blog-post-box">
                                    <div className="entry-thumbnail">
                                        <Link to="/blog-details">
                                            <img src={BlogImg9} alt="image" />
                                        </Link>
                                    </div>

                                    <div className="entry-post-content">
                                        <div className="entry-meta">
                                            <ul>
                                                <li><Link to="/author">Admin</Link></li>
                                                <li>August 15, 2021</li>
                                            </ul>
                                        </div>

                                        <h3>
                                            <Link to="/blog-details">
                                                Making Peace With The Feast Or Famine Of Freelancing
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>

                                        <Link to="/blog-details" className="learn-more-btn">
                                            Read Story <Icon.Plus />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-blog-post-box">
                                    <div className="entry-thumbnail">
                                        <Link to="/blog-details">
                                            <img src={BlogImg10} alt="image" />
                                        </Link>
                                    </div>

                                    <div className="entry-post-content">
                                        <div className="entry-meta">
                                            <ul>
                                                <li><Link to="/author">Admin</Link></li>
                                                <li>August 18, 2021</li>
                                            </ul>
                                        </div>

                                        <h3>
                                            <Link to="/blog-details">
                                                I Used The Web For A Day On A 50 MB Budget
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                        
                                        <Link to="/blog-details" className="learn-more-btn">
                                            Read Story <Icon.Plus />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-blog-post-box">
                                    <div className="entry-thumbnail">
                                        <Link to="/blog-details">
                                            <img src={BlogImg11} alt="image" />
                                        </Link>
                                    </div>

                                    <div className="entry-post-content">
                                        <div className="entry-meta">
                                            <ul>
                                                <li><Link to="/author">Admin</Link></li>
                                                <li>August 15, 2021</li>
                                            </ul>
                                        </div>

                                        <h3>
                                            <Link to="/blog-details">
                                                Here are the 5 most telling signs of micromanagement
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                        
                                        <Link to="/blog-details" className="learn-more-btn">
                                            Read Story <Icon.Plus />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-blog-post-box">
                                    <div className="entry-thumbnail">
                                        <Link to="/blog-details">
                                            <img src={BlogImg12} alt="image" />
                                        </Link>
                                    </div>

                                    <div className="entry-post-content">
                                        <div className="entry-meta">
                                            <ul>
                                                <li><Link to="/author">Admin</Link></li>
                                                <li>August 15, 2021</li>
                                            </ul>
                                        </div>

                                        <h3>
                                            <Link to="/blog-details">
                                                The security risks of changing package owners
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                        
                                        <Link to="/blog-details" className="learn-more-btn">
                                            Read Story <Icon.Plus />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-blog-post-box">
                                    <div className="entry-thumbnail">
                                        <Link to="/blog-details">
                                            <img src={BlogImg13} alt="image" />
                                        </Link>
                                    </div>

                                    <div className="entry-post-content">
                                        <div className="entry-meta">
                                            <ul>
                                                <li><Link to="/author">Admin</Link></li>
                                                <li>August 18, 2021</li>
                                            </ul>
                                        </div>

                                        <h3>
                                            <Link to="/blog-details">
                                                Tips to Protecting Your Business and Family
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                        
                                        <Link to="/blog-details" className="learn-more-btn">
                                            Read Story <Icon.Plus />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-blog-post-box">
                                    <div className="entry-thumbnail">
                                        <Link to="/blog-details">
                                            <img src={BlogImg14} alt="image" />
                                        </Link>
                                    </div>

                                    <div className="entry-post-content">
                                        <div className="entry-meta">
                                            <ul>
                                                <li><Link to="/author">Admin</Link></li>
                                                <li>August 15, 2021</li>
                                            </ul>
                                        </div>

                                        <h3>
                                            <Link to="/blog-details">
                                                Protect Your Workplace from Cyber Attacks
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                        
                                        <Link to="/blog-details" className="learn-more-btn">
                                            Read Story <Icon.Plus />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Pagination */}
                            <div className="col-lg-12 col-md-12">
                                <div className="pagination-area">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item">
                                                <Link className="page-link" to="#">Prev</Link>
                                            </li>
                                            
                                            <li className="page-item active">
                                                <Link className="page-link" to="#">1</Link>
                                            </li>
                                            
                                            <li className="page-item">
                                                <Link className="page-link" to="#">2</Link>
                                            </li>
                                            
                                            <li className="page-item">
                                                <Link className="page-link" to="#">3</Link>
                                            </li>
                                            
                                            <li className="page-item">
                                                <Link className="page-link" to="#">Next</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </Layout>
)

export default Blog4;