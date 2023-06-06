import React from "react";

const About = ({
  types,
  height,
  weight,
  abilities,
  generation,
  eggGroup,
  growthRate,
  habitat,
}) => {
  return (
    <>
      <div className="about">
        <p>
          Type:{" "}
          {types && types.length > 0 ? (
            types.map((type) => (
              <span key={type.type.url} className="text-capitalize about-poke">
                {type.type.name}
                {", "}
              </span>
            ))
          ) : (
            <span>No types</span>
          )}
        </p>
        <p>
          Generation:{" "}
          <span className="about-poke text-capitalize">
            {generation && generation.name ? (
              <span className="about-poke text-uppercase">
                {generation.name.split("-")[1]}
              </span>
            ) : (
              <span>No generation</span>
            )}
          </span>
        </p>
        <p>
          Height: <span className="about-poke">{height / 10} m</span>
        </p>
        <p>
          Weight: <span className="about-poke">{weight / 10} kg</span>
        </p>
        <p>
          Egg Group:{" "}
          {eggGroup.map((group) => (
            <span key={group.name} className="about-poke text-capitalize">
              {group.name}
              {", "}
            </span>
          ))}
        </p>
        <p>
          Growth Rate:{" "}
          {growthRate && growthRate.name ? (
            <span className="about-poke text-capitalize">
              {growthRate.name}
            </span>
          ) : (
            <span>No Growth Rate</span>
          )}
        </p>
        <p>
          Habitat:{" "}
          {habitat && habitat.name ? (
            <span className="about-poke text-capitalize">{habitat.name}</span>
          ) : (
            <span>No habitat</span>
          )}
        </p>
        <p className="text-black">
          Ability:{" "}
          {abilities && abilities.length > 0 ? (
            abilities.map((ability) => (
              <span
                key={ability.ability.url}
                className="text-capitalize about-poke"
              >
                {ability.ability.name} {ability.is_hidden && "(Hidden Ability)"}
                ,{" "}
              </span>
            ))
          ) : (
            <span>No abilities</span>
          )}
        </p>
      </div>
    </>
  );
};

export default About;
