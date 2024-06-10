import { galleryInfoStore } from '@/stores/modal';
import { createPortal } from 'react-dom';
import { GalleryInfo } from '@/pages/main/components';

const GalleryInfoPortal = () => {
  const { galleryInfoValue } = galleryInfoStore();
  const $portal_root = document.getElementById('gallery-info-portal');
  return (
    <>
      {$portal_root
        ? createPortal(
            <div>
              {galleryInfoValue.open && (
                <GalleryInfo
                  galleryId={galleryInfoValue.galleryId}
                  open={galleryInfoValue.open}
                />
              )}
            </div>,
            $portal_root,
          )
        : null}
    </>
  );
};

export default GalleryInfoPortal;
