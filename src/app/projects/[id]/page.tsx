import Image from "next/image";
import styles from "../../page.module.css";

export default async function ProjectDetail(props: {
    params: Promise<{
        id: string;
    }>
}) {
    const { id } = await props.params;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>This is the detail page for project: {id}</h1>
        </div>
      </main>
    </div>
  );
}
