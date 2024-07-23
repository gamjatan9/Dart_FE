import { Button, Dimmed, Text } from '@/components';

import * as S from './styles';

interface CheckModalProps {
  title: React.ReactNode;
  content?: React.ReactNode;
  close: () => void;
}

const CheckModal = ({ title, content, close }: CheckModalProps) => {
  return (
    <Dimmed style={{ zIndex: 9 }}>
      <S.Container>
        <Text color="white" typography="t3">
          {title}
        </Text>
        {content}
        <Button onClick={close}>닫기</Button>
      </S.Container>
    </Dimmed>
  );
};

export default CheckModal;
