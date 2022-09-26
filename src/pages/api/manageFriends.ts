import { fauna } from '../../services/fauna'
import { query as q } from 'faunadb'

type Friend = {
  data: {
    ref: {
      id: string
    }
    data: {
      confirmation: boolean
    }
  }[]
}

export async function getFriend(id: string) {
  const { data } = await fauna.query<Friend>(
    q.Map(
      q.Paginate(q.Match(q.Index('friend_by_id'), id)),
      q.Lambda('planetRef', q.Get(q.Var('planetRef'))),
    ),
  )
  return data[0]
}

export async function setConfirmationFriend(id: string) {
  const { data } = await fauna.query<Friend>(
    q.Map(
      q.Paginate(q.Match(q.Index('friend_by_id'), id)),
      q.Lambda('planetRef', q.Get(q.Var('planetRef'))),
    ),
  )

  await fauna.query(
    q.Update(q.Ref(q.Collection('Friends'), data[0].ref.id), {
      data: {
        confirmation: !data[0].data.confirmation,
      },
    }),
  )

  return data[0]
}
