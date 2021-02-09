import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1',
  // ...settings
})

// api
export const nasaApi = {

  api: '6lVBFlRMabvO0pPAu5181CYLLD9YjArxVYcXckUd',

  getPhotos() {
    const promise = instance.get<ResponseType>(`&api_key=${this.api}`);
    return promise;
  },
}

// types
export type ResponseType = {
  photos: Array<PhotoType>
}

export type ResEpisodesType = {
  photos: Array<PhotoType>
}

export type PhotoType = {
  id: string
  sol: string
  camera: {
    id: string,
    name: string,
    rover_id: string,
    full_name: string
  },
  img_src: string,
  earth_date: string,
  rover: {
    id: string,
    name: string,
    landing_date: string,
    launch_date: string,
    status: string
  }
}