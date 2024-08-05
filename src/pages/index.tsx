import Layout from '../components/Layout'
import Introduction from '../components/introduction/Introduction'
import Skills from '../components/skills/Skills'
import Header from "@/components/header/Header";
import Projects from "@/components/project/Projects";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
    return (
        <div className="w-full h-full">
        <Layout>
            <Header />
            <Introduction/>
            <Skills/>
            <Projects />
            <ScrollProgress />
        </Layout>
        </div>
    )
}