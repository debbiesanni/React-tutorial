import { deleteServerData } from "@utils/index";

interface DeleteContentprops {
    id: string;
    centreId: string;
    courseId: string;
}

export async function deleteContent({
    id,
    centreId,
    courseId,
}: DeleteContentprops) {
    try {
        const { message } = await deleteServerData({
            url: `/centre/${centreId}/course/${courseId}/content/${id}`,
        });
        return message;
    } catch (err) {
        throw err;
    }
}
