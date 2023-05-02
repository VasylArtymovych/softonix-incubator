export const createAbbreviation = (name: string) => {
  const nameAbbr = computed(() => {
    return name.split(' ').reduce((acc, cur) => {
      if (acc.length < 2 && cur) {
        acc = acc.concat(cur[0])
      }
      return acc
    }, '')
  })

  return nameAbbr.value
}
