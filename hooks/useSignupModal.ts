import { create } from "zustand";

interface SignupModal {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

const useSignupModal = create<SignupModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useSignupModal;