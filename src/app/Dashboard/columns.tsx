'use client';


import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string | number
  endereço: string | number
  nome: "Caio" | "processing" | "success" | "failed"
  documento: number | string
  celular: number | string
  dataNasc: number | string
  idade: number | string
  numeroCardSus: number | string
}
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "documento",
    header: "Documento",
  },
  {
    accessorKey: "endereço",
    header: "Endereço",
  },
  {
    accessorKey: "celular",
    header: "Celular",
  },
  {
    accessorKey: "dataNasc",
    header: "Data de Nascimento",
  },
  {
    accessorKey: "idade",
    header: "Idade",
  },
  {
    accessorKey: "numeroCardSus",
    header: "N° do Cartão Sus",
  },

]

