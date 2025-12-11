"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SlidersHorizontal, Grid2X2, Grid3X3 } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const sizes = ["P", "M", "G", "GG", "38", "39", "40", "41", "42", "43", "44"]
const colors = ["Preto", "Branco", "Azul", "Bege", "Cinza", "Marrom"]

export function CategoryFilters() {
  const [gridCols, setGridCols] = useState<"2" | "3">("3")

  return (
    <div className="flex items-center justify-between gap-4 pb-4 border-b border-border">
      {/* Mobile Filter Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="lg:hidden gap-2 bg-transparent">
            <SlidersHorizontal className="h-4 w-4" />
            Filtros
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Filtros</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-6">
            {/* Sizes */}
            <div>
              <h3 className="font-semibold mb-3">Tamanho</h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <Button key={size} variant="outline" size="sm" className="h-9 bg-transparent">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-semibold mb-3">Cor</h3>
              <div className="space-y-2">
                {colors.map((color) => (
                  <div key={color} className="flex items-center gap-2">
                    <Checkbox id={color} />
                    <Label htmlFor={color} className="text-sm">
                      {color}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-semibold mb-3">Preço</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="price-1" />
                  <Label htmlFor="price-1" className="text-sm">
                    Até R$ 100
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="price-2" />
                  <Label htmlFor="price-2" className="text-sm">
                    R$ 100 - R$ 200
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="price-3" />
                  <Label htmlFor="price-3" className="text-sm">
                    R$ 200 - R$ 300
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="price-4" />
                  <Label htmlFor="price-4" className="text-sm">
                    Acima de R$ 300
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Filters */}
      <div className="hidden lg:flex items-center gap-4">
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Tamanho" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Cor" />
          </SelectTrigger>
          <SelectContent>
            {colors.map((color) => (
              <SelectItem key={color} value={color.toLowerCase()}>
                {color}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Faixa de Preço" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-100">Até R$ 100</SelectItem>
            <SelectItem value="100-200">R$ 100 - R$ 200</SelectItem>
            <SelectItem value="200-300">R$ 200 - R$ 300</SelectItem>
            <SelectItem value="300+">Acima de R$ 300</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <Select defaultValue="relevancia">
          <SelectTrigger className="w-[160px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevancia">Relevância</SelectItem>
            <SelectItem value="menor-preco">Menor Preço</SelectItem>
            <SelectItem value="maior-preco">Maior Preço</SelectItem>
            <SelectItem value="novidades">Novidades</SelectItem>
          </SelectContent>
        </Select>

        {/* Grid Toggle - Desktop Only */}
        <div className="hidden md:flex items-center gap-1">
          <Button
            variant={gridCols === "2" ? "secondary" : "ghost"}
            size="icon"
            onClick={() => setGridCols("2")}
            className="h-8 w-8"
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
          <Button
            variant={gridCols === "3" ? "secondary" : "ghost"}
            size="icon"
            onClick={() => setGridCols("3")}
            className="h-8 w-8"
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
