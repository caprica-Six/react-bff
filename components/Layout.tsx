import React, {ReactNode} from 'react';
import Head from 'next/head';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'Backend For Frontend (BFF) - MicroService Architecture Design Pattetrn wtih React, Next.js',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="BFF with React, Next.js" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header>
      <div className="sr-only">Header</div>
    </header>

    <main role="main" className="min-h-screen">
      {children}
    </main>

    <div>
      <Footer />
    </div>
  </div>
);

export default Layout;
