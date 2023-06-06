import React, { useEffect, useState } from "react";
import About from "./About";
import BaseStats from "./BaseStats";
import axios from "axios";

const PokemonDetail = ({
  speciesUrl,
  abilities,
  name,
  id,
  img,
  types,
  stats,
  height,
  weight,
}) => {
  const [activeModal, setActiveModal] = useState(null);
  const [generation, setGeneration] = useState([]);
  const [habitat, setHabitat] = useState([]);
  const [eggGroup, setEggGroup] = useState([]);
  const [growthRate, setGrowthRate] = useState([]);
  const [special, setSpecial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${speciesUrl}`);
        const data = response.data;
        setGeneration(data.generation);
        setHabitat(data.habitat);
        setEggGroup(data.egg_groups);
        setGrowthRate(data.growth_rate);
        setSpecial(
          data.is_baby
            ? "Baby Pokemon"
            : data.is_legendary
            ? "Legendary Pokemon"
            : data.is_mythical
            ? "Mythical Pokemon"
            : ""
        );
      } catch (error) {
        alert("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const toggleModal = (modalId) => {
    if (activeModal === modalId) {
      setActiveModal(null);
    } else {
      setActiveModal(modalId);
    }
  };

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <img className="detail-img img-fluid" src={img} alt={`${name}`} />
          <div className="d-flex justify-content-center mb-2">
            <h5 className="text-capitalize text-black">
              {special && `(${special}) `}
            </h5>
          </div>
          <div className="d-flex justify-content-center mb-2">
            <h5 className="text-capitalize text-black">
              National Pokedex No = {id}
            </h5>
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col">
          <p className="d-flex gap-3">
            <button
              className={`btn btn-primary${
                activeModal === "abilityCollapse" ? " active" : ""
              }`}
              type="button"
              onClick={() => toggleModal("abilityCollapse")}
            >
              About
            </button>
            <button
              className={`btn btn-primary${
                activeModal === "abilityCollapse1" ? " active" : ""
              }`}
              type="button"
              onClick={() => toggleModal("abilityCollapse1")}
            >
              Base Stats
            </button>
            <button
              className={`btn btn-primary${
                activeModal === "abilityCollapse2" ? " active" : ""
              }`}
              type="button"
              onClick={() => toggleModal("abilityCollapse2")}
            >
              Evolution
            </button>
          </p>
          <div className="row">
            <div className="col">
              <div
                className={`collapse${
                  activeModal === "abilityCollapse" ? " show" : ""
                }`}
                id="abilityCollapse"
              >
                <div className="card card-body">
                  <About
                    types={types}
                    height={height}
                    weight={weight}
                    abilities={abilities}
                    habitat={habitat}
                    generation={generation}
                    eggGroup={eggGroup}
                    growthRate={growthRate}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div
                className={`collapse${
                  activeModal === "abilityCollapse1" ? " show" : ""
                }`}
                id="abilityCollapse1"
              >
                <div className="card card-body">
                  <BaseStats stats={stats} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
