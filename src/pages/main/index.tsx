import { ContentPortal } from '@/components';
import { CategoryModal, GalleryInfo } from '@/pages/main/components';
import { ButtonNLine, Filter, GalleryList } from './components';
import { Navigate } from 'react-router-dom';
import { useBaseModalStore, useGalleryInfoStore } from '@/stores/modal';

import * as S from './styles';

const MainPage = () => {
  const invited = JSON.parse(localStorage.getItem('invited') as string);

  const { closeModal: categoryCloseModal, open: categoryOpen } = useBaseModalStore();
  const {
    closeModal: galleryInfoCloseModal,
    open: galleryInfoOpen,
    modalProps,
  } = useGalleryInfoStore();
  if (!invited) return <Navigate to={'/intro'} />;
  return (
    <S.Container>
      <S.ContentBox>
        <Filter />
        <GalleryList />
      </S.ContentBox>
      <ButtonNLine />
      <ContentPortal
        component={GalleryInfo}
        closeModal={galleryInfoCloseModal}
        open={galleryInfoOpen}
        modalProps={modalProps}
      />
      <ContentPortal
        component={CategoryModal}
        closeModal={categoryCloseModal}
        open={categoryOpen}
      />
    </S.Container>
  );
};

export default MainPage;
