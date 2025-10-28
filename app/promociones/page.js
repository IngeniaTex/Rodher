import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/promociones/Banner"
import Cta from "@/components/sections/home1/Cta"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Promociones">
                <Banner />
            </Layout>

        </>
    )
}