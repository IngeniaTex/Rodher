'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Equipos de Bombeo">
        {/*Shop Page One Start*/}
        <section className="shop-page-one">
            <div className="container">
                <div className="row">

                    <div className="col-xl-8 col-lg-6 col-md-6">
                        <div className="shop-page-one-content">
                            {/*Start Shop items*/}
                            <div className="row">
                                <div className="col-xl-12">

                                </div>
                            </div>
                            {/*End Shop items*/}

                            <div className="row">

                                {/*Start single shop item*/}
                                <div className="col-xl-6">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">
                                            <img src="assets/images/shop/product-v1-1.jpg" alt="Image"/>
                                            <div className="rate-box">
                                                <h4>$20,000.00</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <h3><Link href="paneles-details">Panel Solar</Link></h3>
                                            </div>
                                            <div className="bottom-box">
                                                <ul className="rating-icon clearfix">
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}
                                {/*Start single shop item*/}
                                <div className="col-xl-6">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">
                                            <div className="discount">
                                                <h6>10% off</h6>
                                            </div>
                                            <img src="assets/images/shop/product-v1-2.jpg" alt="Image"/>
                                            <div className="rate-box">
                                                <h4>$40000.00 <del>$20000.00</del></h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <h3><Link href="paneles-details">Panele Solar 2</Link></h3>
                                            </div>
                                            <div className="bottom-box">
                                                <ul className="rating-icon clearfix">
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li className="color"><i className="fa fa fa-star"></i></li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}
                                {/*Start single shop item*/}
                                <div className="col-xl-6">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">
                                            <div className="new">
                                                <h6>new</h6>
                                            </div>
                                            <img src="assets/images/shop/product-v1-3.jpg" alt="Image"/>
                                            <div className="rate-box">
                                                <h4>$10,000.00</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <h3><Link href="paneles-details">Panel Solar 3</Link></h3>
                                            </div>
                                            <div className="bottom-box">
                                                <ul className="rating-icon clearfix">
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}

                                {/*Start single shop item*/}
                                <div className="col-xl-6">
                                    <div className="shop-page-one-single">
                                        <div className="img-box">
                                            <img src="assets/images/shop/product-v1-4.jpg" alt=" Image"/>
                                            <div className="rate-box">
                                                <h4>$5,000.00</h4>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <h3><Link href="paneles-details">Panel Solar 4</Link></h3>
                                            </div>
                                            <div className="bottom-box">
                                                <ul className="rating-icon clearfix">
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li><i className="fa fa fa-star"></i></li>
                                                    <li className="color"><i className="fa fa fa-star"></i></li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop item*/}

                            </div>
                        </div>
                    </div>

                    {/*Start Shop Page One*/}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="shop-page-one-sidebar">

                            {/*Start Single Sidebar Box*/}
                            <div className="shop-widget-single">
                                <div className="title">
                                    <h3>Categorías</h3>
                                    <div className="border-bx"></div>
                                </div>
                                <div className="shop-widget-single_category">
                                    <ul className="list-item clearfix">
                                        <li>
                                            <Link href="#">Paneles Solares</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Equipos de Bombeo</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*End Single Sidebar Box*/}

                        </div>
                    </div>
                    {/*End Shop Page One*/}

                </div>
            </div>
        </section>
        {/*Shop Page One End*/}
        </Layout>
        </>
    )
}