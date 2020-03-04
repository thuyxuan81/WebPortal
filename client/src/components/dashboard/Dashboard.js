import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
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

  if(role === 'Admin'){
    return <Redirect to='/Admin' />;
  }

  if (role === 'none') {
    return (
      <>
        <h5 className='large text-primary'>
          You dont have a role assinged, please wait for your administrator to assign you one.
          Thank You!
        </h5>
      </>
    );
  }

  if (role === 'Sales Admin') {
    return (
      <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Welcome {user && firstName}{' '}
          {user && lastName}
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
          {user && lastName}
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
          <Link to='/Finance-Reports' className='btn btn-primary my-1'>
            Finance Reports
          </Link>
        </p>
        <p>
          <Link to='/Accounts-Payable' className='btn btn-primary my-1'>
            Accounts Payable
          </Link>
        </p>
        <p>
          <Link to='/Accounts-Receivables' className='btn btn-primary my-1'>
            Accounts Receivables
          </Link>
        </p>
        <p>
          <Link to='/Tax' className='btn btn-primary my-1'>
            Tax
          </Link>
        </p>
      </Fragment>
    );
  }
  if (role === 'HR Admin') {
    return (
      <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Welcome {user && firstName}{' '}
          {user && lastName}
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
          <Link to='/New-Hire' className='btn btn-primary my-1'>
            New Hire
          </Link>
        </p>
        <p>
          <Link to='/On-boarding' className='btn btn-primary my-1'>
            On-boarding
          </Link>
        </p>
        <p>
          <Link to='/Benefits' className='btn btn-primary my-1'>
            Benefits
          </Link>
        </p>
        <p>
          <Link to='/Payroll' className='btn btn-primary my-1'>
            Payroll
          </Link>
        </p>
        <p>
          <Link to='/Terminations' className='btn btn-primary my-1'>
            Terminations
          </Link>
        </p>
        <p>
          <Link to='/HR' className='btn btn-primary my-1'>
            HR
          </Link>
        </p>
      </Fragment>
    );
  }
  if (role === 'Engineering Admin') {
    return (
      <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Welcome {user && firstName}{' '}
          {user && lastName}
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
          <Link to='/Application-Monitoring' className='btn btn-primary my-1'>
            Application Monitoring
          </Link>
        </p>
        <p>
          <Link to='/Tech-Support' className='btn btn-primary my-1'>
            Tech Support
          </Link>
        </p>
        <p>
          <Link to='/App-Development' className='btn btn-primary my-1'>
            App Development
          </Link>
        </p>
        <p>
          <Link to='/App-Admin' className='btn btn-primary my-1'>
            App Admin
          </Link>
        </p>
        <p>
          <Link to='/Release-Management' className='btn btn-primary my-1'>
            Release Management
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
