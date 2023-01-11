import React from 'react';
import gif from '../load.gif';
import { useDispatch } from 'react-redux';
import { detChoice } from '../reduxes/sliseDetails';

export const OutputDetails = ({dat}) => {
  const dispatch = useDispatch();
  const { data, loading, error, choice } = dat;
  function reloadDetails() {
    dispatch(detChoice(choice));
  }
  const head = data.id? `услуги ${data.name}:`: '- выберите услугу.';
  const load = <p className='li_load'>Loading... <img className='load' src={gif} alt='loading'/></p>;
  const err = <div className='error'>
    Произошла ошибка! <button className='btn' onClick={reloadDetails}>Повторить запрос</button>
  </div>;
  const details = data.id? <div className='service'>
      <p className='det'>ID: {data.id}</p>
      <p className='det'>Услуга: {data.name}</p>
      <p className='det'>Цена: {data.price}</p>
      <p className='det'>Описание: {data.content}</p>
    </div>: null;
  return (
    <div className='details'>
      <p className='det_p'>Детали {head}</p>
      {error? err: loading? load: details}
    </div>
  )
}
