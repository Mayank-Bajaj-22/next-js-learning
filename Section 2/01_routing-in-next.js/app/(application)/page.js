import Link from "next/link";
import ComponentPage from "../_components/page";

export default async function Home({ searchParams, params }) {
  console.log(await searchParams)
  console.log(await params)
  return (
    <>
      <h1>
        Technical Agency
      </h1>

      <ComponentPage />

      <p>
        <Link href="/services">
          Services
        </Link>
      </p>

      <p>
        <Link href="/blogs">
          Blogs
        </Link>
      </p>

      <p>
        <Link href="/files">
          Files
        </Link>
      </p>
    </>
  );
}
