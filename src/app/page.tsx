import Link from "next/link";

function currency(value: string | number) {
  return Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export default function Home() {
  return (
    <main className="h-screen grid grid-cols-2 gap-4 items-center">
      <div className="h-full text-center p-4 bg-blue-800 text-white">
        <h1 className="text-3xl">[TITLE]</h1>
        <br />
        <h2 className="text-xl">[SUBTITLE]</h2>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatum vel totam, consectetur impedit minima earum dolore facilis. Deserunt blanditiis cum ducimus amet totam sequi, culpa ullam voluptatibus fugit. Non.
        </p>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, iusto voluptatem asperiores eius architecto adipisci quos est delectus cum consectetur voluptatum eos quia blanditiis et distinctio ullam nostrum at accusantium.
        </p>
      </div>

      <div className="h-full flex items-center justify-center">
        <div className="p-4 rounded shadow-md bg-gray-100">
          <Link href={'/inicio'} className="text-xl text-blue-400">Entrar na conta</Link>
        </div>
      </div>
    </main>
  )
}
