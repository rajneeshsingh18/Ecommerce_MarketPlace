import configPromise from '@payload-config'
import { getPayload ,  CollectionConfig} from 'payload'



export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: "categories", 
  })

  return Response.json(data)
}

