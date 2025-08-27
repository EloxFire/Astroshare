import { motion, useAnimationControls, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';

interface BouncedIconProps {
  iconPath: string;
  delay?: number;
  amount?: number; // seuil de visibilité (0..1)
}

export const BouncedIcon = ({ iconPath, delay = 0, amount = 0.5 }: BouncedIconProps) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const inView = useInView(ref, { amount }); // true quand amount du composant est visible
  const controls = useAnimationControls();
  const reduce = useReducedMotion();

  // État "reset" instantané (aucune anim)
  const resetInstant = () => {
    controls.stop();
    controls.set({ opacity: 0, y: 28, scale: 0.95 });
  };

  useEffect(() => {
    if (inView) {
      if (reduce) {
        controls.start({
          opacity: 1, y: 0, scale: 1,
          transition: { duration: 0.35, ease: 'easeOut', delay }
        });
      } else {
        controls.start({
          opacity: 1, y: 0, scale: 1,
          transition: { type: 'spring', stiffness: 500, damping: 15, mass: 0.6, delay }
        });
      }
    } else {
      // sortie de la vue -> reset immédiat (aucune transition)
      resetInstant();
    }
  }, [inView, controls, delay, reduce]);

  return (
    <motion.img
      ref={ref}
      src={iconPath}
      alt={`Icon for ${iconPath.split('/').pop()?.split('.')[0]}`}
      initial={false}                 // on gère tout via controls
      animate={controls}
      style={{ willChange: 'transform, opacity' }}
    />
  );
};
