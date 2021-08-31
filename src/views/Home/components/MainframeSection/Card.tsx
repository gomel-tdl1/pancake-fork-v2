import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  ${({theme}) => theme.mediaQueries.nav}{
    width: 32%;
  }
  gap: 30px;
  .info{
    
  }
`
const TitleDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  ${({theme}) => theme.mediaQueries.nav}{
    padding: 50px 20px;
    padding-bottom: 0;
  }
  border-radius: 10px;
  background-color: rgba(8, 6, 11, 0.5);
  gap: 8px;
  text-align: center;
  width: 100%;
  ${({theme}) => theme.mediaQueries.nav}{
    min-height: 160px;
  }
  color: #98FBF6;
  font-weight: 400;
  .title{
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    word-spacing: 5px;
    letter-spacing: 2px;
  }
  .desc{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    width: 200px;
    word-spacing: 2px;
  }
`
const ButtonHome = styled(NavLink)`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
  border-radius: 20px;
  border: 2px solid #33D488;
  box-shadow: 0 0 10px 10px rgba(51, 212, 136, 0.25), inset 0 0 10px 10px rgba(51, 212, 136, 0.25);
  color: #98FBF6;
  font-size: 14px;
  letter-spacing: 1px;
  :hover{
    background-color: #33D488;
    color: #ffffff;
  }
`

type PropsType = {
    title: string,
    description: string,
    info: string,
    buttonText: string,
    href: string
}
const CardMainframe: React.FC<PropsType> = ({
                                                title,
                                                description,
                                                info,
                                                buttonText,
                                                href,
                                            }) => {

    return (
        <MainWrapper>
            <TitleDescriptionSection>
                <div className='title'>{title}</div>
                <div className='desc'>{description}</div>
            </TitleDescriptionSection>
            <div className='info'>{info}</div>
            <ButtonHome to={href}>{buttonText}</ButtonHome>
        </MainWrapper>
    )
}

export default CardMainframe
