class ContactsService {
  // rest/v1/contacts
  getContacts () {
    return useHttp.get<IContact[]>('rest/v1/contacts')
  }

  createContact (contact: IContact) {
    const { addContact } = useContactsStore()
    const payload = {
      name: contact.name,
      description: contact.description
    }

    return useHttp.post('rest/v1/contacts', payload)
      .then(() => {
        addContact(contact)
        useSuccessNotification('Contact successfully created')
      })
      .catch(error => {
        useErrorNotification(error.message)
      })
  }

  updateContact (payload: IContact) {
    const { updateContact } = useContactsStore()

    return useHttp.patch(`rest/v1/contacts?id=eq.${payload.id}`, payload)
      .then(res => {
        console.log(res)
        updateContact(payload)
        useSuccessNotification('Contact successfully updated')
      })
      .catch(error => {
        useErrorNotification(error.message)
      })
  }

  deleteContact () {
    return useHttp.post('rest/v1/contacts')
  }
}

export const contactsService = new ContactsService()
