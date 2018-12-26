// // const ROOT_URL = window.ROOT_URL;
//
//
//
// /*
//  * action types
//  */
//
// export const FETCH_DATA = 'FETCH_DATA';

// /*
//  * action creators
//  */
//
//
// export const fetchData = (mode) => {
//     // this is for redux-promise
//   let request;
//
//   if (mode) {
//     request = $.ajax({
//       url: `${ROOT_URL}/initstate?${mode}`,
//       type: 'GET',
//     }).catch(error => {
//       return {
//         type: ERROR_MESSAGE,
//         code: error.status,
//         errorMessage: error.statusText,
//         payload: error
//       }
//     })
//   } else {
//     request = $.ajax({
//       url: `${ROOT_URL}/initstate`,
//       type: 'GET',
//     }).catch(error => {
//       return {
//         type: ERROR_MESSAGE,
//         code: error.status,
//         errorMessage: error.statusText,
//         payload: error
//       }
//     })
//   }
//
//   return {
//     type: FETCH_DATA,
//     payload: request,
//   };
// };
