import React, {useEffect, useState} from 'react';
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {PhotoType} from "./api/api";
import {setPhotosTC} from "./redux/photos-reducer";
import {MyCard} from "./components/Card/Card";
import {MyInput} from "./components/Input/Input";
import {MyButton} from "./components/Button/Button";
import {MySelect} from "./components/Select/Select";

export const App = React.memo(() => {

  const photos = useSelector<AppStateType, Array<PhotoType>>(state => state.photo.photos);

  const [page, setPage] = useState<number>(1);
  const [sol, setSol] = useState<string>('1000');
  const [rover, setRover] = useState<string>('curiosity');
  const [camera, setCamera] = useState<string>('none');

  const roverOptions = ['none', 'curiosity', 'opportunity', 'spirit'];
  const cameraOptions = ['none', 'fhaz', 'rhaz', 'mast', 'chemcam', 'manhli', 'mardi', 'navcam', 'pancam', 'minites'];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPhotosTC(page, sol, rover, camera));
  }, [dispatch, page, sol, rover, camera]);

  const incrementPage = (page: number) => {
    setPage(page + 1)
  }
  const decrementPage = (page: number) => {
    setPage(page - 1)
  }

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
        {photos.map((p) => <MyCard key={p.id} photo={p}/>)}
      </div>
      <div className={'paginator'}>
        <MyButton value={page} onSetPage={decrementPage} label={'Previous page'}/>
        <span><b>Page: </b>{page}</span>
        <MyButton value={page} onSetPage={incrementPage} label={'load more ...'}/>
      </div>
    </div>
  );
})

