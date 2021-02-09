import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/',
  // ...settings
})

// api
const api = '6lVBFlRMabvO0pPAu5181CYLLD9YjArxVYcXckUd';
let optional = '';

export const nasaApi = {
  getPhotos(page: number, sol: string, rover: string, camera: string) {
    if (camera !== 'none') {
      optional = `&camera=${camera}`
    } else optional = ''
    return instance.get<ResponseType>(`${rover}/photos?sol=${sol}&page=${page}${optional}&api_key=${api}`);
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
