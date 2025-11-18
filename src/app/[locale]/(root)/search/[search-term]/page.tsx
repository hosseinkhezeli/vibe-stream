import { PageProps } from "@/core/types/common.types";

type Props = PageProps<{ "search-term": string }>;

export default async function Search(props: Props) {
  const { params } = await props;

  return <>Search with Term: {params?.["search-term"]}</>;
}
