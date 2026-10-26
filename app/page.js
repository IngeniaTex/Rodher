import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home/About"
import Banner from "@/components/sections/home/Banner"
import Service from "@/components/sections/home/Service"
import Testimonial from "@/components/sections/home/Testimonial"
import Project from "@/components/sections/home/Project"
import ServiceCards from "@/components/sections/ServiceCards"
import Cta from "@/components/sections/Cta"

export const metadata = {
    alternates: { canonical: "/" },
}

export default function Home() {
    return (
        <Layout>
            <Banner />
            <Service />
            <About />
            <ServiceCards showTitle />
            <Testimonial />
            <Project />
            <Cta />
        </Layout>
    )
}
