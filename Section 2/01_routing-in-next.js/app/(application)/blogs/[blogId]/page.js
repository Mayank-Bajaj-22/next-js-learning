import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { blogId } = await params;
    return {
        title: `Blog ${ blogId }`,
    };
}

export default async function Blog({ params }) {
    console.log(await params)
    const { blogId } = await params;

    if (!/^\d+$/.test(blogId)) {
        notFound();
    }
    return (
        <h1>Blog 1: { blogId }</h1>
    )
}