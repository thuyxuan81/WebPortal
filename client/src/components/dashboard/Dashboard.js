import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  const { firstName, lastName, role } = user;
  useEffect(() => {
    getCurrentProfile();
  }, []);

  if (role == 'Sales Admin') {
    return (
      <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Welcome {user && firstName}{' '}
          {user && lastName} your role is {user && role}
        </p>
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
        <p>
          <Link to='/Sales-Reports' className='btn btn-primary my-1'>
            Sale Reports
          </Link>
        </p>
        <p>
          <Link to='/Sales-Leads' className='btn btn-primary my-1'>
            Sale Leads
          </Link>
        </p>
        <p>
          <Link to='/Sales-Demo' className='btn btn-primary my-1'>
            Sales Demo
          </Link>
        </p>
      </Fragment>
    );
  }
  if (role === 'Finance Admin') {
    return (
      <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Welcome {user && firstName}{' '}
          {user && lastName} your role is {user && role}
        </p>
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
        <p>
          <Link to='/Sales-Reports' className='btn btn-primary my-1'>
            Other Reports
          </Link>
        </p>
      </Fragment>
    );
  }
  if (role == 'HR Admin') {
    return (
      <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Welcome {user && firstName}{' '}
          {user && lastName} your role is {user && role}
        </p>
        <p>
          <Link to='/Sales-Reports' className='btn btn-primary my-1'>
            Other Reports
          </Link>
        </p>
      </Fragment>
    );
  }
  if (role == 'Engineering Admin') {
    return (
      <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Welcome {user && firstName}{' '}
          {user && lastName} your role is {user && role}
        </p>
        <p>
          <Link to='/Sales-Reports' className='btn btn-primary my-1'>
            Other Reports
          </Link>
        </p>
      </Fragment>
    );
  }
  if (role == 'Admin') {
    return (
      <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Welcome {user && firstName}{' '}
          {user && lastName} your role is {user && role}
        </p>
        <p>
          <Link to='/Sales-Reports' className='btn btn-primary my-1'>
            Other Reports
          </Link>
        </p>
      </Fragment>
    );
  }
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
