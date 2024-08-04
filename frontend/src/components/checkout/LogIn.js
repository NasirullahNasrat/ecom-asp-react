import React from 'react'
import { useUser} from "../../utils/hooks/useUser"
import Login from '../auth/LoginForm';

function Account() {
  const { currentUser } = useUser();

  return (
    <div>
      {currentUser ? (
      <div>
        <p>شما فعلا وارد شده اید به نام {currentUser.firstName}.</p>
      </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}


export default Account