const tenderAPI = {
  GET_TENDER: params => `api/tender/${params[0]}`,
  APPROVE_TENDER: params => `api/tender/approve`,
  DECLINE_TENDER: params => `api/tender/decline`,
  ADD_TENDER_NOTE: params => `api/tender/note`,
}

export default tenderAPI;