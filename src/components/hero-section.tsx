import { Button } from '@/components/ui/button';
import { HeroHeader } from '@/components/hero-header';
import { ChevronRight } from 'lucide-react';
import dnaVideo from '@/static/video/dna_ttplyu.mp4';

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                  Build 10x Faster with{' '}
                  <span className="bg-foreground text-background font-bold">
                    HN Core
                  </span>{' '}
                  Family
                </h1>
                <p className="mt-8 max-w-2xl text-balance text-lg">
                  A tech-savvy family of developers and designers, creating
                  innovative digital experiences together.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full pl-5 pr-3 text-base"
                  >
                    <a href="#link">
                      <span className="text-nowrap">Start Building</span>
                      <ChevronRight className="ml-1" />
                    </a>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
                  >
                    <a href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <video
                autoPlay={true}
                loop={true}
                className="size-full -scale-x-100 object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                src={dnaVideo}
              ></video>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
