import jwt from 'jsonwebtoken';
export const TOKEN_KEY = "@mrjobs-token";
// export const isAuthenticated = () => {return true};
export const isAuthenticated = () => {
        let token = localStorage.getItem(TOKEN_KEY);
        let result = true;
        if(token !== null){
            let decodedToken = jwt.decode(token, {complete: true});
            let dateNow = new Date();
            if(decodedToken.exp < dateNow.getTime()){
                result = false;
                localStorage.removeItem(TOKEN_KEY);
            }
        }else{
            result = false;
        }
        return result;
    }
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
}
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}