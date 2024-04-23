import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

export default function Home() {
  return (
    <div className='flex items-center justify-center w-full h-lvh bg-slate-500'>
      <div className='flex w-10/12 gap-12'>
        <div className="w-full h-full">
          <p className='text-white'>YouTube</p>
          <MediaPlayer src="youtube/_cMxraX_5RE">
            <MediaProvider />
            <DefaultVideoLayout icons={defaultLayoutIcons} />
          </MediaPlayer>
        </div>
        <div className="w-full h-full">
          <p className='text-white'>Vimeo</p>
          <MediaPlayer src="vimeo/640499893">
            <MediaProvider />
            <DefaultVideoLayout icons={defaultLayoutIcons} />
          </MediaPlayer>
        </div>
      </div>
    </div>
  );
}
