import React, { Component } from 'react';


function JobSeekerSignUpPage() {

	

    return (

        <div id="main">
            <div class="h-tag">
                <h2>Create Your Job Seeker Applicationt</h2>
            </div>

            <div class="login">
                <table cellspacing="2" align="center" cellpadding="8" border="0">

                    <tr>

                        <td align="right">Enter First Name :</td>
                        <td><input type="text" placeholder="Enter user here" id="t1" class="tb" name="name" /></td>
                    </tr>
                    <tr>
                        <td align="right">Enter Middle Name :</td>
                        <td><input type="text" placeholder="Enter user here" id="t2" class="tb" name="name" /></td>
                    </tr>
                    <tr>
                        <td align="right">Enter Last Name :</td>
                        <td><input type="text" placeholder="Enter user here" id="t3" class="tb" name="name" /></td>
                    </tr>
                    <tr>
                        <td align="right">Enter Email ID :</td>
                        <td><input type="text" placeholder="Enter Email ID here" id="t4" class="tb" name="email" /></td>
                    </tr>
                    <tr>
                        <td align="right">Enter Mobile Number:</td>
                        <td><input type="text" placeholder="Enter number here" name="number" /></td>
                    </tr>
                    <tr>
                        <td align="middle" />
                        <label for="Gender">Choose a gender:</label>
                        <select id="gender" name="gender">
                            <option value="male">Male</option>
                            <option value="feMale">FeMale</option>
                            <option value="transGender">TransGender</option>
                        </select>
                    </tr>
                    <tr>
                        <td align="right">Enter Address :</td>
                        <td><input type="text" placeholder="Enter address here" id="t6" class="tb" name="address" /></td>
                    </tr>
                   
                    <tr>
                        <label for="State">Choose a state:</label>
                        <select name="state" id="state" class="form-control">
                            <option value="Please Select">Please Select</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </tr>
                    <tr>
                        <td align="right">Enter City :</td>
                        <td><input type="text" placeholder="Enter city here" id="t7" class="tb" name="city" /></td>
                    </tr>
                    <tr>
                        <td align="right">Enter PinCode :</td>
                        <td><input type="text" placeholder="Enter pinCode here" name="pinCode" /></td>
                    </tr>

                    <tr>
                        <td align="right">Enter Qualification :</td>
                        <td><input type="text" placeholder="Enter JobSeeker's highest qualification details here" id="t8" class="tb" name="qualification" /></td>
                    </tr>
                    <tr>
                        <td align="right">Enter Qualification :</td>
                        <td><input type="text" placeholder="Enter JobSeeker's highest qualification details here" id="t9" class="tb" name="qualification" /></td>
                    </tr>
                    <tr>
						<td></td>
						<td>
							<input type="reset" value="Clear Form"  />
							<input type="submit" value="Create Account"/></td>
					</tr>

                </table>
            </div>

        </div>

    )

}

export default JobSeekerSignUpPage;
