import { Card, Grid, Typography } from "@mui/material";
import Head from "next/head";

// components
import Home from '../src/container/Home'
export default function index() {
  return (
    <>
      <Head>
        <title>Column Filtration Assignment</title>
        <meta name="description" content="Column Filtration Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Home />
      </main>
    </>
  );
}
