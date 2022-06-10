import { useEffect } from "react";
import me from "@components/pages/main/log";
import Layout from "../src/components/layout";
import Info from "@components/pages/main/info";
import Expriences from "@components/pages/main/experiences";
import PersonalInfo from "@components/pages/main/personalInfo";
import Skills from "@components/pages/main/skills";
import Head from "next/head";
import Socials from "@components/pages/main/socials";
export default function Home() {
  useEffect(() => {
    console.log("hello ,good to see you here !");
    console.table(me);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Amirhosein Farhoodi Portfolio</title>
      </Head>
      <div className="py-6 flex flex-col gap-y-6">
        <Info />
        <PersonalInfo />
        <Expriences />
        <Skills />
        <Socials />
      </div>
    </Layout>
  );
}
