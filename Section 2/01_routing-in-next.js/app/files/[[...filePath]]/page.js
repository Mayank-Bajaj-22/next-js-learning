export default async function File({ params }) {
    const { filePath } = await params;
    console.log(filePath);
    return (
        <div>
            File <i>/{ filePath?.join("/") }</i>
        </div>
    )
}