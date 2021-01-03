import React from "react";
import { Box } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({ language, value }) => {
  return (
    <Box marginBottom={50}>
      <SyntaxHighlighter language={language} style={materialOceanic}>
        {value}
      </SyntaxHighlighter>
    </Box>
  );
};
