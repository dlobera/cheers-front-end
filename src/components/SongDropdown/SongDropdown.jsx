import styles from '../../pages/EditProfile/EditProfile.module.css'
const SongDropdown = (props) => {
  return ( 
    props.songs.length &&
    <div className={styles.songContainer}>
    <select onChange={props.onChange} name="favoriteSong" className={styles.inputContainer}>
      <option></option>
      {props.songs.map((song, idx) => (
        <option key={idx} value={song._id}>
          {song.name} by {song.artist} 
        </option>
      ))}
  </select>
  </div>
  );
}

export default SongDropdown;