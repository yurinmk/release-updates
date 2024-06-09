import React from 'react'

import { Minus, X } from 'lucide-react'

export function Header() {
  return (
    <div className="flex flex-row w-full items-center justify-end px-5 py-3">
      <a href="#" className="mr-1 ]">
        <Minus size={20} color="#411E5A" />
      </a>

      <a href="#">
        <X size={20} color="#FA0909" />
      </a>
    </div>
  )
}
