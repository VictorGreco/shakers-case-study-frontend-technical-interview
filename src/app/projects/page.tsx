import styles from "../page.module.css";
import { Suspense } from 'react';
import CustomLoader from "./_components/customLoader/customLoader";
import ProjectsList from "./_components/ProjectsList/ProjectsList";

export default async function ProjectsPage() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
            <Suspense fallback={<CustomLoader />}> 
              <ProjectsList />
            </Suspense>
      </main>
    </div>
  );
}
