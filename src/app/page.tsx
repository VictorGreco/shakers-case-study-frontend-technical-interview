import Image from "next/image";
import Link from 'next/link'

import styles from "./page.module.css";
import { Suspense } from "react";
import CustomLoader from "./projects/_components/customLoader/customLoader";
import ProjectsList from "./projects/_components/ProjectsList/ProjectsList";

export default function Home() {
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
