import Head from "next/head";
import { GoogleSearchBox } from "../components/GoogleSearchBox";
import { Gmails } from "../components/Gmails";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>New Tab Page</title>
      </Head>
      <Box p={2}>
        <Box display="flex" justifyContent="flex-end" mb={15}>
          <Gmails />
        </Box>
        <GoogleSearchBox />
      </Box>
    </>
  );
}
