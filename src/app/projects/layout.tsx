'use client'

import Header from "./_components/Header/Header";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return( 
    <section>
        <Header />
        {children}
    </section>
    )
}