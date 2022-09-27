import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CloseButton, Content, Overlay } from './styles'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { createFriend } from '../../pages/api/manageFriends'
import toast, { Toaster } from 'react-hot-toast'

const newFriendFormSchema = z.object({
  name: z.string(),
})

type NewFriendFormInputs = z.infer<typeof newFriendFormSchema>

export function NewFriendModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewFriendFormInputs>({
    resolver: zodResolver(newFriendFormSchema),
    // defaultValues: {
    //   type: 'income',
    // },
  })

  async function handleCreateNewFriend({ name }: NewFriendFormInputs) {
    await createFriend(name)

    toast.success('Convidado adicionado com sucesso!')
    reset()
  }

  return (
    <Dialog.Portal>
      <Toaster />
      <Overlay />

      <Content>
        <Dialog.Title>Novo Convidado</Dialog.Title>
        <CloseButton>
          <AiOutlineClose size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewFriend)}>
          <input
            type="text"
            placeholder="Nome"
            required
            {...register('name')}
          />
          <button type="submit" disabled={isSubmitting}>
            Adicionar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
