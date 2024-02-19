import { create } from 'zustand';

const defaultValues = { id: '', title: '' };

interface IrenameModal {
   isOpen: boolean;
   initialValues: typeof defaultValues;
   onOpen: (id: string, title: string) => void;
   onClose: () => void;
}

export const useRenameModal = create<IrenameModal>((set) => ({
   isOpen: false,
   onOpen: (id, title) =>
      set({
         isOpen: false,
         initialValues: defaultValues,
      }),
   onClose: () =>
      set({
         isOpen: false,
         initialValues: defaultValues,
      }),
   initialValues: defaultValues,
}));
