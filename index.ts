```bash
npx create-next-app@latest my-nextjs-app --typescript
cd my-nextjs-app
```

Replace the contents of `pages/index.tsx` with the following code:

```tsx
// pages/index.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default Home;
```

Create a new API route by adding the following code in `pages/api/hello.ts`:

```ts
// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Hello, World!' });
};

export default handler;
```

To run the application, use the following command:

```bash
npm run dev
```

Your Next.js application is now set up with a simple "Hello, World!" frontend and an API route.