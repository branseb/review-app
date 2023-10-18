import { useState } from "react"

export const SimulateError = () => {
  const [contacts, setContacts] = useState<string[]>(['0948861957', '14757855889'])
  return (
      <div>
        <div>contacts:</div>
        {contacts.map((c, i) => <div key={i}>{c}</div>)}
        <button onClick={() => setContacts(null)}>clear</button>
      </div>
  )
}
