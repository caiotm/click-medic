'use client'

import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

export default function DemoPage({ data }: { data: Payment[] }) {
  return (
    <div>
      <span className="titleCad">Pacientes Cadastrados</span>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px] rounded-md border">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}
