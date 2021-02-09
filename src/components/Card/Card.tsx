import Card, {CardMedia, CardPrimaryContent} from '@material/react-card';
import '@material/react-card/index.scss';
import React from "react";
import './card.scss';
import {PhotoType} from "../../api/api";

type PropsType = {
  photo: PhotoType
}
export const MyCard = React.memo((props: PropsType) => {
  return (
    <Card className='card'>
      <CardPrimaryContent className='card_content'>
        <CardMedia wide={true} square imageUrl={props.photo.img_src}/>
        <div className='card_description'>
          <div><b>Rover:</b> {props.photo.rover.name}</div>
          <div><b>Camera:</b> {props.photo.camera.full_name}</div>
          <div><b>Sol:</b> {props.photo.sol}</div>
        </div>
      </CardPrimaryContent>
    </Card>
  );
})