export const useStorage = () => {
  const save = (item, name = 'cart') => {
    localStorage.setItem(name, JSON.stringify(item))
  }

  const remove = (name = 'cart') => {
    localStorage.removeItem(name)
  }

  return { save, remove }
}