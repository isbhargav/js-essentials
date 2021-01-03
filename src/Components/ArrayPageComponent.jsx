import { useParams } from "react-router-dom";
import add from "./Array/add.md";
import PageComponent from "./PageComponent";

export default function ArrayPageComponent() {
  const { page } = useParams();
  const fileNameMapper = {
    add: add,
  };
  return <PageComponent fileName={fileNameMapper[page]} />;
}
