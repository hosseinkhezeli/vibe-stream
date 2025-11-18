import { PagePropsWithId } from "@/core/types/common.types";

type Props = PagePropsWithId;

export default async function User(props: Props) {
  const { id } = await props?.params;

  return <>User with ID: {id}</>;
}
