import styles from './secondSectionVideo.module.css';
import useStyles from '../../hooks/useStyles';

function SecondSectionVideo() {
  const { setClass } = useStyles(styles);
  return (
    <video
      muted={true}
      loop={true}
      className={setClass('starWarsVideo')}
      src="/66527_star_wars_site_video-01_desktop.mp4"
    ></video>
  );
}

export default SecondSectionVideo;
