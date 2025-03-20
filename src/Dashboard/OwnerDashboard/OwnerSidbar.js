import { FaTimes, FaUser, FaHome, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../AuthCheck";
import { MdFolderDelete } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

const OwnerSidebar = ({
  activeTab,
  setActiveTab,
  isMobileOpen,
  setIsMobileOpen,
}) => {
  const { logout, StudentId } = useAuth();

  const handleDelete = () => {
    try {
      Swal.fire({
        icon: "question",
        title: "Are you sure?",
        text: "Are you sure you want to leave us🥲",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const token = localStorage.getItem("token");
          await axios.delete(
            `${process.env.REACT_APP_API_URL}/api/Owner/${StudentId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          localStorage.removeItem("token");
          Swal.fire("Goodbye!", "You have left us.", "success");
          window.location.reload();
        } else if (result.isDismissed) {
          Swal.fire("Cancelled", "You are still with us 😊", "info");
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Delete Failed!",
        text: "Somthing wrong occaurd try again!",
      });
    }
  };

  return (
    <div
      className={`fixed md:sticky z-20 w-64 h-[100vh] bg-dark text-white transition-transform duration-300
        top-0 left-0 md:translate-x-0 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-bold">Owner Dashboard</h2>
        <button
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden text-gray-400 hover:text-white"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>

      <nav className="p-4 space-y-2 h-[calc(100vh-160px)] overflow-y-auto">
        {/*  My Profile */}
        <button
          onClick={() => {
            setActiveTab("profile");
            setIsMobileOpen(false);
          }}
          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors
            ${activeTab === "profile" ? "bg-primary" : "hover:bg-gray-700"}`}
        >
          <FaUser className="w-5 h-5" />
          <span>My Profile</span>
        </button>

        {/*  My Apartments */}
        <button
          onClick={() => {
            setActiveTab("apartments");
            setIsMobileOpen(false);
          }}
          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors
            ${activeTab === "apartments" ? "bg-primary" : "hover:bg-gray-700"}`}
        >
          <FaHome className="w-5 h-5" />
          <span>My Apartments</span>
        </button>
      </nav>

      {/*  Logout */}
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-700 bg-dark">
        <button
          onClick={() => {
            logout();
          }}
          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <FaSignOutAlt className="w-5 h-5" />
          <span>Logout</span>
        </button>
        <button
          onClick={() => {
            handleDelete();
          }}
          className="w-full flex items-center gap-3 p-3 bg-red-600 rounded-lg hover:bg-red-800 transition-colors mt-2"
        >
          <MdFolderDelete className="w-5 h-5" />
          <span>Delete Account</span>
        </button>
      </div>
    </div>
  );
};

export default OwnerSidebar;
