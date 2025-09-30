import { useState } from 'react';
import '../../../styles/components/sections/features.scss'
import { featuresList } from '../../../helpers/constants/featuresList';
import type { FeaturedFeature } from '../../../helpers/types/FeaturedFeature';

export const Features = () => {

  const [selectedFeature, setSelectedFeature] = useState<number>(0);

  return (
    <div className="features-section">
      <p id='fonctionnalités' className='section-title'>Fonctionnalités principales</p>
      <div className='selector'>
        <div className="illustration-side">
          <img className='illustration' src={`/images/features/${selectedFeature}.png`} alt="Feature illustration" />
        </div>
        <div className="menu-side">
          {
            featuresList.map((feature: FeaturedFeature) => {
              return (
                <button className='menu-button' onClick={() => setSelectedFeature(feature.id)}>
                    <div className='menu-button-header'>
                    <p>{feature.title}</p>
                    <img
                      className={`plus-icon ${selectedFeature === feature.id ? 'accent' : ''}`}
                      style={{ rotate: selectedFeature === feature.id ? '45deg' : '0deg' }}
                      src="/images/icons/FiPlus.png"
                      alt="Plus icon"
                    />
                    </div>
                  {
                    selectedFeature === feature.id && (
                      <>
                        <p className='button-content'>{feature.content}</p>
                        <img className='button-illustration' src={`/images/features/${feature.id}.png`} alt="Feature illustration" />
                      </>
                    )
                  }
                </button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
