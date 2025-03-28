import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "../pages/Auth";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import OtpVerification from "../pages/OtpVerification";
import ProtectedRoutes from "../userProtectedRoutes/ProtectedRoutes";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreatePenal from "../pages/Create/CreatePenal";
import AnalyzePenal from "../pages/Analyze/AnalyzePenal";
import EngagePenal from "../pages/Engage/EngagePenal";
import StartPagePenal from "../pages/StartPage/StartPagePenal";
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<Navigate to="/auth" replace />} />
      <Route path="/password/forgot" element={<ForgotPassword />} />
      <Route path="/password/reset/:token" element={<ResetPassword />} />
      <Route path="/otp-verification/:email/:phone" element={<OtpVerification />} />
      <Route path="/dashboard" element={<ProtectedRoutes><Layout><Dashboard /></Layout></ProtectedRoutes>} />
      <Route path="/create" element={<ProtectedRoutes><Layout><CreatePenal /></Layout></ProtectedRoutes>} />
      <Route path="/analyze" element={<ProtectedRoutes><Layout><AnalyzePenal /></Layout></ProtectedRoutes>} />
      <Route path="/engage" element={<ProtectedRoutes><Layout><EngagePenal /></Layout></ProtectedRoutes>} />
      <Route path="/startpage" element={<ProtectedRoutes><Layout><StartPagePenal /></Layout></ProtectedRoutes>} />
    </Routes>
  );
};

export default PublicRoutes;
