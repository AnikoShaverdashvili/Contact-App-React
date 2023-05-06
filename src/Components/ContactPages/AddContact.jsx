import { useState } from "react";

const AddContact = (props) => {
  const handleAddContactSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactNumber.value.trim();
    props.handleAddContact({ name: name, email: email, phone: phone });
  };
  return (
    <div className="border col-12 text-white p-2">
      <form onSubmit={handleAddContactSubmit}>
        <div className="row p-2">
          <div className="col-12 text-white-50">Add a new contact</div>
          <div className="col-12 col-md-4 p-1">
            <input
              className="form-control form-control-sm "
              placeholder="Name..."
              name="contactName"></input>
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              className="form-control form-control-sm "
              placeholder="Email..."
              name="contactEmail"></input>
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              className="form-control form-control-sm "
              placeholder="Number..."
              name="contactNumber"></input>
          </div>
          <div className="col-12 col-md-6 offset-md-3 p-1">
            <button className="btn btn-primary btn-sm form-control">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
