import React from 'react'
import { SkillImg, SkillItem, SkillName, SkillsContainer, SkillsGrid, SkillsTittle, SkillsWrapper } from './Skills.elements'
import { dataSkills } from '../../data/dataSkilss';

const Skills = () => {
    
  return (
    <SkillsContainer id='skills'>
        <SkillsWrapper>
            <SkillsTittle>Skills</SkillsTittle>
            <SkillsGrid>
                {dataSkills.map((item) => {
                    return (
                        <SkillItem key={item.id}>
                            <SkillImg src={item.image}/>
                            <SkillName>{item.tittle}</SkillName>
                        </SkillItem>
                    )
                } )}
            </SkillsGrid>
        </SkillsWrapper>
    </SkillsContainer>
  )
}

export default Skills