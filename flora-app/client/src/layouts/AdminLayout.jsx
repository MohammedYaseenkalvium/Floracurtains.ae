import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#F8F5F2]">

      <main>
        <Outlet />
      </main>

    </div>
  )
}