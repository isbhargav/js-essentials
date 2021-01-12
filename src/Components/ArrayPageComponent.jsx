import { useParams } from "react-router-dom";
import add from "./Array/add.md";
import remove from "./Array/remove.md";
import find from "./Array/find.md";
import PageComponent from "./PageComponent";

export default function ArrayPageComponent() {
  const { page } = useParams();
  const fileNameMapper = {
    add,
    remove,
    find,
  };
  return <PageComponent fileName={fileNameMapper[page]} />;
}
