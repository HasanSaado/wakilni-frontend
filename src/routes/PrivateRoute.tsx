// Libraries
import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children: Children, redirectTo }: { children: any, redirectTo: any }) {
  const isAuth = localStorage.getItem('token')
  let location = useLocation();
  if (!isAuth) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />
  }
  return Children
}
