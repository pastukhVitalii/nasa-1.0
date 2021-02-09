import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {PhotoType} from "./api/api";
import {setPhotosTC} from "./redux/photos-reducer";

export const App = React.memo(() => {

  const photos = useSelector<AppStateType, Array<PhotoType>>(state => state.photo.photos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPhotosTC());
  }, [dispatch]);

  console.log(photos);

  return (
    <div className="App">

    </div>
  );
})