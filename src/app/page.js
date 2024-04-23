import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

export default function Home() {
  return (
    <div className='flex items-center justify-center w-full h-lvh bg-slate-500'>
      <div className='w-9/12'>
        <MediaPlayer src="vimeo/937742035">
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      </div>
    </div>
  );
}
