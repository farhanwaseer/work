// import React, { createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if user is already logged in when app starts
//   useEffect(() => {
//     bootstrapAsync();
//   }, []);

//   const bootstrapAsync = async () => {
//     try {
//       const userToken = await AsyncStorage.getItem('userToken');
//       const userData = await AsyncStorage.getItem('userData');
      
//       if (userToken && userData) {
//         setUser(JSON.parse(userData));
//         setIsLoggedIn(true);
//       }
//     } catch (e) {
//       console.log('Error restoring token:', e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loginUser = async (email, password) => {
//     try {
//       const response = await fetch(
//         'https://vehicle-management-ecru.vercel.app/api/auth/login',
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email, password })
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Login failed');
//       }

//       // Store token and user data
//       await AsyncStorage.setItem('userToken', data.token);
//       await AsyncStorage.setItem('userData', JSON.stringify(data.user));

//       setUser(data.user);
//       setIsLoggedIn(true);

//       return { success: true, data };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   };

//   const logoutUser = async () => {
//     try {
//       await AsyncStorage.removeItem('userToken');
//       await AsyncStorage.removeItem('userData');
//       setUser(null);
//       setIsLoggedIn(false);
//     } catch (e) {
//       console.log('Error clearing storage:', e);
//     }
//   };

//   const value = {
//     isLoggedIn,
//     user,
//     loading,
//     loginUser,
//     logoutUser
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in when app starts
  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const userData = await AsyncStorage.getItem('userData');
      
      if (userToken && userData) {
        setUser(JSON.parse(userData));
        setIsLoggedIn(true);
      }
    } catch (e) {
      console.log('Error restoring token:', e);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await fetch(
        'https://vehicle-management-ecru.vercel.app/api/auth/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // API response structure: { _id, name, email, role, token }
      const userInfo = {
        _id: data._id,
        name: data.name,
        email: data.email,
        role: data.role
      };

      // Store token and user data
      await AsyncStorage.setItem('userToken', data.token);
      await AsyncStorage.setItem('userData', JSON.stringify(userInfo));

      setUser(userInfo);
      setIsLoggedIn(true);

      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logoutUser = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userData');
      setUser(null);
      setIsLoggedIn(false);
    } catch (e) {
      console.log('Error clearing storage:', e);
    }
  };

  const value = {
    isLoggedIn,
    user,
    loading,
    loginUser,
    logoutUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}