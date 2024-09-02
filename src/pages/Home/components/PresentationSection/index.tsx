import { TfiLinkedin } from 'react-icons/tfi';
import { VscGithub } from 'react-icons/vsc';
import profile from '@/assets/img/profile2.png';
import home from '@/locales/home';
import * as S from './styles';

const PresentationSection = () => {
  return (
    <S.HomeContainer>
      <div>
        <S.TextName>{home.name}</S.TextName>
        <S.TextProfessional>{home.devFront}</S.TextProfessional>
        <S.LinkIconContainer>
          <S.LinkIcon>
            <TfiLinkedin size={32} />
          </S.LinkIcon>
          <S.LinkIcon>
            <VscGithub size={32} />
          </S.LinkIcon>
        </S.LinkIconContainer>
      </div>
      <S.ProfileImg alt="Logo" src={profile} />
    </S.HomeContainer>
  );
};

export default PresentationSection;
