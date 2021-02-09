import {Dispatch} from 'redux'
import {nasaApi, PhotoType, ResEpisodesType} from '../api/api'

const initialState: ResEpisodesType = {
  photos: []
}

export const photosReducer = (state: ResEpisodesType = initialState, action: ActionsType): ResEpisodesType => {
  switch (action.type) {
    case "SET-PHOTOS":
      return {
        ...state,
        photos: action.photos
      }
    default:
      return state
  }
}

// actions

export const setPhotosAC = (photos: Array<PhotoType>) => ({type: 'SET-PHOTOS', photos} as const)

// thunks
export const setPhotosTC = () => {
  return (dispatch: ThunkDispatch) => {
    nasaApi.getPhotos()
      .then((res) => {
        dispatch(setPhotosAC(res.data.photos))
      })
      .catch(error => {
        console.log(error, dispatch);
      })
  }
}

// types

export type SetPhotosActionType = ReturnType<typeof setPhotosAC>;
type ActionsType = SetPhotosActionType

type ThunkDispatch = Dispatch<ActionsType>