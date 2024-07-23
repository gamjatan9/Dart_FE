import { OmitClose } from '@/stores/modal';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ContentPortalProps<T> {
  open: boolean;
  component: React.ComponentType<T>;
  modalProps?: OmitClose<T>;
  closeModal: () => void;
}

const ContentPortal = <T,>({
  open,
  component: Component,
  modalProps,
  closeModal,
}: ContentPortalProps<T>) => {
  const $portal_root = document.getElementById('content-portal');
  useEffect(() => {
    return () => closeModal();
  }, [closeModal]);
  return (
    <>
      {$portal_root
        ? createPortal(
            <div>{open && <Component close={closeModal} {...(modalProps as T)} />}</div>,
            $portal_root,
          )
        : null}
    </>
  );
};

export default ContentPortal;
