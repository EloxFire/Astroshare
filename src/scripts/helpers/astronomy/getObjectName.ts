import { DeepSkyObject } from "../../types/DeepSkyObject"

export const getObjectName = (object: DeepSkyObject) => {
  if (object.m !== "") {
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