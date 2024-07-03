import { getGalleryInfo } from "@/apis/gallery";
import { CircleLoader, Dimmed, Icon, Text } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import * as S from './styles';
import useCustomNavigate from "@/hooks/useCustomNavigate";
import Logo from '@/assets/images/mainLogo.png';
import parseDate from "@/utils/parseDate";
import { alertStore } from "@/stores/modal";
import { useState } from "react";
import KakaoMap from "@/pages/main/components/kakaoMap";
import { starRate } from "@/pages/main/hooks/starRate";

const InfoPage = () => {
    const { galleryId } = useParams<{ galleryId: string }>();
    const customNavigate = useCustomNavigate();
    const openModal = alertStore((state) => state.open);
    const [openMap, setOpenMap] = useState(false);
    const hasEnded = false;

    const { data, isLoading } = useQuery({
        queryKey: ['detail'],
        queryFn: () => {
            if (galleryId) {
                return getGalleryInfo(parseInt(galleryId, 10));
            }
            throw new Error('galleryId is undefined');
        },
        enabled:!!galleryId,
    });

    const onHandlePay = (ticket: boolean, fee: number, isOpen: boolean) => {
        const showModal = (title: string, description: string, onClickButton: () => void) => {
          openModal({
            title,
            description,
            buttonLabel: '확인',
            onClickButton,
          });
        };
    
        if (!isOpen) {
          showModal(
            '입장 불가',
            '전시가 예정 및 종료 상태로 입장이 불가능합니다.',
            async () => close(),
          );
          return;
        }
    
        if (ticket || fee === 0) {
          customNavigate(`/gallery/${galleryId}`);
        } else {
          customNavigate(`/payment/${galleryId}/ticket`, { hasAuth: true });
        }
    };

    const onHandleRequest = () => {
        // 재전시 요청 api 완성시 구문 작성
        openModal({
          title: '재전시 요청',
          description: '서비스 준비 중입니다.',
          buttonLabel: '확인',
          onClickButton: () => close(),
        });
    };

    const onHandleMap = () => {
        setOpenMap(!openMap);
    };

    if (isLoading) return <CircleLoader />;

    return (
        <Dimmed>
            <S.Container>
            <S.InfoBox thumbnail={data.thumbnail}>
              <S.Overlay />
              <S.CancelIcon value="cancel" size={20} onClick={() => customNavigate('/')} color="white" />
              <S.MainLogo alt="main-logo" src={Logo} />
              <S.DescriptionBlock>
                <S.Top>
                  <Text typography="t5" color="white" bold="medium">
                    {data.title}
                  </Text>
                  <S.User
                    onClick={() => {
                      customNavigate(`/member/${data.nickname}`);
                    }}
                  >
                    <S.Circle />
                    <Text typography="t7" bold="regular" color="white">
                      {data.nickname}
                    </Text>
                  </S.User>
                </S.Top>
                <p id="descript">{data.content}</p>
                <Icon value="galaxy" size={20} />
                <Text typography="t7" bold="regular" color="white">
                  {parseDate(data.startDate)} <span>~</span>{' '}
                  {parseDate(data.endDate) === '1970.01.01' ? null : parseDate(data.endDate)}
                </Text>
                <S.HashTags>
                  {data.hashtags.map((tag: string, index: number) => (
                    <Text key={index} typography="t7" bold="regular" color="gray300">
                      {`#${tag}`}
                    </Text>
                  ))}
                </S.HashTags>
              </S.DescriptionBlock>
              <S.ButtonBlock>
                {hasEnded ? (
                  <div className="topay" onClick={() => onHandleRequest()}>
                    재전시 요청
                  </div>
                ) : (
                  <>
                    <div className="price">₩ {data.fee}</div>
                    <div
                      className="topay"
                      onClick={() => onHandlePay(data.hasTicket, data.fee, data.isOpen)}
                    >
                      입장하기
                    </div>
                  </>
                )}
              </S.ButtonBlock>
              {data.address && (
                <S.MapBlock onClick={onHandleMap}>
                  <Icon value='mapMarker' size={20} />
                  <Text typography='t8' bold='thin' color='gray300'>{data.address}</Text> 
                </S.MapBlock>
              )}
              {data.address && openMap && (
                <KakaoMap galleryAddress={data.address}/> 
              )}
            </S.InfoBox>
            <S.ReviewBox>
              <Text typography="t7" color="white" bold="thin">
                관람객 평점
              </Text>
              <S.ScoreBlock>
                <S.ScoreWrap>
                  <S.Score>
                    <Text color="white" bold="bold">
                      {data.reviewAverage}&nbsp;
                    </Text>
                    <Text color="white" bold="bold">
                      / 5
                    </Text>
                  </S.Score>
                  {starRate(data.reviewAverage)}
                </S.ScoreWrap>
                <Text
                  typography="t7"
                  color="gray300"
                  bold="thin"
                  onClick={() => {
                    customNavigate(`/review/${galleryId}`);
                  }}
                >
                  상세 리뷰 보기 &gt;
                </Text>
              </S.ScoreBlock>
            </S.ReviewBox>
        </S.Container>
        </Dimmed>
    )
}

export default InfoPage