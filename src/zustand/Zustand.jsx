import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create((set) => ({
  tasks: [],
  search: "",
  setSearch: (value) =>
    set((state) => {
      //   console.log(state);
      //   console.log(value);
      return { ...state, search: value };
    }),

  updateState: (value) =>
    set((state) => {
      // console.log(state, "from zustang");
      // console.log(value, "from zustang");
      return { ...state, tasks: [...state.tasks, value] };
    }),

  editState: (value) =>
    set((state) => {
      // console.log(value, "from zustang");
      return { ...state, tasks: [...value] };
    }),
}));

export default useStore;
