import React, { useState, useEffect } from "react";
import Type from "./Type";
import Loading from "./Loading";
import PokemonDetail from "./PokemonDetail";
import axios from "axios";

const Card = (props) => {
  const [ability, setAbility] = useState([]);
  const [stats, setStats] = useState([]);
  const [type, setType] = useState([]);
  const [id, setId] = useState(null);
  const [height, setHeight] = useState([]);
  const [weight, setWeight] = useState([]);
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [speciesUrl, setSpeciesUrl] = useState(null);
  const url = props.url;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setAbility(response.data.abilities);
        setHeight(response.data.height);
        setWeight(response.data.weight);
        setType(response.data.types);
        setStats(response.data.stats);
        setAbility(response.data.abilities);
        setId(response.data.id);
        setImage(response.data.sprites.other["official-artwork"].front_default);
        setSpeciesUrl(response.data.species.url);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      <div
        className={`card mt-2 mb-2 pokemon-card ${modalOpen ? "blur" : ""}`}
        onClick={openModal}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <img
            className="card-img-top img-fluid pokemon-img"
            src={image}
            alt={`Pokemon ${props.name}`}
          />
        )}
        <div className="card-body">
          <p className="id">#{id}</p>
          <p className="pokemon-name text-uppercase">{props.name}</p>
          <Type types={type} />
        </div>
      </div>

      {modalOpen && (
        <div className="modal-wrapper">
          <div
            className="modal fade show"
            style={{ display: "block" }}
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-capitalize">
                    {props.name} Detail
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <PokemonDetail
                    name={props.name}
                    img={image}
                    id={id}
                    stats={stats}
                    types={type}
                    height={height}
                    weight={weight}
                    abilities={ability}
                    speciesUrl={speciesUrl}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </>
  );
};

export default Card;
