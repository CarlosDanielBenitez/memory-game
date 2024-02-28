import React from 'react'

export const getImages = (size) => {

    const images = [
        "/docker.svg",
        "/bun.svg",
        "/deno.svg",
        "/github.svg",
        "/javascript.svg",
        "/redis.svg",
        "/supabase.svg",
        "/svelte.svg",
        "/vitejs.svg",
        "/vscode.svg",
    ]

    const newImages = images.slice(0, size)

    return newImages.flatMap(item => [`1|${item}`, `2|${item}`])
        .sort(() => Math.random() - 0.5)
}
