import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './CustomerPage.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useAlert } from 'react-alert';

const CustomerPage = () => {
  const [totalUsers, setTotalUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [editableCells, setEditableCells] = useState([]);
  const [changedName, setChangedName] = useState('');
  const [changedEmail, setChangedEmail] = useState('');
  const [changedRole, setChangedRole] = useState('');
  const [changedPhone, setChangedPhone] = useState('');
  const [oldData, setOldData] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState('');
  const alert = useAlert();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/admin/getAllUsers');
        const allUsers = response.data.users;
        const startIndex = (currentPage - 1) * usersPerPage;
        const endIndex = startIndex + usersPerPage;
        const paginatedUsers = allUsers.slice(startIndex, endIndex);

        setTotalUsers(paginatedUsers);
        setEditableCells(new Array(paginatedUsers.length).fill(false));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage, usersPerPage]);

  const handleEdit = (index, user) => {
    const updatedEditableCells = [...editableCells];
    updatedEditableCells[index] = true;
    setEditableCells(updatedEditableCells);
    setOldData(user);
    setChangedName(user.name);
    setChangedEmail(user.email);
    setChangedRole(user.role);
    setChangedPhone(user.phoneNumber);
  };

  const handleCancel = (index) => {
    const updatedEditableCells = [...editableCells];
    updatedEditableCells[index] = false;
    setEditableCells(updatedEditableCells);
    setChangedName('');
    setChangedEmail('');
    setChangedRole('');
    setChangedPhone('');
  };

  const handleDelete = (userId) => {
    setSelectedUserId(userId);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async() => {
    // Implement your delete logic here
    try {
      const { data } = await axios.delete(`http://localhost:3000/api/v1/admin/users/deleteProfile/${selectedUserId}`);
      if (data.success) {
        alert.success(data.message);
        window.location.reload(); // Reload the page after successful save
      }
    } catch (error) {
      alert.error(error.message);
    }
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handleSave = async (index) => {
    const updatedEditableCells = [...editableCells];
    updatedEditableCells[index] = false;
    setEditableCells(updatedEditableCells);
    // Implement your save logic here
    console.log('Saving user with ID:', totalUsers[index]._id);
    const payload = {
      name: changedName,
      email: changedEmail,
      role: changedRole,
      phoneNumber: changedPhone,
    }
    try {
      const { data } = await axios.put(`http://localhost:3000/api/v1/admin/users/updateProfile/${totalUsers[index]._id}`, payload);
      if (data.success) {
        alert.success(data.message);
        window.location.reload(); // Reload the page after successful save
      }
    } catch (error) {
      alert.error(error.message);
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(totalUsers.length / usersPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Fragment>
      <div className="CustomerPage">
        <h1>Our Customers</h1>
        <table className="customerTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Profile Picture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {totalUsers.map((user, index) => (
              <tr key={user._id}>
                <td>
                  {editableCells[index] ? (
                    <input
                      type="text"
                      value={changedName}
                      onChange={(e) => setChangedName(e.target.value)}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editableCells[index] ? (
                    <input
                      type="email"
                      value={changedEmail}
                      onChange={(e) => setChangedEmail(e.target.value)}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editableCells[index] ? (
                    <input
                      type="number"
                      value={changedPhone}
                      onChange={(e) => setChangedPhone(e.target.value)}
                    />
                  ) : (
                    user.phoneNumber
                  )}
                </td>
                <td>
                  {editableCells[index] ? (
                    <input
                      type="text"
                      value={changedRole}
                      onChange={(e) => setChangedRole(e.target.value)}
                    />
                  ) : (
                    user.role
                  )}
                </td>
                <td>
                  <img
                    src={user.avatar.url}
                    alt="user img"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                    }}
                  />
                </td>
                <td>
                  {editableCells[index] ? (
                    <div>
                      <button style={{width:"50px", color:"green", backgroundColor:"white"}} onClick={() => handleSave(index)}>Save</button>
                      <button style={{ width: "50px", color: "red", backgroundColor: "white" }} onClick={() => handleCancel(index)}>X</button>
                    </div>
                  ) : (
                    <Fragment>
                      <EditIcon
                        onClick={() => handleEdit(index, user)}
                        style={{ cursor: 'pointer' }}
                      />
                      <DeleteIcon
                        onClick={() => handleDelete(user._id)}
                        style={{ cursor: 'pointer' }}
                        className="deleteIcon"
                      />
                    </Fragment>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1} style={{width:"30px", textAlign:"center"}}>
            <ChevronLeftIcon />
          </button>
          <span>{currentPage}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(totalUsers.length / usersPerPage)}
            style={{ width: "30px", alignItems: "center" }}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      {showDeleteModal && (
        <div className="deleteModal">
          <div className="deleteModalContent">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this user?</p>
            <div className="deleteModalButtons">
              <button className="deleteCancelButton" onClick={handleDeleteCancel}>
                Cancel
              </button>
              <button className="deleteConfirmButton" onClick={handleDeleteConfirm}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CustomerPage;
