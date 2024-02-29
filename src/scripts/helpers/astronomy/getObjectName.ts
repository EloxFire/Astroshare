import { DSOCatalog } from "../../types/DSOCatalog"
import { DeepSkyObject } from "../../types/DeepSkyObject"

export const getObjectName = (object: DeepSkyObject, currentCatalog: DSOCatalog, full?: boolean) => {
  if (object.m !== "") {
    if (full) return `Messier ${object.m}`
    if (currentCatalog === 'ngc') return object.name
    if (currentCatalog === 'ic') return object.name
    return `M${object.m}`
  } else if (object.ngc !== "") {
    return `NGC${object.ngc}`
  } else if (object.ic !== "") {
    return `IC${object.ic}`
  } else if (object.name !== "") {
    return object.name
  } else {
    return 'Objet non identifié'
  }
}