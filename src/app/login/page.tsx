import { Button } from "@/components/ui/button"
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
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <div className="CardLoginR">
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">LOGIN</TabsTrigger>
        <TabsTrigger value="password">CADASTRO</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Usuario</Label>
              <Input id="name" defaultValue="ycaiogabriel@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Senha</Label>
              <Input id="username" type="password" defaultValue="1234" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>ENTRAR</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Cadastro</CardTitle>
            <CardDescription>
              Preencha todos os campos necessarios.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Nome de Usuario</Label>
              <Input id="current" placeholder="CaioTM" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Email</Label>
              <Input id="current" placeholder="Email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Senha</Label>
              <Input id="new" type="password" placeholder="123" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Cadastrar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}
