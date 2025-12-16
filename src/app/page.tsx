import Image from "next/image";
import Link from 'next/link'

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
            <Image
            className={styles.logo}
            src="/shakers.svg"
            alt="Next.js logo"
            width={100}
            height={100}
            priority
          />
          <div><h1>
            Bienvenido a Shakers
          </h1>
          <p>
            Estas buscando nuevos retos?{" "}
            Revisa nuestros proyectos.
          </p></div>
        </div>
        <div className={styles.ctas}>
          <Link className={styles.primary} href="/projects">
            Proyectos 
          </Link>
        </div>
      </main>
    </div>
  );
}
