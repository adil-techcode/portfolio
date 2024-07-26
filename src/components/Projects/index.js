import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('web');
  return (
    <Container id="projects">
      <Wrapper>
      <Desc>
          Browse My Recent
        </Desc>
        <Title>Projects</Title>
        <ToggleButtonGroup >
          {toggle === 'blockchain' ?
            <ToggleButton active value="blockchain" onClick={() => setToggle('blockchain')}>Blockchain </ToggleButton>
            :
            <ToggleButton value="blockchain" onClick={() => setToggle('blockchain')}>Blockchain</ToggleButton>
          }
          <Divider />
          {toggle === 'web' ?
            <ToggleButton active value="web" onClick={() => setToggle('web')}>Web</ToggleButton>
            :
            <ToggleButton value="web" onClick={() => setToggle('web')}>Web</ToggleButton>
          }
          <Divider />
          <Divider />
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter((project) => toggle === 'all' || (Array.isArray(project.category) ? project.category.includes(toggle) : project.category === toggle))
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} key={project.id} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects