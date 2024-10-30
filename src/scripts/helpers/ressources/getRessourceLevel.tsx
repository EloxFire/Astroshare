import {ReactNode} from "react";
import {Ressource} from "../../types/Ressource";

export const getRessourceLevel = (ressource: Ressource): {element: ReactNode, label: string} => {

  if(typeof ressource.level !== 'number') {
    return {
      element: <p>{ressource.level}</p>,
      label: ressource.level
    }
  }

  let level = ressource.level;
  let stars: ReactNode[] = [];
  let fullStars = Math.floor(level);
  let halfStar = level - fullStars;
  let emptyStars = 5 - fullStars - (halfStar > 0 ? 1 : 0);

  const starStyle = {
    width: 20,
    height: 20,
  }

  for (let i = 0; i < fullStars; i++) {
    stars.push(<img style={starStyle} key={`full-star-${i}`} src={'https://i.postimg.cc/Rh37PP3g/FiStar.png'}/>);
  }
  for (let i = 0; i < halfStar; i++) {
    stars.push(<img style={starStyle} key={`half-star-${i}`} src={"https://i.postimg.cc/fy6x1xmD/Fi-Half-Star.png"}/>);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img style={starStyle} key={`empty-star-${i}`} src={'https://i.postimg.cc/Y2Vf4wVZ/Fi-Star-Empty.png'}/>);
  }

  let levelLabel: string;
  if (level <= 2) {
    levelLabel = "Débutant";
  } else if (level <= 3.5) {
    levelLabel = "Intermédiaire";
  } else {
    levelLabel = "Confirmé";
  }

  const object = {
    element: <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5}}>
      {stars}
    </div>,
    label: levelLabel
  }

  return object;
}