import connection from "../connection"

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string
) {
    await connection("to_do_list_tasks")
        .insert({
            id,
            title,
            description,
            deadline: limitDate,
            author_id: creatorUserId
        })
}