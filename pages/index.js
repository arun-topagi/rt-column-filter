import Head from "next/head";
import csvToJson from 'csvtojson';

// const
const csvFilePath = 'public/dataset_small.csv';

// components
import Home from '../src/container/Home'
export default function index({ data }) {
  return (
    <>
      <Head>
        <title>Column Filtration Assignment</title>
        <meta name="description" content="Column Filtration Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Home jsonData={data}/>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const json = await csvToJson().fromFile(csvFilePath);
  // Pass data to the page via props
  return { props: { data: json } }
}
