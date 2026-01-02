import { useRive } from '@rive-app/react-canvas';
import { cn } from './utils';
import { useEffect, useRef } from 'react';

interface RiveAnimationProps {
  src: string;
  artboard?: string;
  animations?: string | string[];
  stateMachines?: string | string[];
  autoplay?: boolean;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function RiveAnimation({
  src,
  artboard,
  animations,
  stateMachines,
  autoplay = true,
  className,
  onLoad,
  onError,
}: RiveAnimationProps) {
  const cleanupAttemptedRef = useRef(false);

  const { RiveComponent, rive } = useRive({
    src,
    artboard,
    animations,
    stateMachines,
    autoplay,
    onLoad: () => {
      if (onLoad) onLoad();
    },
    onLoadError: () => {
      console.error('Rive load failed');
      if (onError) onError();
    },
  });

  useEffect(() => {
    return () => {
      // Only attempt cleanup once to avoid duplicate errors
      if (cleanupAttemptedRef.current) return;
      cleanupAttemptedRef.current = true;
      
      if (rive) {
        try {
          // Try to cleanup, but suppress any errors
          if (typeof rive.cleanup === 'function') {
            rive.cleanup();
          }
        } catch (error) {
          // Suppress cleanup errors silently
        }
      }
    };
  }, [rive]);

  return (
    <div className={cn("w-full h-full min-h-[200px]", className)}>
      <RiveComponent className="w-full h-full" />
    </div>
  );
}