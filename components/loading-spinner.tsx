export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500/30 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
