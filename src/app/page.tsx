"use client"

import { Button } from "@/components/ui/button"
import { useTRPC } from "@/trpc/client"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

// import { Button } from "@/components/ui/button"
// // import { useTRPC } from "@/trpc/client"
// // import { useQuery } from "@tanstack/react-query"

// // import { caller } from "@/trpc/server"

// import { Suspense } from "react"
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
// import { getQueryClient, trpc } from "@/trpc/server"
// import {Client} from './client'

const page = () => {

  // Client side TRPC fetching
  // const trpc = useTRPC()
  // // trpc.hello.queryOptions({ text: 'Hello' })
  // const {data} = useQuery(trpc.hello.queryOptions({text: 'Prajwal'}))

  // const data = await caller.hello({"text":"Prajwal"})

  // const queryClient = getQueryClient()
  // void queryClient.prefetchQuery(trpc.hello.queryOptions({text:"Prajwal Prefetch"}))


  const trpc = useTRPC()
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success('Background Job started')
    }
  }))

  return (
    <div>
      {/* Hello World
        Client Component 
      <Button variant='destructive'>
        Click me {JSON.stringify(data)}
      </Button> */}

      {/* {JSON.stringify(data)} */}

      {/* <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<p>Loading....</p>}>
            <Client/>
          </Suspense>
      </HydrationBoundary> */}

      <div className="p-4 max-w-7xl mx-auto ">
          Test 
          <Button disabled={invoke.isPending} onClick={()=> invoke.mutate({text: "Prajwal"  })}>Invoke Background Job</Button>
      </div>


    </div>
  )
}

export default page
