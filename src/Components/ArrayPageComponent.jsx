import { useParams } from "react-router-dom";
import add from "./Array/add.md";
import remove from "./Array/remove.md";
import find from "./Array/find.md";
import iterate from "./Array/iterate.md";
import sort from "./Array/sort.md";
import others from "./Array/others.md";
import PageComponent from "./PageComponent";

export default function ArrayPageComponent() {
  const { page } = useParams();
  const fileNameMapper = {
    add,
    remove,
    find,
    iterate,
    sort,
    others,
  };
  return <PageComponent fileName={fileNameMapper[page]} />;
}
