import React, {useCallback, useEffect, useState} from 'react';
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {setPhotosTC} from "./redux/photos-reducer";
import {MyCard} from "./components/Card/Card";
import {MyInput} from "./components/Input/Input";
import {MyButton} from "./components/Button/Button";
import {MySelect} from "./components/Select/Select";
import {PhotoType} from "./api/api";

export const App = React.memo(() => {

  const photos: any = useSelector<any>(state => state.photo.photos);
  const error = useSelector<any>(state => state?.photo.error);

  const [page, setPage] = useState<number>(1);
  const [sol, setSol] = useState<string>('1000');
  const [rover, setRover] = useState<string>('curiosity');
  const [camera, setCamera] = useState<string>('none');

  const roverOptions = ['curiosity', 'opportunity', 'spirit'];
  const cameraOptions = ['none', 'fhaz', 'rhaz', 'mast', 'chemcam', 'manhli', 'mardi', 'navcam', 'pancam', 'minites'];
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(photos);
    dispatch(setPhotosTC(page, sol, rover, camera));
  }, [dispatch, page, sol, rover, camera]);

  const incrementPage = useCallback((page: number) => {
    setPage(page + 1)
  }, []);

  const decrementPage = useCallback((page: number) => {
    setPage(page - 1)
  }, []);

  console.log(error);
  return (
    <div className={'App'}>
      <header className={'header'}>
        <span>nasa</span>
      </header>
      <h2>Sort photo</h2>
      <div className={'sort_block'}>
        <MyInput value={sol} onSetSol={setSol}/>
        <MySelect value={rover} onSetValue={setRover} options={roverOptions}/>
        <MySelect value={camera} onSetValue={setCamera} options={cameraOptions}/>
      </div>
      <hr/>
      <div className={'photos'}>
        {!error? photos.length ? photos.map((p: PhotoType) => <MyCard key={p.id} photo={p}/>) : 'No photos': error}
      </div>
      <div className={'paginator'}>
        <MyButton value={page} disabled={page === 1} onSetPage={decrementPage} label={'Previous page'}/>
        <span><b>Page: </b>{page}</span>
        <MyButton value={page} disabled={!photos.length} onSetPage={incrementPage} label={'load more ...'}/>
      </div>
    </div>
  );
})

