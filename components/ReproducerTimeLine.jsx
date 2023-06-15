import { usePlayer } from "../hooks/usePlayer";

export const ReproducerTimeLine = ({ onChangeProgress }) => {
  const { songDuration, currentSongTime } = usePlayer();
  const minutes = Math.floor(songDuration / 60);
  const seconds = Math.floor(songDuration % 60);
  const minutesPlayed = Math.floor(currentSongTime / 60);
  const secondsPlayed = Math.floor(currentSongTime % 60);

  return (
    <div className="flex items-center gap-2 w-full">
      <h1 className="text-xs text-neutral-500">
        {minutesPlayed}:{`${secondsPlayed}`.padStart(2, "0")}
      </h1>
      <input
        type="range"
        min="0"
        max={songDuration}
        className="max-w-full md:min-w-[500px] h-2 bg-neutral-500 rounded-full accent-green-500"
        value={currentSongTime || 0}
        onChange={(e) => onChangeProgress(e.target.value)}
      />
      <h1 className="text-xs text-neutral-500">
        {minutes}:{seconds}
      </h1>
    </div>
  );
};