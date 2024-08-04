import React from 'react';
import { useForm } from 'react-hook-form';


function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (registerData) => {
    console.log(registerData)
  };
  
  return (
    <div className='register'>
      <h1>راجستر</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="divider">
          <label className='input-label'>
            اسم <span>*</span>
            <div className='input-wrapper'>
              <input type="text" {...register("firstName", { required: true })} />
            </div>
          </label>
          {errors.firstName && <span>این معلومات ضروری میباشده</span>}
          <label className='input-label'>
            تخلص <span>*</span>
            <div className='input-wrapper'>
              <input type="text" {...register("lastName", { required: true })} />
            </div>
          </label>
        {errors.lastName && <span>این معلوات ضروری میباشد</span>}
        </div>
        <label className='input-label'>
          Email <span>*</span>
          <div className='input-wrapper'>
            <input type="email" {...register("email", { required: true })} />
          </div>
        </label>
        {errors.email && <span>این معلوات ضروری میباشد</span>}
        <label className='input-label'>
          Phone <span>*</span>
          <div className='input-wrapper'>
            <input type="phone" {...register("phone", { required: true })} />
          </div>
        </label>
        {errors.phone && <span>این معلوات ضروری میباشد</span>}
        <label className='input-label'>
          پاسورد <span>*</span>
          <div className='input-wrapper'>
            <input type="password" {...register("password", { required: true, minLength: 8, maxLength: 20 })} />
          </div>
        </label>
        {errors.password?.type === 'required' && <span>این معلوات ضروری میباشد</span>}
        {errors.password?.type === 'minLength' && <span>پاسورد حد اقل باید 8 تا باشد</span>}
        {errors.password?.type === 'maxLength' && <span>پاسورد حد اقل باد 20 تا باشد</span>}
        <button type="submit">راجستر</button>
      </form>
    </div>
  )
}

export default Register;
