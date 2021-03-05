import { useParams } from "react-router-dom";
import add from "./Object/add.md";
import remove from "./Object/remove.md";
import find from "./Object/find.md";
import iterate from "./Object/iterate.md";
import sort from "./Object/sort.md";
import others from "./Object/others.md";
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
