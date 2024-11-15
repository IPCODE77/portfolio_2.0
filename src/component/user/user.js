import { Usercontainer,GradientTextWrapper, Title, SubTitle, UserBg, UserinnerContainer, UserLeftContainer, UserRightContainer, TextLoop, ResumeButton, Img } from "./userStyle"
import { Bio } from "../../data/constants"
import Typewriter from "typewriter-effect";
import itish from "../../image/itish.jpg"
import UserBgAnimation from "../UserBgAnimation/index"

export const User = () => {
    return (
        <div id="about">

            <Usercontainer>
                <UserBg>
                <UserBgAnimation></UserBgAnimation>
                </UserBg>
                <UserinnerContainer>
                    <UserLeftContainer>
                        <Title>
                            Hi , I am <br />
                            {Bio.name}
                        </Title>
                        <TextLoop>
                            I am a
                            <span>
                                <GradientTextWrapper>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </GradientTextWrapper>
                            </span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target="_blank">Check Resume</ResumeButton>
                    </UserLeftContainer>
                    <UserRightContainer>
                        <Img src={itish}></Img>
                        
                    </UserRightContainer>
                </UserinnerContainer>
            </Usercontainer>
        </div>
    )
}