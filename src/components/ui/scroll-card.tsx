'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface ArticleCardData {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  rotation: string;
}

interface ScrollCardProps {
  cardsData: ArticleCardData[];
  headerTitle: string;
  headerSubtitle: string;
}

const ScrollCard = forwardRef<HTMLElement, ScrollCardProps>(({ cardsData, headerTitle, headerSubtitle }, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-background' ref={ref}>
        <div className='wrapper'>
          <section className='text-foreground h-screen w-full bg-background grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <div className='relative z-10 text-center'>
              <h1 className='2xl:text-7xl text-5xl px-8 font-semibold tracking-tight leading-[120%] mb-4'>
                {headerTitle}
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto px-8'>
                {headerSubtitle}
              </p>
            </div>
          </section>
        </div>

        <section className='text-foreground w-full bg-background pb-20'>
          <div className='flex justify-center px-4 sm:px-8 lg:px-16'>
            <div className='grid gap-2 max-w-4xl w-full'>
              {cardsData.map((card, i) => (
                <figure key={i} className='sticky top-0 h-screen grid place-content-center'>
                  <article
                    className={`h-80 w-full max-w-2xl rounded-2xl ${card.rotation} p-8 grid gap-6 shadow-2xl backdrop-blur-sm border-2 border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(0,123,255,0.4)] animate-fade-in cursor-pointer group`}
                    style={{ background: card.color }}
                  >
                    <div className='p-4 rounded-xl bg-white/20 inline-flex w-fit transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3'>
                      <card.icon className='w-8 h-8 text-white transition-all duration-300 group-hover:scale-110' />
                    </div>
                    <h1 className='text-3xl font-bold text-white transition-all duration-300 group-hover:translate-x-2'>{card.title}</h1>
                    <p className='text-white/90 text-lg leading-relaxed transition-opacity duration-300 group-hover:text-white'>{card.description}</p>
                  </article>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
});

ScrollCard.displayName = 'ScrollCard';

export default ScrollCard;
