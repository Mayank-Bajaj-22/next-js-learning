import Link from "next/link";

export default async function Home({ searchParams, params }) {
  console.log(await searchParams)
  console.log(await params)
  return (
    <>
      <h1>
        Technical Agency
      </h1>

      <Link href="/services">
        Services
      </Link>
    </>
  );
}
