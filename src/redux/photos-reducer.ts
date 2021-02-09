import {Dispatch} from 'redux';
import {nasaApi, PhotoType, ResEpisodesType} from '../api/api'

export type ErrorType = {
  error?: any
}
const initialState: ResEpisodesType | ErrorType = {
  photos: [],
  error: null,
}

export const photosReducer = (state: ResEpisodesType | ErrorType = initialState, action: ActionsType): ResEpisodesType | ErrorType => {
  switch (action.type) {
    case 'APP/SET-PHOTOS':
      return {
        ...state,
        photos: action.photos
      }
    case "APP/SET-ERROR":
      return {
        ...state, error: action.error
      }
    default:
      return state
  }
}

// actions

export const setPhotosAC = (photos: Array<PhotoType>) => ({type: 'APP/SET-PHOTOS', photos} as const);
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)

// thunks
export const setPhotosTC = (page: number, sol: string, rover: string, camera: string) => {
  return (dispatch: ThunkDispatch) => {
    nasaApi.getPhotos(page, sol, rover, camera)
      .then((res) => {
        dispatch(setPhotosAC(res.data.photos))
      })
      .catch(error => {
        handleError(error, dispatch);
        // alert(error);
      })
  }
}

// error handlers

const handleError = (error: string, dispatch: Dispatch<SetAppErrorActionType> ) => {
  dispatch(setAppErrorAC(` message ${error}`))
}
// types

export type SetPhotosActionType = ReturnType<typeof setPhotosAC>;
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;

type ActionsType = SetPhotosActionType | SetAppErrorActionType;

type ThunkDispatch = Dispatch<ActionsType>
