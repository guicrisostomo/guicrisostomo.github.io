import Header from '../../components/Header';
import Presentation from '../../components/Presentation';
import Slide from 'react-reveal/Slide';

import {
  SectionAbout,
  TextAbout,
  TextInfoAbout
} from './Style';

export default function Home() {
  return (
    <>
      
      <Header />
      <Presentation />
      
      <SectionAbout>
        <Slide left>
          <TextAbout>
            Sobre mim
          </TextAbout>

          <TextInfoAbout>
            Sou estudante do 3 semestre de análise e desenvolvimento de sistemas pela FATEC de Ribeirão Preto. Tenho habilidades com HTML, CSS, JavaScript, Git, ReactJs, Styled Components. Apaixonado por aprender e enfrentar novos desafios, sempre busco me aperfeiçoar e sair da minha zona de conforto. Além disso, sempre dou toda minha energia nos desafios que surgem.
          </TextInfoAbout>
        </Slide>

        
      </SectionAbout>
      
    </>
  );
}