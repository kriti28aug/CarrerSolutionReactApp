import React, { Component,useState } from 'react';

function RecruiterSignUpPage() {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handlerEventName(e){
		setName(e.target.value);
	}

	function handlerEventEmail(e){
		setEmail(e.target.value);
	}

	function handlerEventUsername(e){
		setUsername(e.target.value);
	}

	function handlerEventPassword(e){
		setPassword(e.target.value);
	}


	function register(){
		console.log(name+ "#####"+ email+ "####"+ username+ "####"+ password);
	}

	function resetForm(){
		setName("");
		setEmail("");
		setUsername("");
		setPassword("");
		console.log(name+ "*******"+ email+ "********"+ username+ "*******"+ password);
	}


	return (
		<div id="main">
			<div class="h-tag">
				<h2>Create Your Account</h2>
			</div>

			<div class="login">
				<table cellspacing="2" align="center" cellpadding="8" border="0">

					<tr>
						<td align="right">Enter Name :</td>
						<td><input type="text" placeholder="Enter user here" id="t1" class="tb" name="name" value={name} onChange={(e)=>handlerEventName(e)}/></td>
					</tr>
					<tr>
						<td align="right">Enter Email ID :</td>
						<td><input type="text" placeholder="Enter Email ID here" id="t2" class="tb" name="email" value={email} onChange={(e)=>handlerEventEmail(e)}/></td>
					</tr>
					<tr>
						<td align="right">Enter Username :</td>
						<td><input type="text" placeholder="Enter Username here" id="t3" class="tb" name="username" value={username} onChange={(e)=>handlerEventUsername(e)}/></td>
					</tr>
					<tr>
						<td align="right">Enter Password :</td>
						<td><input type="password" placeholder="Enter Password here" id="t4" class="tb" name="password" value={password} onChange={(e)=>handlerEventPassword(e)} /></td>
					</tr>
					{/* <tr>
						<td align="right">Enter Confirm Password :</td>
						<td><input type="password" placeholder="Enter Password here" id="t5" class="tb"  /></td>
					</tr>  */}
					<tr>
						
						<td>
							<input type="reset" value="Clear Form" onClick={resetForm} id="res" class="btn" />
							<input type="submit" value="Create Account" class="btn" onClick= {register}/></td>
					</tr>

				</table>
			</div>


		</div>

	)

}

export default RecruiterSignUpPage;