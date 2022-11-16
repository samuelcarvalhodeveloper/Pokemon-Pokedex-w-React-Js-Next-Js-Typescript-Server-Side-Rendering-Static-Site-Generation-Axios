import Head from "next/head";
import Header from "../../components/Header/Header";
import Content404 from "../../components/Content404/Content404";

function Page404() {
  return (
    <>
      <Head>
        <title>Page 404: Not Found - Samuel Carvalho</title>
      </Head>
      <Header />
      <Content404 />
    </>
  );
}

export default Page404;
