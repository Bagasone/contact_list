function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>
    </div>
  )
}

export default AppLayout
