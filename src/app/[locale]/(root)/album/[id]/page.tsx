import { PagePropsWithId } from "@/core/types/common.types";

type Props = PagePropsWithId;

export default async function Album(props: Props) {
  const { id } = await props?.params;

  return <>Album with ID: {id}</>;
}
