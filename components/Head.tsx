import Head from "next/head";
import Script from "next/script";

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="jam:team" content="8e75eb9e-884a-4d6b-840f-4977d83e1415" />
        <meta
          name="description"
          content="Prince Patel is an avid full stack web developer building websites and applications you'd love to use"
        />
        <meta
          name="keywords"
          content="Prince Patel, nitin, ranganath, web developer portfolio, nitin web developer, nitin developer, mern stack, Prince Patel portfolio, vscode-portfolio"
        />
        <meta property="og:title" content="Prince Patel's Portfolio" />
        <meta
          property="og:description"
          content="A full-stack developer building websites that you'd like to use."
        />
        <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
        <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script src="https://js.jam.dev/recorder.js" strategy="afterInteractive" type="module" />
      <Script src="https://js.jam.dev/capture.js" strategy="afterInteractive" type="module" />
    </>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Prince Patel",
};
