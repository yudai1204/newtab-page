import Head from "next/head";
import { GoogleSearchBox } from "../components/GoogleSearchBox";
import { Gmails } from "../components/Gmails";
import { GoogleMenu } from "../components/GoogleMenu";
import { Bookmarks } from "../components/Bookmarks";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>New Tab Page</title>
      </Head>
      <Box p={2}>
        <Box display="flex" justifyContent="flex-end">
          <Gmails />
          <GoogleMenu />
        </Box>
        <Box width="100%" textAlign="center">
          <a href="https://www.google.com">
            <img src="./google.png" alt="Google" style={{ width: 200 }} />
          </a>
          <GoogleSearchBox />
        </Box>
        <Box mt={4}>
          <Bookmarks />
        </Box>
      </Box>
    </>
  );
}
