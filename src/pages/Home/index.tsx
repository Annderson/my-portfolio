import logo from '@/assets/img/header.png';
import home from '@/locales/home';

import PresentationSection from './components/PresentationSection';
import * as S from './styles';
import TitleSection from './components/TitleSection';

const Home = () => {
  return (
    <S.Root>
      <S.Header>
        <S.LogoImg alt="Logo" src={logo} />
        <S.Menu>
          <S.MenuItem>{home.initial.toUpperCase()}</S.MenuItem>
          <S.MenuItem>{home.project.toUpperCase()}</S.MenuItem>
          <S.MenuItem>{home.contact.toUpperCase()}</S.MenuItem>
        </S.Menu>
      </S.Header>
      <PresentationSection />
      <TitleSection />
    </S.Root>
  );
};

export default Home;
