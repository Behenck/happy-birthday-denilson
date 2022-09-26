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
import { getFriend, setConfirmationFriend } from '../api/manageFriends'
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
    getFriend(window.location.pathname.split('/')[1]).then(({ data }: any) => {
      setFriend(data)
    })
  }, [])

  function handleChangeAttendanceConfirmation() {
    setConfirmationFriend(window.location.pathname.split('/')[1]).then(
      (data) => {
        setFriend((state) => ({
          ...state,
          confirmation: !data.data.confirmation,
        }))

        if (data.data.confirmation) {
          toast.success('Esperamos você lá! 🎉')
        } else {
          toast.error('Você desmarcou a presença! 😢')
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
      <p>Irei comemorar meu aniverário e espero que venha comemorar junto!</p>

      <CodeContent>
        <div>
          <p>
            var <VariavelText>data</VariavelText> = "30/09"
          </p>
          <CodeComment>// Tem um coqueiro na frente!</CodeComment>
        </div>
        <div>
          <p>
            var <VariavelText>horario</VariavelText> = "20:00h"{' '}
          </p>
          <CodeComment>// Seja pontual</CodeComment>
        </div>
        <div>
          <p>
            var <VariavelText>endereco</VariavelText> = "Rua dos Bobos, 0"
          </p>
          <CodeComment>//Perto do Quartel 8º</CodeComment>
        </div>
        <div>
          <p>
            <Let>let</Let> <VariavelText>local</VariavelText> = "Berlin
            Pizzaria"
          </p>
          <CodeComment>// Tem um coqueiro na frente</CodeComment>
        </div>
      </CodeContent>

      {friend.confirmation ? (
        <ConfirmButton onClick={handleChangeAttendanceConfirmation}>
          CONFIRMAR PRESENÇA
        </ConfirmButton>
      ) : (
        <CanceledButton onClick={handleChangeAttendanceConfirmation}>
          CANCELAR PRESENÇA
        </CanceledButton>
      )}
    </BirthdayCardContainer>
  )
}
