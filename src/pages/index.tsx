import Avatar from "@/components/avatar";
import Layout from "@/components/layout";
import Head from "next/head"; // Custom Head tags

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>My page title</title>
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          <Avatar />
        </div>
      </section>
    </Layout>
  );
};
export default Index;
