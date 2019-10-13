import styled from 'styled-components'

export const MainHeading = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto Slab', sans-serif;
  @media (min-width: 480px) {
    font-size: 36px;
  }

  @media (min-width: 768px) {
    font-size: 42px;
  }

`

export const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto Slab', sans-serif;
  
  padding-bottom: 4px;
    
    border-bottom: 1px solid #000;
    
  @media (min-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 30px;
  }

`

export const Subheading = styled.h2`
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  @media (min-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }

`
export const Subject = styled.h4`
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: #777;
  @media (min-width: 480px) {s
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

`


export const Text = styled.p`
  margin-top: 0;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 992px) {
    font-size: 16px;
  }

`