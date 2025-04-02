import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('font-bold text-lg flex items-center', className)}>
      <img src='/logo.png' className='w-[3.5rem] h-[4.1rem]'/>
    </div>
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <div className={cn('font-bold text-lg flex items-center', className)}>
      <span className="text-primary border border-primary px-1 rounded">
        HN
      </span>
      <span className="ml-1 text-muted-foreground">Core</span>
    </div>
  );
};
