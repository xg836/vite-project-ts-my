import { useState } from 'react'
import { Button } from '@aws-amplify/ui-react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <p>Hello Vite + React!</p>
        <p>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
    </div>
  )
}

export default App
