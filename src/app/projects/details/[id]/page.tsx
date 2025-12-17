import styles from "../../../page.module.css"
import CustomLoader from "../../_components/customLoader/customLoader";
import { Suspense } from "react";
import ProjectDetails from "../../_components/ProjectDetails/ProjectDetails";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Suspense fallback={<CustomLoader />}>
          <ProjectDetails id={id} />
        </Suspense>
      </main>
    </div>
  );
}
