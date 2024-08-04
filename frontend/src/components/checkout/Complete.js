import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../assets/icons/icons'
import { useUser} from "../../utils/hooks/useUser"
import { Link } from 'react-router-dom'

function Complete() {
  const { currentUser } = useUser();

  return (
    <div className='complete'>
        <FontAwesomeIcon icon={icons.check} alt="" />
        <h1>در خواست شما تایید شد!</h1>
        <p> از در خواست شما ممنونیم {currentUser.firstName}.</p>
        <Link to="/"><button>ادامه شیپنگ</button></Link>
    </div>
  )
}

export default Complete