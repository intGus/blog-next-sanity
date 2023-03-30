import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'wkxc8etl', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2023-03-29',
  useCdn: false // `false` if you want to ensure fresh data
})