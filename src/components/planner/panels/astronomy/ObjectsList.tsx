import React from "react";
import { useAstro } from "../../../../contexts/AstroAppContext";
import { DeepSkyObject } from "../../../../scripts/types/DeepSkyObject";
import ObjectItem from "./ObjectItem";
import "../../../../styles/components/planner/panels/astronomy/objectsList.scss";

export default function ObjectsList() {
  const { currentList, currentCatalog, searchObject } = useAstro();

  const handleSearch = (value: string) => {
    searchObject(value);
  };

  return (
    <div className="astro-objects-list">
      <p
        className="title"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        Objets :{" "}
        {currentCatalog === "all"
          ? "Tous"
          : currentCatalog === "m"
          ? "Messier"
          : currentCatalog === "ngc"
          ? "NGC"
          : "IC"}
        <input
          className="search-dso"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Rechercher un objet..."
        />
      </p>
      <div className="list">
        {currentList && currentList !== undefined ? (
          currentList.length > 0 ? (
            currentList.map((object: DeepSkyObject, index: number) => {
              return (
                <ObjectItem
                  key={`${object.name}-${index}`}
                  object={object}
                  currentlyVisible={false}
                />
              );
            })
          ) : (
            <p>Aucun objet trouvé...</p>
          )
        ) : (
          <p>Erreur de chargement...</p>
        )}
      </div>
    </div>
  );
}
