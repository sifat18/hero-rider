import { AuthContext } from "../AuthProvider/Authprovider";

const { useContext } = require("react")

const useAuth = () => {
    return useContext(AuthContext)
}
export default useAuth;