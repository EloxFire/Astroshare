import React from 'react'
import '../../../../styles/components/planner/panels/astronomy/astroMenu.scss'
import AstroMenuButton from './AstroMenuButton'
import { IoPlanet } from 'react-icons/io5'
import { TbGalaxy } from "react-icons/tb";
import { IconContext } from 'react-icons/lib';
import { FaArrowUpShortWide, FaArrowUpWideShort } from "react-icons/fa6";
import { useAstro } from '../../../../contexts/AstroAppContext';

export default function AstroMenu() {

  const {currentProperty, changeCurrentProperty} = useAstro();

  return (
    <div className="astro-menu">
      <IconContext.Provider value={{ style: {verticalAlign: 'middle'} }}>
        <AstroMenuButton icon={<IoPlanet fontSize={35} />} label="Planètes" onClick={() => console.log('Planètes')} />
        <AstroMenuButton icon={<TbGalaxy fontSize={35} />} label="Ciel profond" onClick={() => console.log('Ciel profond')} />
        <div className="separator"></div>
        <AstroMenuButton icon={<p style={{ fontSize: '1rem' }}>{currentProperty.slice(0, 3)}.</p>} label={currentProperty} onClick={() => changeCurrentProperty()} />
        <AstroMenuButton icon={<FaArrowUpShortWide fontSize={35} />} label="Ciel profond" onClick={() => console.log('Sort asc')} />
        <AstroMenuButton icon={<FaArrowUpWideShort fontSize={35} />} label="Ciel profond" onClick={() => console.log('Sort desc')} />
      </IconContext.Provider>
    </div>
  )
}
