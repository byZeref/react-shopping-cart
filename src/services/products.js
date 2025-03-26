import api from '@/api/axios.js'

export const getProducts = async () => {
  const { data, status } = await api.get('/products')
    .catch(e => {
      console.error('error getting products', e)
      // TODO handle error
    })

  return { data, status }
}