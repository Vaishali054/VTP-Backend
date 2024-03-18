export const logoutUser = async (req, res) => {
    try {
      // Clear token from cookies
      res.clearCookie('token');
      
      // Respond with success message
      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  