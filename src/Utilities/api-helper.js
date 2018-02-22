export const fetchApi = async (url) => {
  const initialFetch = await fetch(url)
  const response = await initialFetch.json();
  return response;
}

export const getSwornMembers = async (members) => {
  const memberData = members.map( async member => {
     return await fetchApi(member)
  })
  const resolvedPromises = await Promise.all(memberData)
  const cleanedMembers = cleanData(resolvedPromises);
  return cleanedMembers;
}

export const cleanData = (members) => {
  return members.map( ({name, died}) => {
    if(died === '') {
      died = 'Alive'
    }
    return {name, died}
  })
}