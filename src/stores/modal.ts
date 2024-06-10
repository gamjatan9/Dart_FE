import { Alert } from '@/components';
import { GalleryInfo } from '@/pages/main/components';
import { ComponentProps } from 'react';
import { create } from 'zustand';

interface AlertState {
  alertValue: ModalProps;
  open: (form: Omit<ModalProps, 'open'>) => void;
  close: () => void;
}
type ModalProps = ComponentProps<typeof Alert>;

const defaultValue: ModalProps = {
  open: false,
  title: null,
};

export const alertStore = create<AlertState>((set, get) => ({
  alertValue: defaultValue,
  open: (form: Omit<ModalProps, 'open'>) =>
    set((state) => ({
      ...state,
      alertValue: {
        ...form,
        onClickButton: () => {
          form.onClickButton?.();
          get().close();
        },
        open: true,
      },
    })),
  close: () =>
    set((state) => ({
      ...state,
      alertValue: defaultValue,
    })),
}));

type GalleryInfoProps = ComponentProps<typeof GalleryInfo>;

export interface GalleryInfoState {
  galleryInfoValue: GalleryInfoProps;
  open: (galleryId: number) => void;
  close: () => void;
}

const galleryInfoDefaultValue: GalleryInfoProps = {
  galleryId: null,
  open: false,
};

export const galleryInfoStore = create<GalleryInfoState>((set) => ({
  galleryInfoValue: galleryInfoDefaultValue,
  open: (galleryId: number) =>
    set((state) => ({ ...state, galleryInfoValue: { open: true, galleryId } })),
  close: () => set((state) => ({ ...state, galleryInfoValue: galleryInfoDefaultValue })),
}));
