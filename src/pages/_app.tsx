import { ProjectLayout } from "@/components/layout/ProjectLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      {/* <div className="flex justify-center h-full w-screen bg-[url('https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687549204/scott-webb-UjupleczBOY-unsplash_gumsqq.jpg')]"> */}
      <ProjectLayout>
        <Component {...pageProps} />
      </ProjectLayout>
      {/* </div> */}
      {/* <div className="absolute inset-0 bg-brand-base/90 to-black mix-blend-multiply" /> */}
    </>
  );
}
