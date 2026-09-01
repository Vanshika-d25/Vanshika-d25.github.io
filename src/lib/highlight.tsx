import type { ReactNode } from 'react'

export function highlightCode(line: string, key: number): ReactNode {
  const parts: ReactNode[] = []
  const regex =
    /("[^"]*")|(\b(?:const|let|var|return|true|false|null|import|from|export)\b)|([A-Za-z_$][\w$]*)(?=\s*:)|(:)|([{}[\],])/g
  let lastIndex = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = regex.exec(line)) !== null) {
    if (m.index > lastIndex) parts.push(line.slice(lastIndex, m.index))
    const [full, str, kw, ident, colon, punct] = m
    if (str) parts.push(<span key={i++} className="text-teal-300">{str}</span>)
    else if (kw) parts.push(<span key={i++} className="text-violet-300">{kw}</span>)
    else if (ident) parts.push(<span key={i++} className="text-accent-300">{ident}</span>)
    else if (colon) parts.push(<span key={i++} className="text-zinc-500">{colon}</span>)
    else if (punct) parts.push(<span key={i++} className="text-zinc-500">{punct}</span>)
    lastIndex = m.index + full.length
  }
  if (lastIndex < line.length) parts.push(line.slice(lastIndex))
  return <span key={key}>{parts}</span>
}
