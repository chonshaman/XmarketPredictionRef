import React from 'react';
import { motion } from 'motion/react';
import { ANIMATION_CONFIG } from './constants';

interface SetExpirationProps {
  enabled: boolean;
  onToggle: () => void;
}

export const SetExpiration = React.memo<SetExpirationProps>(({ enabled, onToggle }) => {
  return (
    <div className="w-full flex items-center justify-between py-[4px] relative shrink-0">
      <p 
        className="font-sans leading-[24px] not-italic relative shrink-0 text-nowrap text-card-foreground whitespace-pre"
        style={{
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)'
        }}
      >
        Set Expiration
      </p>
      
      <div 
        onClick={onToggle}
        className="relative w-[48px] h-[28px] cursor-pointer"
      >
        <motion.div 
          className="absolute inset-0 rounded-full"
          animate={{
            backgroundColor: enabled ? 'rgba(105, 82, 254, 1)' : 'rgba(255, 255, 255, 0.1)'
          }}
          transition={{ duration: ANIMATION_CONFIG.duration.normal }}
        />
        <motion.div 
          className="absolute top-[2px] w-[24px] h-[24px] bg-white rounded-full shadow-md"
          animate={{
            left: enabled ? '22px' : '2px'
          }}
          transition={{ 
            type: 'spring',
            stiffness: 300,
            damping: 30
          }}
        />
      </div>
    </div>
  );
});

SetExpiration.displayName = 'SetExpiration';