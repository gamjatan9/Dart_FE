// import { useModalStore } from '@/stores/modal';
import { useFormContext, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import { ContentPortal } from '@/components';
import CouponModal from '../couponModal';

import * as S from './styles';

const DiscountBox = () => {
  // const { openModal, open } = useModalStore();
  const { setValue, control } = useFormContext();
  const title = useWatch({ control, name: 'title' });
  const hasTitle = useWatch({ control, name: 'title' }) ?? false;

  useEffect(() => {
    setValue('couponId', 0);
    setValue('isPriority', false);
  }, []);

  const couponCancel = () => {
    setValue('couponType', '');
    setValue('title', '');
    setValue('couponId', 0);
    setValue('isPriority', false);
  };

  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        할인 혜택
      </S.Title>
      <S.Box>
        <S.CouponBlock hasTitle={hasTitle}>
          {title ? title : '현재 적용한 쿠폰이 없습니다.'}
        </S.CouponBlock>
        <section>
          {/* <S.Button onClick={openModal} type="button">
            사용
          </S.Button> */}
          <S.Button onClick={couponCancel} type="button">
            취소
          </S.Button>
        </section>
      </S.Box>
      {/* <ContentPortal component={CouponModal} open={open} /> */}
    </S.Container>
  );
};

export default DiscountBox;
