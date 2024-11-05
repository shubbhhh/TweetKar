import { create } from "zustand";

interface CommentModal {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

const useCommentModal = create<CommentModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useCommentModal;