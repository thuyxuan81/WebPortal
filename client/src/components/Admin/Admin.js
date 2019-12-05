import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import { Table, Container, Col, Row } from 'react-bootstrap'


const Admin = ({ auth: {user}, logout}) => {
  const [targetUser, setTargetUser] = useState('');
  const [value, setValue] = useState('');
  const [userData, setUser] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios.get('/api/users');
      setUser(res.data.filter(a => a.role !== 'Admin'));
    } catch (err) {
      console.log(err);
    }
  }, []);
  
  var userRole = user && user.role;

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ userRole: value });
    await axios.put(`/api/users/${targetUser}`, body, config);
  };

  return (
    <>
      <h2>Admin Dashboard</h2>
      <Container>
        <Row>
          <Col>
            <p>
              <Link to='/Manage-User-Accounts' className='btn btn-primary my-1'>
                Manage User Accounts
              </Link>
            </p>
            <p>
              <Link to='/Assign-Roles' className='btn btn-primary my-1'>
                Assign Roles
              </Link>
            </p>
            <p>
              <Link to='/Help-Desk' className='btn btn-primary my-1'>
                Help Desk
              </Link>
            </p>
          </Col>
          <Col md={{ span: 8, offset: 1}}>
            <form onSubmit={handleSubmit}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map(u => (
                    <tr>
                      <td>{u.firstName}</td>
                      <td>{u.lastName}</td>
                      <td>{u.email}</td>
                      <td>{u.role}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

Admin.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps, {
  logout
})(Admin);
/*import React from 'react'
import PropTypes from 'prop-types'
import { Table, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <h2>Admin Dashboard</h2>
    <Container>
      <Row>
        <Col>
          <p>
            <Link to='/Manage-User-Accounts' className='btn btn-primary my-1'>
              Manage User Accounts
            </Link>
          </p>
          <p>
            <Link to='/Assign-Roles' className='btn btn-primary my-1'>
              Assign Roles
            </Link>
          </p>
          <p>
            <Link to='/Help-Desk' className='btn btn-primary my-1'>
              Help Desk
            </Link>
          </p>
        </Col>
        <Col md={{ span: 8, offset: 1}}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>hello@gmail.com</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>jacob@hi.com</td>
                <td>Finance Admin</td>
              </tr>
              <tr>
                <td>Larry</td>
                <td>Bird</td>
                <td>lbird@web.com</td>
                <td>Engineering Admin</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </>
  )
}

Admin.propTypes = {

}

export default Admin
*/
