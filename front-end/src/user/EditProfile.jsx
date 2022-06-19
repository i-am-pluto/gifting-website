import React, { useState } from "react";

export const EditProfile = ({ profile_user }) => {
  const [f_name, setFname] = useState(profile_user.name.f_name);
  const [l_name, setLname] = useState(profile_user.name.l_name);
  const [email, setEmail] = useState(profile_user.email);
  const [phoneNumber, setPhoneNumber] = useState(profile_user.phonenumber);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      profile_user,
    };

    user.name.f_name = f_name;
    user.name.l_name = l_name;
    user.email = email;
    user.phonenumber = phoneNumber;
    const response = await fetch("http://localhost:5000/api/user/edit", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (!data.success) {
      alert(data.message);
    }
  };

  return (
    <div>
      <div class="container bootstrap snippets bootdey">
        <h1 class="text-primary">Edit Profile</h1>
        <hr />
        <div class="row">
          <div class="col-md-3">
            <div class="text-center">
              <img
                class="avatar img-circle img-thumbnail"
                alt="avatar"
                id="profile-pic"
              />
              <h6>Profile Picture</h6>
              <input
                type="file"
                class="form-control"
                onChange={(input) => {
                  console.log("hi");
                  var reader = new FileReader();
                  reader.onload = (e) => {
                    document
                      .getElementById("profile-pic")
                      .setAttribute("src", e.target.result);
                  };

                  reader.readAsDataURL(input.target.files[0]);
                }}
              />
            </div>
          </div>

          <div class="col-md-9 personal-info">
            <form class="form-horizontal" onSubmit={handleSubmit}>
              <div class="form-group">
                <label class="col-lg-3 control-label">First name:</label>
                <div class="col-lg-8">
                  <input
                    class="form-control"
                    type="text"
                    value={f_name}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Last name:</label>
                <div class="col-lg-8">
                  <input
                    class="form-control"
                    type="text"
                    value={l_name}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Email:</label>
                <div class="col-lg-8">
                  <input
                    class="form-control"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Phone Number:</label>
                <div class="col-lg-8">
                  <input
                    class="form-control"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary ml-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
