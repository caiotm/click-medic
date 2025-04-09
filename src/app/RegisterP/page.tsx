"use client";
import { ptBR } from "date-fns/locale"
import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
// import DemoPage from "./TabsDemo" // ou outro nome de arquivo onde o componente está



import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


import { Button } from "@/components/ui/button"
import "../Dashboard/globals.css"
import { Textarea } from "@/components/ui/textarea"
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  // TabsList,
  // TabsTrigger,
} from "@/components/ui/tabs"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  // CommandSeparator,
  // CommandShortcut,
} from "@/components/ui/command"



export default function TabsDemo() {

  const [date, setDate] = React.useState<Date>()

  return (
    <div className="flex">
      <div className="Cad">
        <Tabs defaultValue="account" className="w-[800px]">

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Cadastro do Paciente</CardTitle>
                <CardDescription>
                  Preencha todos os dados obrigatorios.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-nowrap">
                  <div className="space-y-1">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" defaultValue="Caio Gabriel" />
                  </div>



                  {/* calendario para cadastro de data de nascimento */}
                  <div className="Calender">
                    <label htmlFor="Data">Data de Nascimento</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon />
                          {date ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : <span>Selecione uma data</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar

                          selected={date}
                          onSelect={setDate}

                        />
                      </PopoverContent>
                    </Popover>


                  </div>
                  <div className="NumeroDoc">

                    <div className="space-y-1">
                      <Label htmlFor="numeroDoc">Numero do Documento</Label>
                      <Input id="username" defaultValue="012.310.343-60" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-nowrap">
                  <div className="space-y-1">
                    <Label htmlFor="numeroDoc">Idade</Label>
                    <Input id="username" defaultValue="23" />
                  </div>

                  <div className="Sex">
                    <Select>
                      <label htmlFor="Estado">Sexo</label>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecione o Genero" />
                      </SelectTrigger>
                      <SelectContent>

                        <SelectItem value="light">Masculino</SelectItem>
                        <SelectItem value="dark">Feminino</SelectItem>
                        <SelectItem value="system">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="NumeroTel">
                    <div className="space-y-1">
                      <Label htmlFor="numeroDoc">Numero de telefone</Label>
                      <Input id="username" defaultValue="(99) 98477-9719" />
                    </div>
                  </div>
                </div>
                <div className="CardEnder"></div>
                <Label>Endereço:</Label>
                <Card className="w-[750px]">
                  <div className="CardEnd">
                    <div className="flex flex-nowrap">
                      <div className="space-y-1">
                        <Label htmlFor="enderço">Bairro</Label>
                        <Input id="username" defaultValue="Loteamento Passos" />
                      </div>

                      <div className="Endereço">
                        <div className="space-y-1">
                          <Label htmlFor="enderço">Rua</Label>
                          <Input id="rua" defaultValue="Rua 1" />
                        </div>
                      </div>
                      <div className="Endereço">
                        <div className="space-y-1">
                          <Label htmlFor="enderço">N° da Casa</Label>
                          <Input id="rua" defaultValue=" 1" />
                        </div>
                      </div></div>
                    <div >
                      <div className="w-[400px]"> <label htmlFor="Relato">Complemento:</label>
                        <Textarea placeholder="Ex: Apartamento, Bloco, Quadra" />
                      </div>
                      <Select>
                        <label htmlFor="Estado">Cidade</label>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Cidade" />
                        </SelectTrigger>
                        <SelectContent>

                          <SelectItem value="light">Pedreiras</SelectItem>
                          <SelectItem value="dark">Trizidela</SelectItem>
                          <SelectItem value="system">Lima campos</SelectItem>
                        </SelectContent>
                      </Select>


                      <Select>
                        <label htmlFor="Estado">UF</label>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Estado" />
                        </SelectTrigger>
                        <SelectContent>

                          <SelectItem value="light">MA</SelectItem>
                          <SelectItem value="dark">PI</SelectItem>
                          <SelectItem value="system">RJ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>
              </CardContent>
              <CardFooter>
                <Button>Salvar Cadastro</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

      </div>


      {/* card da consulta de paciente */}
      <div>
        <Tabs >
          <Card className="CardConsult">
            <CardHeader>
              <CardTitle>Pacientes Cadastrados</CardTitle>
            </CardHeader>
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Sugestões">
                  <CommandItem>Caio</CommandItem>
                  <CommandItem>Alan</CommandItem>
                  <CommandItem>Tiago</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

          </Card>
        </Tabs>
      </div>

    </div>

  )
}
