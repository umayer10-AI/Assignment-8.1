export const getPost = async () => {
    const res = await fetch("https://assignment-8-1.vercel.app/data.json")
    return res.json()
}