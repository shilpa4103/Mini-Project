import React from 'react';


const ComapanyDetailsForm= () => {
  return (
    <div className="form-container">
      <h2>Job Details</h2>
      <form action="#" method="post">
        <label htmlFor="company_name">Company Name:</label><br/>
        <input type="text" id="company_name" name="company_name" required/><br/><br/>

        <label htmlFor="designation">Designation:</label><br/>
        <input type="text" id="designation" name="designation" required/><br/><br/>

        <label htmlFor="package">Package:</label><br/>
        <input type="text" id="package" name="package" required/><br/><br/>

        <label htmlFor="location">Location:</label><br/>
        <input type="text" id="location" name="location" required/><br/><br/>

        <label htmlFor="apply_before">Apply Before:</label><br/>
        <input type="date" id="apply_before" name="apply_before" required/><br/><br/>

        <label htmlFor="programs">Programs:</label><br/>
        <input type="text" id="programs" name="programs" required/><br/><br/>

        <label htmlFor="stream">Stream:</label><br/>
        <input type="text" id="stream" name="stream" required/><br/><br/>

        <label htmlFor="max_backlogs">Criteria: Max Backlogs</label><br/>
        <input type="number" id="max_backlogs" name="max_backlogs" required/><br/><br/>

        <label htmlFor="description">Description:</label><br/>
        <textarea id="description" name="description" rows="3" cols="50" required></textarea><br/><br/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default ComapanyDetailsForm;