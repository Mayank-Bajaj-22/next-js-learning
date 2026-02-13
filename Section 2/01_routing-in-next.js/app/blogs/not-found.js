"use client"

import { usePathname } from "next/navigation"

export default function BlogNotFound() {
    const a = usePathname();
    console.log(a)
    return (
        <>
            <h1>Blog Page not found!</h1>
            <p>Could not found found the page you are looking for.</p>
        </>
    )
}

// dynamic pages me hi kaam karta hai yeh not found page