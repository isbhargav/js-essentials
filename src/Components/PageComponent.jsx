import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

import chakraRenderer from "../utils/chakraRenderer";
import { Stack, Box } from "@chakra-ui/react";

export default function PageComponent({ fileName }) {
  const { page } = useParams();
  const [loading, setLoading] = useState(true);
  // console.log("You are on Page ", page);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(fileName)
      .then((data) => data.text())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [page, fileName]);
  if (loading) return "...Loading";
  return (
    <>
      <Box mt={50}></Box>
      <Stack verticalAlign marginX="20%">
        <ReactMarkdown escapeHtml={false} renderers={chakraRenderer()}>
          {data}
        </ReactMarkdown>
      </Stack>
    </>
  );
}
