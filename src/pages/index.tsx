import AppHeader from "@/components/app_header";
import { JobList } from "@/components/job_list";
import Layout from "@/components/layout";

const Index = () => {
  return (
    <Layout>
      <section className="section">
        <AppHeader />
        {/* store select tags */}
        {/* Position filter */}
        {/* Ship type filter */}
        {/* feature type filter */}
        <JobList />
      </section>
    </Layout>
  );
};
export default Index;
