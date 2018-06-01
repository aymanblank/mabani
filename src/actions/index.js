import C from '../store/constants'

export const setConnectionStatus = (isConnected) =>
  ({
    type: C.SET_CONNECTION_STATUS,
    payload: isConnected
  })

export const setLoggedInUser = (user) =>
  ({
    type: C.SET_LOGGED_IN_USER,
    payload: user
  })

export const setTenders = (tenders) =>
  ({
    type: C.SET_TENDERS,
    payload: tenders
  })

export const approveTender = (tender, userId, dispatch) => {
  tender.approve(userId).then(() => {
    dispatch({
      type: C.APPROVE_TENDER,
      payload: tender.id
    });
  }).catch(error => {});
}

export const declineTender = (tender, userId, dispatch) => {
  tender.decline(userId).then(() => {
    dispatch({
      type: C.DECLINE_TENDER,
      payload: tender.id
    });
  }).catch(error => {});
}

export const addTenderNote = (tender, userId, note, dispatch) => {
  tender.addNote(userId, note).then(() => {
    dispatch({
      type: C.ADD_TENDER_NOTE,
      payload: {
        tenderId: tender.id,
        note,
      }
    });
  }).catch(error => {});
}

export const setProjects = (projects) =>
  ({
    type: C.SET_PROJECTS,
    payload: projects
  })