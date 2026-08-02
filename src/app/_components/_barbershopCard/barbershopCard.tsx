import React from "react"
import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { StarIcon } from "lucide-react"
interface BarbershopCardProps {
  barbershop: Barbershop
}
//captura componentes acessivel pelo servidor
const BarbershopCard = ({ barbershop }: BarbershopCardProps) => {
  return (
    <Card className="min-w-[159px] rounded-2xl">
      <CardContent className="p-0 px-2 pt-2">
        <div className="relative h-[159px] w-full p-4">
          <Image
            alt={barbershop.name}
            fill
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
          />
          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p>5,5</p>
          </Badge>
        </div>
        <div className="px-2 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant="secondary" className="mt-3 w-full">
            {" "}
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopCard
