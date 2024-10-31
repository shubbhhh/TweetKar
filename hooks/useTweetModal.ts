import { create } from "zustand";

interface TweetModal {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

const useTweetModal = create<TweetModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useTweetModal;