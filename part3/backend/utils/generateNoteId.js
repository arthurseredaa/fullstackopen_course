export const generateNoteId = (notes) => {
    const currentMaxId = notes.length;

    return String(currentMaxId + 1)
}