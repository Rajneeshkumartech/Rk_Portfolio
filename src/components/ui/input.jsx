import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-md border border-white/10 focus:border-accent font-light bg-primary px-3 py-2 text-base placeholder:text-white/60 outline-0",
        className
      )}
      {...props} />
  );
}

export { Input }
