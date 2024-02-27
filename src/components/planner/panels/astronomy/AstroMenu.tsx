import React from 'react'
import '../../../../styles/components/planner/panels/astronomy/astroMenu.scss'
import AstroMenuButton from './AstroMenuButton'
import { IconContext } from 'react-icons/lib';
import { FaArrowUpShortWide, FaArrowUpWideShort } from "react-icons/fa6";
import { useAstro } from '../../../../contexts/AstroAppContext';

export default function AstroMenu() {

  const {currentProperty, changeCurrentProperty, currentCatalog, updateObjectsCatalog} = useAstro();

  return (
    <div className="astro-menu">
      <IconContext.Provider value={{ style: {verticalAlign: 'middle'} }}>
        <AstroMenuButton selected={currentCatalog === "all"} icon={<p className="h3" style={{fontSize: '1.2rem'}}>All</p>} label="Planètes" onClick={() => updateObjectsCatalog('all')} />
        <AstroMenuButton selected={currentCatalog === "m"} icon={<p className="h3" style={{fontSize: '1.2rem'}}>M</p>} label="Planètes" onClick={() => updateObjectsCatalog('m')} />
        <AstroMenuButton selected={currentCatalog === "ngc"} icon={<p className="h3" style={{fontSize: '1.2rem'}}>NGC</p>} label="Planètes" onClick={() => updateObjectsCatalog('ngc')} />
        <AstroMenuButton selected={currentCatalog === "ic"} icon={<p className="h3" style={{fontSize: '1.2rem'}}>IC</p>} label="Planètes" onClick={() => updateObjectsCatalog('ic')} />
        <div className="separator"></div>
        <AstroMenuButton icon={<p style={{ fontSize: '1rem' }}>{currentProperty.slice(0, 3)}.</p>} label={currentProperty} onClick={() => changeCurrentProperty()} />
        <AstroMenuButton icon={<FaArrowUpShortWide fontSize={35} />} label="Ciel profond" onClick={() => console.log('Sort asc')} />
        <AstroMenuButton icon={<FaArrowUpWideShort fontSize={35} />} label="Ciel profond" onClick={() => console.log('Sort desc')} />
      </IconContext.Provider>
    </div>
  )
}
