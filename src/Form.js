import React from 'react'

const Form = ({handleAddFormChange, handleFormSubmit}) => {
  return (
    <form onSubmit={handleFormSubmit}>
    <input
      type="text" 
      name="fullName"
      required="required"
      placeholder="Enter a name..."
      onChange={handleAddFormChange}
      
    />
    <input
      type="text"
      name="address"
      required="required"
      placeholder="Enter a address..."
      onChange={handleAddFormChange}
    />
    <input
      type="text"
      name="phoneNumber"
      required="required"
      placeholder="Enter a phone number..."
      onChange={handleAddFormChange}
    />
    <input
      type="text"
      name="email"
      required="required"
      placeholder="Enter an email..."
      onChange={handleAddFormChange}
    />
    <button type="submit">Add</button>
  </form>
  )
}

export default Form