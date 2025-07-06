import * as React from "react"

// Simple tooltip provider and components for basic functionality
const TooltipProvider = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

const Tooltip = ({ children }) => {
  return <>{children}</>
}

const TooltipTrigger = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
})

const TooltipContent = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

TooltipTrigger.displayName = "TooltipTrigger"

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
}
