import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        if (percentRef.current) {
          percentRef.current.textContent = `${progress}%`;
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold glow-text text-gradient animate-glow-pulse">
          Shreyasee Dhara
        </h1>
        <div className="w-64 md:w-96 mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent glow-box"
              style={{ width: "0%" }}
            />
          </div>
          <span
            ref={percentRef}
            className="block mt-4 text-sm text-muted-foreground font-mono"
          >
            0%
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    </div>
  );
};

export default Preloader;
