// import {
//   // STATE_OF_CHECKBOXES,
//   START_TRANSFER,
//   STATE_OF_CHECKBOXES_INIT,
//   STATE_OF_CHECKBOXES_ADD,
//   STATE_OF_CHECKBOXES_REMOVE,
//   STATE_OF_CHECKBOXES_UPDATE,
//   STATE_OF_CHECKBOXES_FLUSH
// } from '../actions/index';
//
// import _ from 'lodash';
//
// import updateObjectInArray from '../helpers';
//
// export default function (state = [], action) {
//
//   // let arr = []
//
//   switch (action.type) {
//
//   case STATE_OF_CHECKBOXES_INIT:
//     // console.log('STATE_OF_CHECKBOXES_INIT', action);
//     return action.payload
//
//   case STATE_OF_CHECKBOXES_ADD:
//
//     // console.log('STATE_OF_CHECKBOXES_ADD', action);
//
//     // this is for disabling the "Remove file" icon after successfull removal
//     if (action.reset === true) {
//       return []
//     }
//
//
//     // add the item to ...state
//     // if (action.item.checked && action.item.pkgType !== undefined) {
//     // if (action.checked) {
//
//       // return [
//       //   ...state,
//       //   {
//       //     name: action.name,
//       //     checked: action.checked,
//       //     dependencies: action.dependencies,
//       //     version: action.version,
//       //     to_be_deleted: action.to_be_deleted,
//       //     pkgType: action.pkgType,
//       //     swType: action.swType,
//       //     dateTime: action.dateTime
//       //   }
//       // ]
//
//       // return array with no duplicates
//
//       return _.uniqBy([
//         ...state,
//         {
//           name: action.name,
//           checked: action.checked,
//           dependencies: action.dependencies,
//           version: action.version,
//           to_be_deleted: action.to_be_deleted,
//           pkgType: action.pkgType,
//           swType: action.swType,
//           dateTime: action.dateTime
//         }
//       ], e => e.name)
//
//     // }
//
//     // let copyState = [...state]
//     //
//     // // REMOVE item from array
//     // return copyState.filter(item => {
//     //   return item.name !== action.name
//     // })
//
//     case STATE_OF_CHECKBOXES_REMOVE:
//       // console.log('STATE_OF_CHECKBOXES_REMOVE', action);
//
//     // this is for disabling the "Remove file" icon after successfull removal
//     if (action.reset === true) {
//       return []
//     }
//
//       let copyState = [...state]
//
//       // // REMOVE item from array
//       return copyState.filter(item => {
//         return item.name !== action.name
//       })
//
//
//     case STATE_OF_CHECKBOXES_UPDATE:
//     // console.log('STATE_OF_CHECKBOXES_UPDATE', action);
//
//       return updateObjectInArray(state, action)
//
//
//     // when starting the transfer, empty the array of checked items, so after update when user wants to start removing the files, user will not see the previously checked items:
//     // case START_TRANSFER:
//     //   console.log('START_TRANSFER', action);
//     //   return []
//
//     case STATE_OF_CHECKBOXES_FLUSH:
//       // console.log('STATE_OF_CHECKBOXES_FLUSH', action);
//       if (action.payload) {
//         return []
//       } else {
//         return state
//       }
//
//   default:
//         // if nothing, return the last state, but instead of returning undefined, then we set null above
//     return state;
//   }
// }
//
// // function updateObjectInArray(array, action) {
// //     return array.map( (item, index) => {
// //         if(item.name !== action.name) {
// //             // This isn't the item we care about - keep it as-is
// //             return item;
// //         }
// //
// //         // Otherwise, this is the one we want - return an updated value
// //         return {
// //             ...item,
// //             ...action
// //         };
// //     });
// // }
