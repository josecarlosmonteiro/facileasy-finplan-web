export function ReleasesBalance() {
  return (
    <div className="w-full h-3 flex items-center text-white text-[8px] bg-gray-50 rounded-full shadow">
      <div style={{ width: '100%' }} className="h-full bg-emerald-400 text-center rounded-r rounded-full">in%</div>
      <div style={{ width: '100%' }} className="h-full bg-red-400 text-center rounded-l rounded-full">out%</div>
    </div>
  )
}