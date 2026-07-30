import { Router } from 'express';
import * as authController from '../../../controllers/authController';
import * as projectController from '../../../controllers/projectController';
import * as plotController from '../../../controllers/plotController';
import * as bookingController from '../../../controllers/bookingController';
import * as leadController from '../../../controllers/leadController';
import * as dashboardController from '../../../controllers/dashboardController';
import * as aiController from '../../../controllers/aiController';
import { authenticateJWT } from '../../../middlewares/auth';
import { authorizeRoles } from '../../../middlewares/rbac';
import { UserRole } from '../../../shared/enums';

const router = Router();

// Auth Routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/logout', authController.logout);
router.get('/auth/me', authenticateJWT, authController.getMe);

// Project Routes
router.get('/projects', projectController.getProjects);
router.get('/projects/:slug', projectController.getProjectBySlug);
router.post('/projects', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.SUPER_ADMIN), projectController.createProject);
router.put('/projects/:id', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.SUPER_ADMIN), projectController.updateProject);
router.delete('/projects/:id', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.SUPER_ADMIN), projectController.deleteProject);

// Plot Routes
router.get('/plots/project/:projectId', plotController.getPlotsByProject);
router.post('/plots', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.SUPER_ADMIN), plotController.createPlot);
router.patch('/plots/:id/status', authenticateJWT, plotController.updatePlotStatus);

// Booking Routes
router.post('/bookings', authenticateJWT, bookingController.createBooking);
router.get('/bookings/me', authenticateJWT, bookingController.getMyBookings);
router.get('/bookings', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.EMPLOYEE), bookingController.getAllBookings);

// Lead / CRM Routes
router.post('/leads', leadController.createLead);
router.get('/leads', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.AGENT, UserRole.EMPLOYEE, UserRole.SUPER_ADMIN), leadController.getLeads);
router.patch('/leads/:id', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.AGENT, UserRole.EMPLOYEE, UserRole.SUPER_ADMIN), leadController.updateLeadStatus);

// Dashboard & Stats Routes
router.get('/dashboard/stats', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.SALES_MANAGER), dashboardController.getAdminDashboardStats);

// AI Assistant Route
router.post('/ai/recommendations', aiController.getAIPropertyRecommendations);

// Search API
router.get('/search', projectController.getProjects);

// ERP & Construction Routes
import * as erpController from '../../../controllers/erpController';
import * as accountingController from '../../../controllers/accountingController';

router.get('/erp/vendors', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.SUPER_ADMIN), erpController.getVendors);
router.post('/erp/vendors', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.SUPER_ADMIN), erpController.createVendor);
router.get('/erp/inventory', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.SUPER_ADMIN), erpController.getInventory);

// Accounting & Financial Ledger Routes
router.get('/accounting/ledger', authenticateJWT, authorizeRoles(UserRole.ADMIN, UserRole.SUPER_ADMIN), accountingController.getLedgerEntries);

export default router;
