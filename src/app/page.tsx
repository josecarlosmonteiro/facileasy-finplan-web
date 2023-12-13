function currency(value: string | number) {
  return Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export default function Home() {
  return (
    <main>
      <div className="p-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7">
            <div className="flex justify-center items-center gap-4">
              <div className="w-full h-full p-4 py-2 rounded shadow-md shadow-gray-100">
                <div className="flex justify-between align-items text-emerald-500">
                  <h2>Receitas</h2>
                  <div>{currency(4200)}</div>
                </div>
              </div>
              <div className="w-full h-full p-4 rounded shadow-md shadow-gray-100">
                <div className="flex justify-between align-items text-blue-500">
                  <h2>Balanço</h2>
                  <div>{currency(3200)}</div>
                </div>
              </div>
              <div className="w-full h-full p-4 py-2 rounded shadow-md shadow-gray-100">
                <div className="flex justify-between align-items text-red-500">
                  <h2>Despesas</h2>
                  <div>{currency(3200)}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            salve...
          </div>
        </div>
      </div>
    </main>
  )
}
