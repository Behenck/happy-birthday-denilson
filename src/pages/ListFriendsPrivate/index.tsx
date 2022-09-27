import { useEffect, useState } from 'react'
import { FaCopy } from 'react-icons/fa'
import { getFriends } from '../api/manageFriends'
import copy from 'copy-to-clipboard'
import {
  PendingButton,
  ConfirmedButton,
  Container,
  FriendsTable,
} from './styles'
import toast, { Toaster } from 'react-hot-toast'

interface Friend {
  id: string
  name: string
  confirmation: boolean
}

export function ListFriendsPrivate() {
  const [friends, setFriends] = useState<Friend[]>([])
  const [copyText, setCopyText] = useState('')

  useEffect(() => {
    getFriends().then((data: any) => {
      setFriends(data)
    })
  }, [])

  function handleCopyToClipboard(id: string) {
    setCopyText('https://happy-birthday-denilson.vercel.app/?friendId=' + id)
    copy(copyText)
    toast.success('Link Copiado!')
  }

  return (
    <Container>
      <Toaster />
      <header>
        <h1>Listar Amigos</h1>
        <button>Novo Convidado</button>
      </header>

      <FriendsTable>
        <tbody>
          {friends.map((friend: any) => {
            return (
              <tr key={friend[0]}>
                <td width="70%">{friend[1]}</td>
                <td>
                  {friend[2] === false ? (
                    <ConfirmedButton>Confirmado</ConfirmedButton>
                  ) : (
                    <PendingButton>Aguardando</PendingButton>
                  )}
                </td>
                <td>
                  <FaCopy onClick={() => handleCopyToClipboard(friend[0])} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </FriendsTable>
    </Container>
  )
}
