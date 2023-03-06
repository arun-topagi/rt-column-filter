import Head from "next/head";
import useSWR from "swr";

// mui
import { Container } from "@mui/material";

const fetcher = (url) => fetch(url).then((res) => res.json());

// components
import Home from "../src/container/Home";
export default function index() {
  const { data, error, isLoading } = useSWR("/api/staticdata", fetcher);
  return (
    <>
      <Head>
        <title>Column Filtration Assignment</title>
        <meta name="description" content="Column Filtration Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {(() => {
          if (error) {
            return <div>failed to load</div>;
          } else if (isLoading) {
            return <div>loading...</div>;
          } else {
            return <Home jsonData={data} />;
          }
        })()}
      </Container>
    </>
  );
}
