

import styled from "styled-components"
import { ProjectCard } from "../card/projectCard";

import { projects } from "../../data/constants";




const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    margin-top:-15rem;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
         margin-top:-5rem;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
                padding: 0px 10px;
    }
`;


const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    
`;
export const Projects = () => {
    return (
        <Container id="projects">

            <Wrapper>
                <Title>Projects</Title>
                <Desc>Explore a collection of innovative projects I've worked on, showcasing my skills in software development, problem-solving, and design.
                </Desc>

                {/* <ToggleGroup>
                    <ToggleButton>ALL</ToggleButton>
                    <Divider></Divider>
                    <ToggleButton>WEB APPS</ToggleButton>
                    <Divider></Divider>
                </ToggleGroup> */}
                <CardContainer>

                    {projects.map((projects) => (
                        <ProjectCard projects={projects} />

                    ))}
                </CardContainer>

            </Wrapper>
        </Container>
    )
}