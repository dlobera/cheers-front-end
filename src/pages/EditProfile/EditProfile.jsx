import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import DrinkDropdown from "../../components/DrinkDropdown/DrinkDropdown"
import SongDropdown from '../../components/SongDropdown/SongDropdown'
import styles from './EditProfile.module.css'


const EditProfile = props => {  
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.profile)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleUpdateProfile(formData)
    } catch (err) {
      console.log(err)
    }
  }

  const isFormInvalid = () => {
    return !(formData.name)}
  return (
    <div className={styles.editContainer}>
      <div className={styles.formContainer}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.formBody}
      >
        <div className={styles.inputHolder}>
        <div className={styles.inputContainerDiv}>
          <label className={styles.txt} htmlFor="name">Name:</label>
          <input type="text" autoComplete="off" id="name" value={formData.name}name="name" onChange={handleChange}
          className={styles.inputContainer}/>
        </div>
        <div className={styles.inputContainerDiv}>
          <label className={styles.txt} htmlFor="favorite-song">Favorite Song:</label>
          <SongDropdown songs={props.songs} onChange={handleChange} />
        </div>
        <div className={styles.dropdownContainerDiv}>
          <label className={styles.txt} htmlFor="favorite-drink">Favorite Drink:</label>
          <DrinkDropdown drinks={props.drinks} onChange={handleChange} />
        </div>
        </div>
        <div className={styles.dropdownContainer}>
          <button disabled={isFormInvalid()} className={styles.button}>
            Edit Profile
          </button>
          <Link to='/my-page' state={formData}>
            <button>Cancel</button>
          </Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default EditProfile
