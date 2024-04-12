import { selectedUserState, userState } from "@/types";
import create from "zustand";

export const useUser = create<userState>((set) => ({
    myUser: undefined,
    setUser: (user) => set((state) => ({ ...state, myUser: user })),
}));

export const useAllUsers = create((set) => ({
    users: undefined,
    setUsers: (users: any) => set((state) => ({ ...state, users })),
}));

export const useSelectedUser = create<selectedUserState>((set) => ({
    selectedUser: undefined,
    setSelectedUser: (user) => set((state) => ({ ...state, selectedUser: user })),
}));

export const useMessages = create((set) => ({
    messages: undefined,
    setMessages: (messages: any) => set((state) => ({ ...state, messages })),
}));
