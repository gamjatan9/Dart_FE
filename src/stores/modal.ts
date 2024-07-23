import { Alert } from '@/components';
import ChatModal from '@/pages/chatModal';
import { GalleryInfo } from '@/pages/main/components';
import { CheckModal } from '@/pages/signup/components';
import { GalleryImages } from '@/types/gallery';
import { ComponentProps } from 'react';
import { create } from 'zustand';

interface AlertModalState {
  alertValue: AlertModalProps;
  open: (form: Omit<AlertModalProps, 'open'>) => void;
  close: () => void;
}
type AlertModalProps = Omit<ComponentProps<typeof Alert>, 'close'>;

const defaultValue = {
  open: false,
  title: null,
};

export const alertStore = create<AlertModalState>((set, get) => ({
  alertValue: defaultValue,
  open: (form: Omit<AlertModalProps, 'open'>) =>
    set((state) => ({
      ...state,
      alertValue: {
        ...form,
        onClickButton: () => {
          form.onClickButton?.();
          get().close();
        },
        onClickCancelButton: () => {
          form.onClickCancelButton?.();
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

export type OmitClose<T> = Omit<T, 'close'>;

interface ModalState<T> {
  open: boolean;
  modalProps: OmitClose<T>;
  openModal: (props: T) => void;
  closeModal: () => void;
}

const modalStore = <T>() =>
  create<ModalState<T>>((set) => ({
    open: false,
    modalProps: {} as T,
    openModal: (props) => set({ open: true, modalProps: props }),
    closeModal: () => set({ open: false, modalProps: {} as T }),
  }));

type GalleryInfoModalProps = Omit<ComponentProps<typeof GalleryInfo>, 'close'>;
type ChatModalProps = Omit<ComponentProps<typeof ChatModal>, 'close'>;
type SignupCheckModalProps = Omit<ComponentProps<typeof CheckModal>, 'close'>;

export const useBaseModalStore = modalStore<object>();
export const useGalleryInfoStore = modalStore<GalleryInfoModalProps>();
export const useChatStore = modalStore<ChatModalProps>();
export const useSignupCheckStore = modalStore<SignupCheckModalProps>();

interface GalleryDetailState {
  galleryDetailValue: {
    open: boolean;
    gallery: GalleryImages | null;
  };
  open: (gallery: GalleryImages) => void;
  close: () => void;
}

const defaultGalleryDetailValue = {
  open: false,
  gallery: null,
};

// 작품설명 모달
export const galleryDetailStore = create<GalleryDetailState>((set) => ({
  galleryDetailValue: defaultGalleryDetailValue,
  open: (gallery: GalleryImages) =>
    set(() => ({
      galleryDetailValue: { open: true, gallery },
    })),
  close: () =>
    set(() => ({
      galleryDetailValue: defaultGalleryDetailValue,
    })),
}));

interface ProgressState {
  progressValue: number;
  setProgress: (progress: number) => void;
}

export const progressStore = create<ProgressState>((set) => ({
  progressValue: 0,
  setProgress: (progress: number) => set({ progressValue: progress }),
}));
