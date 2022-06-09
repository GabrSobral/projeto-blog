import { useEffect, useRef, useState } from 'react'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { convertDurationToTimeString } from '../../utils/convert-duration-to-time-string'
import styles from './style.module.scss'
import { PlaySVG } from '../../icons/PlaySVG'
import { PauseSVG } from '../../icons/PauseSVG'

interface PlayerProps{
  name: string;
  duration: number;
  url: string 
}

export function Player({ name,  duration, url }: PlayerProps){
  const [ isPlaying, setIsPlaying ] = useState<boolean>(false)
  const [ progress, setProgress ] = useState<number>(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(()=> {
    if(!audioRef.current)
      return
    
    if(isPlaying)
      audioRef.current.play()
    else
      audioRef.current.pause()

  },[isPlaying])

  useEffect(() => {
    if(!audioRef.current)
      return

    const handleAudio = () => {
      if(!audioRef.current)
        return
      
      setProgress(Math.floor(audioRef.current.currentTime))
    };
    
    audioRef.current.currentTime = 0

    audioRef.current.addEventListener('timeupdate', handleAudio)

    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleAudio)
    }
  },[])

  function handleSeek(amount : number){
    if(!audioRef.current){
      return
    }
    audioRef.current.currentTime = amount
    setProgress(amount)
  }

  return(
    <div className={styles.playerContainer}>
      <audio
        src={url}
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className={styles.player}>
        <button type="button" onClick={() => setIsPlaying(!isPlaying)}>
        {
          !isPlaying 
          ? <PlaySVG/>
          : <PauseSVG/>
        }
        </button>

        <div className={styles.playerControllers}>
          <span>{convertDurationToTimeString(progress)}</span>
           <Slider
              max={duration}
              value={progress}
              onChange={handleSeek}
              trackStyle={{ backgroundColor :  '#04d361'}}
              railStyle={{ backgroundColor : '#e8e8e8' }}
              handleStyle={{ borderColor : '#04d361', borderWidth : 4 }}
            />
          <span>{convertDurationToTimeString(Math.round(duration))}</span>
        </div>
      </div>
      <span className={styles.audio_name}>{name}</span>
    </div>
  )
}