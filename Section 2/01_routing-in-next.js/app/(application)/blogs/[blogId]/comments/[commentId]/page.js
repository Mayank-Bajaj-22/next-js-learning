export default async function CommentsId({params}) {
    console.log(await params)
    const { blogId, commentId } = await params;
    console.log(commentId)
    return (
        <div>
            Comment No. <i>{ commentId }</i> on <b>{ blogId }</b>
        </div>
    )
}