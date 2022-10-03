// add this block comment in the first line
// it must be a BLOCK comment!!!

/* eslint-disable */
import {
  Age,
  BirthdayCardContainer,
  CanceledButton,
  CodeComment,
  CodeContent,
  ConfirmButton,
  HappyBirthday,
  Let,
  Stars,
  VariavelText,
} from './styles'
import { AiFillStar } from 'react-icons/ai'
import { FaCrown } from 'react-icons/fa'
import birthday from '../../assets/birthday.png'
import { useEffect, useState } from 'react'
import { getFriendById, setConfirmationFriend } from '../api/manageFriends'
import toast, { Toaster } from 'react-hot-toast'

interface BirthdayCardProps {
  id: string
  name: string
  confirmation: boolean
}

export function BirthdayCard() {
  const [friend, setFriend] = useState<BirthdayCardProps>(
    {} as BirthdayCardProps,
  )

  useEffect(() => {
    getFriendById(window.location.search.split('?friendId=')[1]).then(
      ({ data }: any) => {
        setFriend(data)
      },
    )
  }, [])

  function handleChangeAttendanceConfirmation() {
    setConfirmationFriend(window.location.search.split('?friendId=')[1]).then(
      (data) => {
        setFriend((state) => ({
          ...state,
          confirmation: !data.data.confirmation,
        }))

        if (data.data.confirmation) {
          toast.error('Você desmarcou a presença! 😢')
        } else {
          toast.success('Esperamos você lá! 🎉')
        }
      },
    )
  }

  return (
    <BirthdayCardContainer>
      <Toaster />
      <Stars>
        <AiFillStar size={16} />
        <AiFillStar size={36} />
        <AiFillStar size={16} />
      </Stars>
      <FaCrown size={72} />
      <Age>
        <h1>
          22
          <span>y</span>
        </h1>
      </Age>
      <HappyBirthday>
        <img src={birthday} alt="" />
        <h1>Denilson, 22 anos</h1>
      </HappyBirthday>
      <p>
        Olá, <strong>{friend.name}</strong>
      </p>
      <p>Irei comemorar meu aniversário e espero que venha comemorar junto!</p>
      <CodeContent>
        <div>
          <p>
            var <VariavelText>data</VariavelText> = "30/09"
          </p>
          <CodeComment>// Agora sexta</CodeComment>
        </div>
        <div>
          <p>
            var <VariavelText>horario</VariavelText> = "19:30h"{' '}
          </p>
          <CodeComment>// Seja pontual</CodeComment>
        </div>
        <div>
          <p>
            var <VariavelText>endereco</VariavelText> = "Av. Setembrino de
            Carvalho, 2610"
          </p>
          <CodeComment>//Perto do Quartel 8º</CodeComment>
        </div>
        <div>
          <p>
            <Let>let</Let> <VariavelText>local</VariavelText> = "Berlin
            Pizzaria"
          </p>
          <CodeComment>// Vai ser rodízio de pizza</CodeComment>
        </div>
      </CodeContent>
      {friend.confirmation ? (
        <CanceledButton onClick={handleChangeAttendanceConfirmation}>
          CANCELAR PRESENÇA
        </CanceledButton>
      ) : (
        <ConfirmButton onClick={handleChangeAttendanceConfirmation}>
          CONFIRMAR PRESENÇA
        </ConfirmButton>
      )}
    </BirthdayCardContainer>
  )
}
