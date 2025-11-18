import { PagePropsWithId } from "@/core/types/common.types";

type Props = PagePropsWithId;

export default async function Playlist(props: Props) {
  const { id } = await props?.params;

  return <>Playlist with ID: {id}</>;
}
