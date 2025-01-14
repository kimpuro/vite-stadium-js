import {create} from 'zustand'

const useStore = create((set) => ({
    isActive: false,
    toggleActive: () => set((state) => ({isActive: !state.isActive})),
}))

export default useStore