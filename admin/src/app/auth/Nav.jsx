import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Login from "./Login";
import LoggedIn from "./LoggedIn";
import productSearch from "../../utilities/productSearch";
import FlowBiteNav from "../../components/FlowBiteNav";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return <FlowBiteNav session={session} />;
}
