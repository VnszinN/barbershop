import { SearchIcon } from "lucide-react"
import Header from "./_components/_header/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import BarbershopCard from "./_components/_barbershopCard/barbershopCard"
import { quickSearchOptions } from "./_constants/searchOptions"
import BookingItems from "./_components/_bookingItems/bookingItems"

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
          {quickSearchOptions?.map((search) => (
            <Button
              key={search.label}
              variant="secondary"
              className="justify-center gap-2"
            >
              <Image
                src={search.imageUrl}
                width={15}
                height={15}
                alt={search.label}
              />
              {search.label}
            </Button>
          ))}
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="banner"
            src="/banner.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <BookingItems />
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
