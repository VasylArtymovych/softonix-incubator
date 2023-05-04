export function isContactDataChanged (oldData: IContact, newData: IContact) {
  return oldData.name !== newData.name ||
  oldData.description !== newData.description ||
  oldData.image !== newData.image
}
