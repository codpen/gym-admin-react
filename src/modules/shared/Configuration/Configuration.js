import React from 'react';
import './Configuration.css';
import ConfigurationContent from '../ConfigurationContent/ConfigurationContent';

const Configuration = () => (
  <div className="content">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title"><i class="nc-icon nc-money-coins"></i> Settings</h4>
          </div>
          <div className="card-body">
            <ConfigurationContent />
          </div>
        </div>
      </div>

    </div>
  </div>
);

Configuration.propTypes = {};

Configuration.defaultProps = {};

export default Configuration;
