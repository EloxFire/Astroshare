import React from "react";
import { useAstro } from "../../../../contexts/AstroAppContext";
import "../../../../styles/components/planner/panels/astronomy/objectsList.scss";

export default function ObjectsList() {
  const { objectsList, searchObject } = useAstro();

  return (
    <div className="astro-objects-list">
      
    </div>
  );
}
