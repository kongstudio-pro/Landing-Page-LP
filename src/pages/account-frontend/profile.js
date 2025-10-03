import { useState, useRef } from 'react';

export default function EditProfilePage() {
  const [user, setUser] = useState({
    name: 'Indra Pratama',
    email: 'indrapratama@gmail.com',
    photo: '/images/gender/male.png',
  });

  const fileInputRef = useRef(null);

  const handleNameChange = (event) => {
    setUser({ ...user, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  const handlePhotoChange = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
    }
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const handleConfirmPasswordChange = (event) => {
    setUser({ ...user, confirmpassword: event.target.value });
  };

  const handleSave = () => {
    alert('Profile saved successfully');
  };

  return (
    <div
      className="min-h-screen text-white flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/dashboard_user/bgdash.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-md p-6 bg-gray-900 bg-opacity-80 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

        <div className="space-y-6">
          {/* Profile Photo Section */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={user.photo}
              alt="Profile Photo"
              className="w-20 h-20 rounded-full object-cover"
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileSelect}
            />
            <button
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
              onClick={handlePhotoChange}
            >
              Change photo
            </button>
          </div>

          {/* Name Section */}
          <div className="space-y-2 text-between">
            <label className="block text-sm text-gray-400">Name</label>
            <input
              type="text"
              value={user.name}
              onChange={handleNameChange}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 mx-auto"
            />
          </div>

          {/* Email Section */}
          <div className="space-y-2 text-between">
            <label className="block text-sm text-gray-400">Email address</label>
            <input
              type="email"
              value={user.email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 mx-auto"
            />
          </div>

          {/* Password Section */}
          <div className="space-y-2 text-between">
            <label className="block text-sm text-gray-400">Password</label>
            <input
              type="password"
              value={user.password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 mx-auto"
            />
          </div>

          <div className="space-y-2 text-between">
            <label className="block text-sm text-gray-400">Confirm Password</label>
            <input
              type="confirmpassword"
              value={user.confirmpassword}
              onChange={handleConfirmPasswordChange}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 mx-auto"
            />
          </div>

          {/* Save Button */}
          <div className="text-center">
            <button
              className="w-64 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 mx-auto"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}