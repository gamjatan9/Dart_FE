import {
  costButtonInfo,
  displayButtonInfo,
  searchButtonInfo,
  sortButtonInfo,
} from '@/consts/filter';
import { useEffect } from 'react';
import { Icon, Text } from '@/components';
import { pageStore } from '@/stores/page';
import { filterStore } from '@/stores/filter';
import { ButtonBar, CostFilter, KeywordFilter } from '..';

import * as S from './styles';
import { useBaseModalStore } from '@/stores/modal';

const Filter = () => {
  const { filterValue, costArray, onChange, onNestingChange, onReset } = filterStore();
  const openModal = useBaseModalStore((state) => state.openModal);
  const resetPageInfo = pageStore((state) => state.resetPageInfo);

  useEffect(() => {
    resetPageInfo();
  }, [filterValue, costArray, resetPageInfo]);

  useEffect(() => {
    return () => onReset();
  }, [onReset]);
  return (
    <S.Container className="filter-container">
      <S.FilterBox>
        <S.TitleBox>
          <Text typography="t6" bold="bold">
            FILTER
          </Text>
          <Icon value="filter" $active={false} />
        </S.TitleBox>
        <KeywordFilter buttons={searchButtonInfo} />
        <CostFilter
          buttons={costButtonInfo}
          title="비용"
          selected={filterValue.cost}
          onChange={onNestingChange}
        />
        <ButtonBar
          buttons={displayButtonInfo}
          keyPorp="display"
          title="전시상태"
          selected={filterValue.display}
          onChange={onChange}
        />
        <ButtonBar
          buttons={sortButtonInfo}
          keyPorp="sort"
          title="정렬"
          selected={filterValue.sort}
          onChange={onChange}
        />
      </S.FilterBox>
      <S.filterIcon value="showFilter" size={25} onClick={() => openModal({})} />
    </S.Container>
  );
};

export default Filter;
