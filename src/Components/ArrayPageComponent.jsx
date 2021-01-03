import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import add from "./Array/add.md";
import chakraRenderer from "../utils/chakraRenderer";
import { Stack, Box } from "@chakra-ui/react";

export default function ArrayPageComponent() {
  const { page } = useParams();
  const [loading, setLoading] = useState(true);
  console.log("You are on Page ", page);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(add)
      .then((data) => data.text())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [page]);
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
