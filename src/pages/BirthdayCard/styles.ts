import styled from 'styled-components'

export const BirthdayCardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  max-width: 30rem;

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`

export const Stars = styled.header`
  svg {
    color: ${(props) => props.theme['yellow-500']};
  }

  svg + svg {
    margin-left: 0.5rem;
  }
`

export const Age = styled.div`
  display: flex;
  gap: 0.125rem;
  align-items: flex-end;
  margin-top: -2rem;

  color: ${(props) => props.theme['yellow-500']};

  h1 {
    font-size: 8rem;
  }

  span {
    font-size: 2rem;
  }
`

export const HappyBirthday = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  h1 {
    color: ${(props) => props.theme['gray-100']};
  }
`

const Button = styled.button`
  margin-top: 2rem;
  border: 0;
  padding: 1rem 2rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-500']};
  font-size: 1.5rem;
  color: ${(props) => props.theme['gray-800']};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`

export const CodeContent = styled.div`
  display: flex;
  font-size: 0.75rem;
  gap: 1rem;
  width: 100%;
  border-radius: 6px;
  padding: 1rem;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-700']};

  div {
    display: flex;
    justify-content: space-between;
  }
`

export const VariavelText = styled.span`
  color: ${(props) => props.theme['green-200']};
`

export const CodeComment = styled.span`
  color: ${(props) => props.theme['gray-350']};
`

export const Let = styled.span`
  color: ${(props) => props.theme['blue-100']};
`

export const ConfirmButton = styled(Button)`
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-800']};
`

export const CanceledButton = styled(Button)`
  background-color: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['gray-800']};
`
