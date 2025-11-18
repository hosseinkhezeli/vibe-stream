import { PagePropsWithId } from "@/core/types/common.types";

type Props = PagePropsWithId;

export default async function Track(props: Props) {
  const { id } = await props?.params;

  return <>Track with ID: {id}</>;
}
