import React from 'react'

function OrderTable({user, selectedOrder}) {
    
      const handleStatusChange = (event) => {
        const newStatus = parseInt(event.target.value);
      };

  return (
    <>
        <div className="divider">
            <label>
                اسم
                <input value={user?.firstName || ""} readOnly/>
            </label>
            <label>
                تخلص
                <input value={user?.lastName || ""} readOnly/>
            </label>
        </div>
        <label>
            ایمیل
            <input value={user?.email || ""} readOnly/>
        </label>
        <label>
            شماره تماس
            <input value={user?.phone || ""} readOnly/>
        </label>
        <div className="divider">
            <label>
                پوستل کود
                <input value={user?.postalCode || ""} readOnly/>
            </label>
            <label>
                شهر
                <input value={user?.city || ""} readOnly/>
            </label>
        </div>
        <label>
            آدرس
            <input value={user?.address || ""} readOnly/>
        </label>
        <div className="divider">
        <label>
             آپدیت حالت
            <select name="status" value={selectedOrder?.status} onChange={(e) => handleStatusChange(e)}>
                <option value={0} disabled={selectedOrder?.status === 0}>در حال طی مراحل</option>
                <option value={1} disabled={selectedOrder?.status === 1}>در حال پروسس</option>
                <option value={2} disabled={selectedOrder?.status === 2}>در حال انتقال</option>
                <option value={3} disabled={selectedOrder?.status === 3}>تحویل داده شد</option>
                <option value={4} disabled={selectedOrder?.status === 4}>لغو شد</option>
            </select>
            </label>

            <label>
                Total Price
                <input value={selectedOrder?.totalPrice || ""} readOnly/>
            </label>
        </div>
    </>
  )
}

export default OrderTable