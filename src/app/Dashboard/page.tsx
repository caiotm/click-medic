
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "01",
      endereço: "travessa 7, casa 11",
      nome: "Caio",
      documento: "012.310.343.60",
      celular: "(99) 98477-9719",
      dataNasc: "01/08/2001",
      idade: "23",
      numeroCardSus: "123456789",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div>
      <text className="titleCad">Pacientes Cadastrados</text>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px] rounded-md border">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>

  )
}
