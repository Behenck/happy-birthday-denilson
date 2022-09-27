import { Route, Routes } from 'react-router-dom'
import { BirthdayCard } from './pages/BirthdayCard'
import { ListFriendsPrivate } from './pages/ListFriendsPrivate'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<BirthdayCard />} />
      <Route path="/listFriendsPrivate" element={<ListFriendsPrivate />} />
    </Routes>
  )
}
