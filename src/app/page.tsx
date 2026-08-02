import { SearchIcon } from "lucide-react"
import Header from "./_components/_header/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import BarbershopCard from "./_components/_barbershopCard/barbershopCard"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá</h2>
        <p>Sabado, 1 de agosto</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca... " />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="mt-4 flex justify-center gap-3 overflow-x-scroll [&::webkit-scrollbar]:hidden">
          <Button variant="secondary" className="justify-center gap-2">
            <Image src="/cabelo.svg" width={15} height={15} alt="cabelo" />
            Cabelo
          </Button>
          <Button variant="secondary" className="justify-center gap-2">
            <Image src="/barba.svg" width={15} height={15} alt="barba" />
            Barba
          </Button>
          <Button variant="secondary" className="justify-center gap-2">
            <Image
              src="/acabamento.svg"
              width={15}
              height={15}
              alt="acabamento"
            />
            Acabamento
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="banner"
            src="/banner.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit bg-purple-500">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barnearia do vn</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">02</p>
              <p className="text-sm">12:00</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::webkit-scrollbar]:hidden">
          {barbershops?.map((barbershop) => (
            <BarbershopCard key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::webkit-scrollbar]:hidden">
          {popularBarbershops?.map((barbershop) => (
            <BarbershopCard key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="rounded-none px-5 py-6">
            <p className="text-sm text-gray-400">
              © Copyright <span className="font-semibold">VN BARBER</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}
