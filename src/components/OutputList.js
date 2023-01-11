import React from 'react';
import gif from '../load.gif';
import { useDispatch } from 'react-redux';
import { listRequest } from '../reduxes/sliseList';
import { detChoice } from '../reduxes/sliseDetails';

export const OutputList = ({dat}) => {
  const { data, loading, error } = dat;
  const dispatch = useDispatch();

  function reloadList() {
    dispatch(listRequest())
  }

  function loadDetails(evt) {
    const id = evt.target.id;
    dispatch(detChoice(id));
  }
  
  const list = data.length? data.map((o) => {
    return(<li className='li_list' key={o.id} id={o.id} onClick={loadDetails}>Услуга: {o.name}</li>)
  }): null;
  const load = <li className='li_load'>Loading... <img className='load' src={gif} alt='loading'/></li>;
  const err = <div className='error'>Произошла ошибка! <button className='btn' onClick={reloadList}>Повторить запрос</button></div>;
  return (
    <ul className='ul_list'>
      {error? err: loading? load: list}
    </ul>
  )
}
