"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { ptBR } from "date-fns/locale"

export function Calendar({ selected, onSelect }: { selected: Date | undefined; onSelect: (date: Date | undefined) => void }) {
  const [month, setMonth] = React.useState<Date>(selected || new Date())
  const [showYearSelect, setShowYearSelect] = React.useState(false)

  const handleYearSelect = (year: number) => {
    const newDate = new Date(month)
    newDate.setFullYear(year)
    setMonth(newDate)
    setShowYearSelect(false)
  }

  return (
    <div className="relative p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-2">
        <button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1))}>
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          className="cursor-pointer font-medium text-lg"
          onClick={() => setShowYearSelect(!showYearSelect)}
        >
          {month.toLocaleString("default", { month: "long" })} {month.getFullYear()}
        </div>

        <button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1))}>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {showYearSelect ? (
        <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
          {Array.from({ length: 110 }, (_, i) => 1920 + i).map((year) => (
            <div
              key={year}
              onClick={() => handleYearSelect(year)}
              className="p-2 text-center rounded hover:bg-gray-200 cursor-pointer"
            >
              {year}
            </div>
          ))}
        </div>
      ) : (
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={onSelect}
          month={month}
          onMonthChange={setMonth}
          locale={ptBR}
        />
      )}
    </div>
  )
}
