import { cn } from '@/lib/cn'

interface TagProps {
  children: string
  className?: string
  hover?: boolean
}

export function Tag({ children, className, hover = true }: TagProps) {
  return (
    <span className={cn('tag', hover && 'tag-hover', className)}>{children}</span>
  )
}
