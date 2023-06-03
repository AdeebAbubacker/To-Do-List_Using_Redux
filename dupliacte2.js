import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Newcomponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupedit, setShowPopupedit] = useState(false);
  const [updatedSubmittedValues, setSubmittedValues] = useState([]);
  const [editValue, setEditValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [taskTime, setTaskTime] = useState('');

  const dispatch = useDispatch();

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleFormsubmit = () => {
    setShowPopup(false);
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const year = currentDate.getFullYear();
    const currentTime = currentDate.toLocaleTimeString();

    setTaskTime(currentTime);

    const updateUser = [
      ...updatedSubmittedValues,
      { fullname: inputValue, time: currentTime, date, year },
    ];
    setSubmittedValues(updateUser);

    const userinfo = {
      mydata1: updateUser,
      type: 'adduser',
    };
    dispatch(userinfo);

    setInputValue('');
    setSubmittedValues([]);
  };

  const handleEdit = (user, index) => {
    setEditValue(user.fullname);
    setShowPopupedit(true);
    setEditIndex(index);
  };

  const handleEditFormSubmit = () => {
    setShowPopupedit(false);

    const updatedUser = { fullname: editValue };
    if (editIndex !== -1) {
      const updatedUserList = alluser.map((user, index) => {
        if (index === editIndex) {
          return { ...user, fullname: updatedUser.fullname };
        }
        return user;
      });
      const userinfo = {
        type: 'updateuser',
        userindex: editIndex,
        updatedUser: updatedUser,
      };
      dispatch(userinfo);
    }
    setEditValue('');
    setEditIndex(-1);
  };

  const Deleteuser = (user) => {
    const userIndex = alluser.findIndex((u) => u.fullname === user.fullname);
    if (userIndex !== -1) {
      const userinfo = {
        type: 'removeuser',
        userindex: userIndex,
      };
      dispatch(userinfo);
    }
  };

  const alluser = useSelector((state) => state.Userlist);


  return (
    <>
      <h1 className='text-center'>TO DO LIST</h1>
      <div className='col-lg-8 mt-5'>
        <button className='btn btn-info' style={{ marginLeft: "500px" }} onClick={handleClick}>Add Task</button>
        <div>
          {showPopup && (
            <div className='popup'>
              <form
                onSubmit={handleFormsubmit}
                style={{
                  position: 'absolute',
                  top: '13%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '20px',
                  backgroundColor: '#fff',
                  borderRadius: '5px',
                  marginTop: '140px',
                  boxShadow: '9px',
                  backgroundColor: '#dee2e6',
                  width: "530px",
                  zIndex: 1,
                }}>
                <h4>Add To Do</h4>
                <p>Title</p>
                <input
                  type='text'
                  className='form-control'
                  onChange={obj => setInputValue(obj.target.value)}
                  value={inputValue} />
                <button type='submit' className='btn btn-primary mt-2 me-5'>Add Task</button>
                <button className='btn btn-danger mt-2 ' onClick={() => setShowPopup(false)}>Cancel</button>
              </form>
            </div>
          )}
          {showPopupedit && (
            <div className='popup'>
              <form
                onSubmit={handleEditFormSubmit}
                style={{
                  position: 'absolute',
                  top: '13%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '20px',
                  backgroundColor: '#fff',
                  borderRadius: '5px',
                  marginTop: '140px',
                  boxShadow: '9px',
                  backgroundColor: '#dee2e6',
                  width: "530px",
                  opacity: 1,
                  zIndex: 1
                }}>
                <h4>Edit To Do</h4>
                <p>Title</p>
                <input
                  type='text'
                  className='form-control'
                  value={editValue}
                  onChange={obj => setEditValue(obj.target.value)}
                />
                <button className='btn btn-primary mt-2 me-5'>Update Task</button>
                <button className='btn btn-danger mt-2 ' onClick={() => setShowPopupedit(false)}>Cancel</button>
              </form>
            </div>
          )}
        </div>
        <div>
          {alluser.map((user, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#bcbbbb',
                borderRadius: '5px',
                marginLeft: '320px',
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <div>
                <p>{user.fullname}</p>
                <p>{user.time}</p>
                <p>Date: {user.date}</p>
                <p>Year: {user.year}</p>
              </div>
              <div>
                <button className="btn btn-primary btndelete" onClick={() => Deleteuser(user)}>
                  Delete
                </button>
                <button className="btn btn-danger btnedit" onClick={() => handleEdit(user, index)}>
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
};

export default Newcomponent;
