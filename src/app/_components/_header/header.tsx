import { Card, CardContent } from "@/app/_components/ui/card"
import Image from "next/image"
import React from "react"
import { Button } from "../ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="VN BARBER" src="/logo.png" height={15} width={95} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
