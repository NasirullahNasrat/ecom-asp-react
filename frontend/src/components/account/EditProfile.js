import React  from 'react';

function Profile({currentUser}) {

  return (
    <>
          <h1>ویرایش معلومات</h1>
          <div>
            <div className="divider">
              <label>
                اسم
                <input value={currentUser.firstName} readOnly />
              </label>
              <label>
                تخلص
                <input value={currentUser.lastName} readOnly />
              </label>
            </div>
            <label>
              ایمیل
              <input value={currentUser.email} readOnly/>
            </label>
            <label>
              شماره تماس
              <input value={currentUser.phone}readOnly />
            </label>
          </div>
          <h2>معلومات شیپنگ</h2>
          <label>
            آدرس
            <input value={currentUser.address} readOnly/>
          </label>
          <div className="divider">
            <label>
              پوستل کود
              <input value={currentUser.postalCode} readOnly/>
            </label>
            <label>
              شهر
              <input value={currentUser.city} readOnly/>
            </label>
          </div>
          <div className="divider">
            <button className='second-button'>لغو</button>
            <button>تایید</button>
          </div>
    </> 
  );
}

export default Profile;
