import React from 'react'
import {
  SectionSkills,
  TextSkill,
  Items,
  ItemSkill,
  TextInfoSkill
} from './style.js'
import { SiReact, SiCss3, SiHtml5, SiJavascript, SiMicrosoftsqlserver, SiGit, SiFlutter } from "react-icons/si";
import Header from '../../components/Header';
import { useTranslation } from 'react-i18next';

export default function Skill() {
  const { t } = useTranslation()

  return (
    <>
      <Header />

      <SectionSkills style={{backgroundColor: '#100f0f'}}>
          <TextSkill>
            {t('skill.title')}
          </TextSkill>

          <Items>
            <ItemSkill href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/HTML%20e%20CSS" target='_blank'>
              <SiHtml5 style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px', boxShadow: 'white 0px 0px 50px'}}/>

              <TextInfoSkill>HTML5</TextInfoSkill>
            </ItemSkill>

            <ItemSkill href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/HTML%20e%20CSS" target='_blank'>
              <SiCss3 style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px', boxShadow: 'white 0px 0px 50px'}}/>
              
              <TextInfoSkill>CSS3</TextInfoSkill>
            </ItemSkill>

            <ItemSkill href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/JavaScript" target='_blank'>
              <SiJavascript style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px', boxShadow: 'white 0px 0px 50px'}}/>

              <TextInfoSkill>JAVASCRIPT</TextInfoSkill>
            </ItemSkill>

            <ItemSkill href="https://github.com/guicrisostomo/my-site" target='_blank'>
              <SiReact style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px', boxShadow: 'white 0px 0px 50px'}} />

              <TextInfoSkill>REACTJS</TextInfoSkill>
            </ItemSkill>

            <ItemSkill href="https://github.com/guicrisostomo/my-site" target='_blank'>
              <SiFlutter style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px', boxShadow: 'white 0px 0px 50px'}} />

              <TextInfoSkill>FLUTTER</TextInfoSkill>
            </ItemSkill>

            <ItemSkill styled={{cursor: 'none'}}>
              <SiMicrosoftsqlserver style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px', boxShadow: 'white 0px 0px 50px'}}/>

              <TextInfoSkill>SQL SERVER</TextInfoSkill>
            </ItemSkill>

            <ItemSkill href="https://github.com/guicrisostomo/" target='_blank'>
              <SiGit style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px', boxShadow: 'white 0px 0px 50px'}}/>

              <TextInfoSkill>GIT</TextInfoSkill>
            </ItemSkill>
          </Items>

      </SectionSkills>

    </>
  )
}
