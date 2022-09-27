import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: 1px solid ${(props) => props.theme['blue-100']};
      color: ${(props) => props.theme['blue-100']};
      background: transparent;
      border-radius: 6px;
      padding: 0.5rem 1rem;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`

export const FriendsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    svg {
      cursor: pointer;
    }
  }
`
const Button = styled.button`
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['gray-800']};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ConfirmedButton = styled(Button)`
  background-color: ${(props) => props.theme['green-500']};
`
export const PendingButton = styled(Button)``
