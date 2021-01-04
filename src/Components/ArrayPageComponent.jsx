import { useParams } from "react-router-dom";
import add from "./Array/add.md";
import remove from "./Array/remove.md";
import PageComponent from "./PageComponent";

export default function ArrayPageComponent() {
  const { page } = useParams();
  const fileNameMapper = {
    add: add,
    remove: remove,
  };
  return <PageComponent fileName={fileNameMapper[page]} />;
}
