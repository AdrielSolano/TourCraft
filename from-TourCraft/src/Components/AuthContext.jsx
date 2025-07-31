import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const userData = localStorage.getItem('userData');

      if (isLoggedIn && userData) {
        try {
          const parsedUserData = JSON.parse(userData);
          console.log('Datos del usuario en localStorage:', parsedUserData);
          setUser(parsedUserData);
          
          // Comentado: No hacer verificación automática del servidor
          // Esto puede causar que se cargue otro usuario
          /*
          if (parsedUserData.id) {
            const endpoint = parsedUserData.isGuia ? '/api/smart-auth/profile' : '/api/auth/profile';
            console.log('Intentando obtener datos actualizados desde:', endpoint);
            
            const response = await axios.get(`http://localhost:3000${endpoint}`, {
              withCredentials: true
            });
            
            if (response.data.success) {
              console.log('Datos actualizados del servidor:', response.data.data);
              setUser(response.data.data);
              localStorage.setItem('userData', JSON.stringify(response.data.data));
            }
          }
          */
        } catch (error) {
          console.error('Error checking auth status:', error);
          // No limpiar datos si es error de red, solo si es error de autenticación
          if (error.response?.status === 401 || error.response?.status === 403) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userData');
            setUser(null);
          }
        }
      }
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  const login = async (email, password) => {
    try {
      // Primero intentar login como guía (smart-auth)
      let response = await axios.post("http://localhost:3000/api/smart-auth/login", { email, password });
      
      if (response.data.success) {
        setUser(response.data.data);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(response.data.data));
        return { success: true };
      }
    } catch (error) {
      // Si falla smart-auth, intentar login regular con contraseña
      try {
        const response = await axios.post("http://localhost:3000/api/auth/login", { email, password });
        
        if (response.data.success) {
          setUser(response.data.data);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userData', JSON.stringify(response.data.data));
          return { success: true };
        } else {
          return { success: false, message: response.data.message };
        }
      } catch (regularError) {
        return { 
          success: false, 
          message: regularError.response?.data?.message || "Error al iniciar sesión" 
        };
      }
    }
    
    return { 
      success: false, 
      message: "Error al iniciar sesión" 
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
  };

  const updateUser = (newUserData) => {
    setUser(newUserData);
    localStorage.setItem('userData', JSON.stringify(newUserData));
  };

  const value = {
    user,
    loading,
    login,
    logout,
    updateUser,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 