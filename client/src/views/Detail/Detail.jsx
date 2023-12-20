// Detail.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../redux/actions";
import style from "./Detail.module.css"

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch, id]);

  if (!pokemon) {
    return <div className="detail-not-found">Pokemon no encontrado</div>;
  }
  return (
    <div className={style.detailContainer}>
      <p className={style.detailTitle}>ID: {id}</p>
      <p className={style.detailTitle}>Nombre: {pokemon.name}</p>
      <img className={style.detailImage} src={pokemon.img} alt="pokemon" />

      {/* Estadísticas con estilos personalizados */}
      <div className={style.detailStat}>
        <span className={style.detailStatLabel}>Ataque:</span>
        <span className={style.detailStatValue}>{pokemon.attack}</span>
      </div>

      <div className={style.detailStat}>
        <span className={style.detailStatLabel}>Defensa:</span>
        <span className={style.detailStatValue}>{pokemon.defense}</span>
      </div>

      <div className={style.detailStat}>
        <span className={style.detailStatLabel}>Velocidad:</span>
        <span className={style.detailStatValue}>{pokemon.speed}</span>
      </div>

      <div className={style.detailStat}>
        <span className={style.detailStatLabel}>Altura:</span>
        <span className={style.detailStatValue}>{pokemon.height}</span>
      </div>

      <div className={style.detailStat}>
        <span className={style.detailStatLabel}>Peso:</span>
        <span className={style.detailStatValue}>{pokemon.weight}</span>
      </div>

      <div className={`${style.detailStat} ${style.detailType}`}>
        <span className={style.detailStatLabel}>Tipo:</span>
        <span className={style.detailStatValue}>
          {pokemon.types && [...pokemon.types].map((type) => type.name).join(", ")}
        </span>
      </div>
    </div>
  );
};

export default Detail;