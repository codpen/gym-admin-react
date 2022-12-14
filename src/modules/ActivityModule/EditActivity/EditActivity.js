import React, { useEffect, useState } from 'react';
import './EditActivity.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import activityMessage from '../../../main/messages/activityMessage'
import activityValidation from '../../../main/validations/activityValidation'
import activiyHTTPService from '../../../main/services/activityHTTPService'
import typeSubsHTTPService from '../../../main/services/typeSubsHTTPService';
import staffHTTPService from '../../../main/services/staffHTTPService';

const EditActivity = (props) => {

  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [activity, setActivity] = useState(props.activity);
  const [typeSubs, setTypeSubs] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setActivity(props.activity)
    getAllMembers()
    getTypeSubs()
  }, [props.activity]);


  const onSubmit = (data) => {
    activiyHTTPService.editActivity(props.activity, data).then(data => {
      props.closeModal()
      showMessage('Confirmation', activityMessage.edit, 'success')
    })

  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  const getAllMembers = () => {

    staffHTTPService.getAllStaff()
      .then(response => {
        setMembers(response.data);
      })
      .catch(e => {
        showMessage('Error', e, 'warning')
      });
  };

  const getTypeSubs = () => {
    typeSubsHTTPService.getAllTypeSubs().then(data => {
      setTypeSubs(data.data);
    })
  };


  return (
    <div className="EditActivity">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="select" class="col-4 col-form-label">Category</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={activity.category}
              ref={register({ required: true })}
              id="select" name="category" class="custom-select">
              <option value="Yoga">Yoga</option>
              <option value="Fitness">Fitness</option>
              <option value="Workout">Workout</option>
            </select>
            <div className="error text-danger">
              {errors.category && activityValidation.category}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Name</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={activity.title} ref={register({ required: true })}
              id="text" name="title" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.title && activityValidation.title}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select1" class="col-4 col-form-label">Coach</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={activity.member}
              ref={register({ required: true })} id="select1" name="member" class="custom-select">
              {members.map(item =>
                <option value={item.id}>{item.first_name} {item.last_name}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.member && activityValidation.member}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select2" class="col-4 col-form-label">Subscription type</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={activity.type} ref={register({ required: true })}
              id="select2" name="type" class="custom-select">
              {typeSubs.map(item =>
                <option value={item.id}>{item.time_payment}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.type && activityValidation.type}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary"><i class="far fa-save"></i>
              Save</button>
          </div>
        </div>
      </form>
    </div>
  )
};

EditActivity.propTypes = {};

EditActivity.defaultProps = {};

export default EditActivity;
