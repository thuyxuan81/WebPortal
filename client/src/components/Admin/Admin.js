/*import React from 'react';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';


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
    const body = JSON.stringify({ role: value });
    await axios.put(`/api/users/${targetUser}`, body, config);
  };

  return (
    <div>
     Admin 
    </div>
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
})(Admin);*/
import React from 'react'
import PropTypes from 'prop-types'

const Admin = props => {
  return (
    <div>
      Admin
    </div>
  )
}

Admin.propTypes = {

}

export default Admin

