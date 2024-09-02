import {
  MdOutlineAlignHorizontalLeft,
  MdOutlineAlignHorizontalRight,
} from 'react-icons/md';
import * as S from './styles';
import dimensions from '@/styles/dimensions';
import colors from '@/styles/colors';

const TitleSection = () => {
  return (
    <S.Root>
      <MdOutlineAlignHorizontalRight
        color={colors.yellow}
        size={dimensions.px.size38}
      />
      <S.Title>Sobre mim</S.Title>
      <MdOutlineAlignHorizontalLeft
        color={colors.yellow}
        size={dimensions.px.size38}
      />
    </S.Root>
  );
};

export default TitleSection;
