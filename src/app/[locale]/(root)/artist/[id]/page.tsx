import { PagePropsWithId } from "@/core/types/common.types";

type Props = PagePropsWithId;

export default async function Artist(props: Props) {
  const { id } = await props?.params;

  return <>Artist with ID: {id}</>;
}
